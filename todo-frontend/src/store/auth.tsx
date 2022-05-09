import { atom, RecoilState } from "recoil";

const authState: RecoilState<AuthState> = atom({
  key: "auth",
  default: { user: null, loading: false, error: null } as AuthState,
});

export default authState;
