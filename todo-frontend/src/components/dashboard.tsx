import React, { useEffect } from "react";
import "App.css";
import { useOktaAuth } from "@okta/okta-react";

const Dashboard = () => {
  const { authState } = useOktaAuth();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      console.log("logged in");
      console.log(authState?.accessToken?.accessToken);
    }
  }, [authState]);

  return <div>hello {authState?.accessToken?.accessToken}</div>;
};

export default Dashboard;
