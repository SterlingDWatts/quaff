import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LabelGroup, Label, Input, Button, Required, ValidationError } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import ValidationService from "../../services/validation-service";
import ModulesApiService from "../../services/modules-api-service";
import LoginContext from "../../contexts/LoginContext";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    username: { value: "", touched: false },
    password: { value: "", touched: false },
  });
  const context = useContext(LoginContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: { value, touched: true } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    setError(null);

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        setForm({
          username: { touched: false, value: "" },
          password: { touched: false, value: "" },
        });
        context.login();
        props.onLoginSuccess();
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
        setError(res.error);
      });
  };

  const { username, password } = form;
  const usernameError = ValidationService.validateUsername(username.value);
  const usernameLabelError = ValidationService.validateUsernameLabel(username.value, username.touched);
  const passwordError = ValidationService.validatePassword(password.value);
  const passwordLabelError = ValidationService.validatePasswordLabel(password.value, password.touched);
  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
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
          value={username.value}
          onChange={handleChange}
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
          value={password.value}
          onChange={handleChange}
        />
        <ValidationError message={passwordError} touched={password.touched} />
      </LabelGroup>
      <div className="LoginForm--error">
        <ValidationError message={error} touched={true} />
      </div>
      <div className="LoginForm__buttons">
        <Button type="submit" className="form__button" disabled={usernameError || passwordError}>
          Login
        </Button>
      </div>
      <div className="LoginForm__other_links">
        Don't have an account? <Link to="/create-account">Create Account</Link>
      </div>
    </form>
  );
};

LoginForm.defaultProps = {
  onLoginSuccess: () => {},
};

export default LoginForm;
