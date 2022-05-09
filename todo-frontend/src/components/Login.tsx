import React from "react";
import "App.css";
import { useOktaAuth } from "@okta/okta-react/bundles/types";

import SecureRoute from "components/SecureRoute";

const Auth = () => {

  const login = () => {
    const auth = useOktaAuth();
    

  const { user, signIn, signUp, SignOut } = useAuth();
  // ideally, this should be at the top of the root component that requires authentication
  // if should automatically check if the user is logged in already and redirect to the dashboard if they are
  // it should provide an easy way to sign in and sign out
  // also provide a way to detect if login has expired


  const { authState } = useOktaAuth();
  const handleAuth = () => {
    console.log("authState", authState);
  };
  return (
    <div>
      <button onClick={handleAuth}>Login</button>
    </div>
  );
};

export default Auth;
