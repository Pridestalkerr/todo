// import { OktaError } from "@okta/okta-react/bundles/types/OktaError";
// export { OktaError };
// declare module "@okta/okta-react";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  login: string;
  lastLogin: string;
  lastLoginTime: string;
  lastLoginClientIp: string;
  lastLoginClientId: string;
  lastLoginClientVersion: string;
  lastLoginClientType: string;
  lastLoginClientName: string;
  lastLoginClientOs: string;
  lastLoginClientOsVersion: string;
  lastLoginClientOsPlatform: string;
  lastLoginClientBrowser: string;
  lastLoginClientBrowserVersion: string;
  lastLoginClientBrowserEngine: string;
  lastLoginClientBrowserEngineVersion: string;
  lastLoginClientBrowserEnginePlatform: string;
  lastLoginClientBrowserEnginePlatformVersion: string;
};

type AuthState = {
  user: User | null;
  loading: boolean;
  error: Error | null;
};

// takes any parameters but must output a User so that the component can share the state
type SignInFunction = (...args: any[]) => User;
