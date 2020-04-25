import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.sate || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <div className="Login">
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}

export default Login;
