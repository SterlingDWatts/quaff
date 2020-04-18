import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <LoginForm />
      </div>
    );
  }
}

export default Login;
