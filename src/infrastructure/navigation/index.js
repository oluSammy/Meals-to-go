import React, { useContext } from "react";
import AppNavigator from "./app.navigator";
import { AuthContext } from "../../services/authentication/authentication.context";
import AccountNavigator from "./account.navigator";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  return (
    <React.Fragment>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </React.Fragment>
  );
};

export default Navigation;
