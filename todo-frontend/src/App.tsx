import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Security, useOktaAuth } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import "App.css";
import Dashboard from "components/dashboard";
import Auth from "components/auth";

import SecureRoute from "components/SecureRoute";
import { RecoilRoot } from "recoil";

function App() {
  // const navigate = useNavigate();

  // const oktaAuth: OktaAuth = new OktaAuth({
  //   issuer: process.env.OKTA_ORG_URL || "dev-21038208.okta.com",
  //   clientId: process.env.OKTA_CLIENT_ID || "0oa4x9ri3w4g28Fs45d7",
  //   redirectUri: window.location.origin + "login/callback",
  // });

  // const restoreOriginalUri = async (
  //   _oktaAuth: OktaAuth,
  //   originalUri: string
  // ) => {
  //   // navigate(toRelativeUrl(originalUri || "/", window.location.origin));
  // };

  return (
    <RecoilRoot>
      <BrowserRouter>
        <div>this is home</div>
        <Routes>
          {/* <Route path="/login/callback" element={<Auth />} /> */}
          <Route path="/dashboard" element={<SecureRoute />} />
          {/* <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
          <SecureRoute path="/dashboard" element={<Dashboard />} />
          <Route path="/login/callback" element={<Auth />} />
        </Security> */}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
