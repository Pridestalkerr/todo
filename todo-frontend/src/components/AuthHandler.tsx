import React from "react";
import "App.css";
import { useOktaAuth } from "@okta/okta-react/bundles/types";

import SecureRoute from "components/SecureRoute";

import authStateAtom from "store/auth"
import { useRecoilValue, useSetRecoilState } from "recoil";

type useAuthState = {
    user: User | null;
    loading: boolean;
    error: Error | null;
    signIn: () => void;
    signUp: () => void;
    SignOut: () => void;
}




const useAuth = (_fn: SignInFunction) => {
    const authState = useRecoilValue(authStateAtom);
    const setAuth = useSetRecoilState(authStateAtom);

    const signIn = (...args: any[]) => {
        const user: User = _fn(...args);
        setAuth({ user, loading: false, error: null });
            
    return {
        user,
        signIn,
        signUp,
        SignOut,
    }: useAuthState;
};

export default Auth;
