import React, { createContext, Component } from "react";
import TokenService from "../services/token-service";

const LoginContext = createContext({
  loggedIn: false,
  login: () => {},
  logout: () => {},
});

export default LoginContext;

export class LoginProvider extends Component {
  state = {
    loggedIn: TokenService.hasAuthToken(),
  };

  login = () => {
    this.setState({
      loggedIn: true,
    });
  };

  logout = () => {
    this.setState({
      loggedIn: false,
    });
  };

  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      login: this.login,
      logout: this.logout,
    };
    return (
      <LoginContext.Provider value={value}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}
