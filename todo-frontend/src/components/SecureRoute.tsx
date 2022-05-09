import { toRelativeUrl } from "@okta/okta-auth-js";
import { useOktaAuth } from "@okta/okta-react";
import { OnAuthRequiredFunction } from "@okta/okta-react/bundles/types/OktaContext";
// import type { OktaContext } from "@okta/okta-react";

import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Outlet, RouteProps, useMatch } from "react-router-dom";

const OktaError: React.FC<{ error: Error }> = (_ref) => {
  var error = _ref.error;

  if (error.name && error.message) {
    return /*#__PURE__*/ React.createElement(
      "p",
      null,
      error.name,
      ": ",
      error.message
    );
  }

  return /*#__PURE__*/ React.createElement(
    "p",
    null,
    "Error: ",
    error.toString()
  );
};

const SecureRoute: React.FC<
  {
    onAuthRequired?: OnAuthRequiredFunction;
    errorComponent?: React.ComponentType<{ error: Error }>;
  } & RouteProps &
    React.HTMLAttributes<HTMLDivElement>
> = ({ onAuthRequired, errorComponent, ...routeProps }) => {
  const { oktaAuth, authState, _onAuthRequired } = useOktaAuth();
  const { path = "/*", caseSensitive } = routeProps;
  const match = useMatch({ path, caseSensitive });
  const pendingLogin = useRef(false);
  const [handleLoginError, setHandleLoginError] = useState<Error | null>(null);
  const ErrorReporter = errorComponent || OktaError;

  useEffect(() => {
    const handleLogin = async () => {
      if (pendingLogin.current) {
        return;
      }
      pendingLogin.current = true;

      const originalUri = toRelativeUrl(
        window.location.href,
        window.location.origin
      );
      oktaAuth.setOriginalUri(originalUri);
      const onAuthRequiredFn = onAuthRequired || _onAuthRequired;
      if (onAuthRequiredFn) {
        await onAuthRequiredFn(oktaAuth);
      } else {
        await oktaAuth.signInWithRedirect();
      }

      // process logic if route matches
      if (!match) {
        return;
      }

      if (!authState) {
        return;
      }

      if (authState.isAuthenticated) {
        pendingLogin.current = false;
        return;
      }

      if (!authState.isAuthenticated) {
        handleLogin().catch((err) => {
          setHandleLoginError(err as Error);
        });
      }
    };
  }, [authState, oktaAuth, match, onAuthRequired, _onAuthRequired]);

  if (handleLoginError) {
    return <ErrorReporter error={handleLoginError} />;
  }

  if (!authState || !authState.isAuthenticated) {
    return null;
  }

  return <Outlet />;
};

export default SecureRoute;
