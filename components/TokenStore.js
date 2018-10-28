import { setCookie } from "../lib/session";

const TokenStore = ({ mutation: { data } }) => {
  if (data)
    // window.localStorage.setItem(
    //   "token",
    //   data.signup ? data.signup.token : data.login.token
    // );
    setCookie("jwt", data.signup ? data.signup.token : data.login.token);
  return null;
};

export default TokenStore;
