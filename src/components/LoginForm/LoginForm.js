import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  LabelGroup,
  Label,
  Input,
  Button,
  Required,
  ValidationError,
} from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import ValidationService from "../../services/validation-service";
import ModulesApiService from "../../services/modules-api-service";
import "./LoginForm.css";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = {
    error: null,
    username: {
      value: "",
      touched: false,
    },
    password: {
      value: "",
      touched: false,
    },
  };

  handleUsernameChange = (username) => {
    this.setState({
      username: {
        value: username,
        touched: true,
      },
    });
  };

  handlePasswordChange = (password) => {
    this.setState({
      password: {
        value: password,
        touched: true,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    this.setState({
      error: null,
    });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        this.setState({
          username: { touched: false, value: "" },
          password: { touched: false, value: "" },
        });
        this.props.onLoginSuccess();
        if (window.localStorage.getItem("test")) {
          const test = JSON.parse(window.localStorage.getItem("test"));
          ModulesApiService.insertTest(test.id, test.views, test.score)
            .then((quiz) => {
              window.localStorage.removeItem("test");
            })
            .catch();
        }
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error, username, password } = this.state;
    const usernameError = ValidationService.validateUsername(username.value);
    const usernameLabelError = ValidationService.validateUsernameLabel(
      username.value,
      username.touched
    );
    const passwordError = ValidationService.validatePassword(password.value);
    const passwordLabelError = ValidationService.validatePasswordLabel(
      password.value,
      password.touched
    );
    return (
      <form className="LoginForm" onSubmit={(e) => this.handleSubmit(e)}>
        <header>
          <h1>Login</h1>
        </header>
        <div className="hint">
          <Required /> required fields
        </div>
        <LabelGroup className="LoginForm__username">
          <Label htmlFor="username">
            {usernameLabelError}Username <Required />
          </Label>
          <Input
            error={usernameLabelError}
            name="username"
            id="username"
            type="text"
            onChange={(e) => this.handleUsernameChange(e.target.value)}
          />
          <ValidationError message={usernameError} touched={username.touched} />
        </LabelGroup>
        <LabelGroup className="LoginForm__password">
          <Label htmlFor="password">
            {passwordLabelError}Password <Required />
          </Label>
          <Input
            error={passwordLabelError}
            name="password"
            id="password"
            type="password"
            onChange={(e) => this.handlePasswordChange(e.target.value)}
          />
          <ValidationError message={passwordError} touched={password.touched} />
        </LabelGroup>
        <div className="LoginForm--error">
          <ValidationError message={error} touched={true} />
        </div>
        <div className="LoginForm__buttons">
          <Button type="submit" className="form__button">
            Login
          </Button>
        </div>
        <div className="LoginForm__other_links">
          Don't have an account?{" "}
          <Link to="/create-account">Create Account</Link>
        </div>
      </form>
    );
  }
}

export default LoginForm;
