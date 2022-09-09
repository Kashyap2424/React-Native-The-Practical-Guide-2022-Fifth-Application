import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ childern }) {
  const [authToken, setAuthToken] = useState();

  function authenticated(token) {
    setAuthToken(token);
  }

  function logout(params) {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticated: authenticated,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{childern}</AuthContext.Provider>;
}

export default AuthContextProvider;
