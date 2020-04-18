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
import "./LoginForm.css";

class LoginForm extends Component {
  render() {
    return (
      <form className="LoginForm">
        <h2>Login</h2>
        <div className="hint">
          <Required /> required fields
        </div>
        <LabelGroup className="LoginForm__username">
          <Label htmlFor="username">
            Username <Required />
          </Label>
          <Input name="username" id="username" type="text" />
          <ValidationError />
        </LabelGroup>
        <LabelGroup className="LoginForm__password">
          <Label htmlFor="password">
            Password <Required />
          </Label>
          <Input name="password" id="password" type="password" />
        </LabelGroup>
        <div className="LoginForm--error">
          <ValidationError />
        </div>
        <div className="LoginForm__buttons">
          <Button type="submit" className="form__button">
            Login
          </Button>
        </div>
        <div className="LoginForm__other_links">
          Don't have an account yet?{" "}
          <Link to="/create-account">Create Account</Link>
        </div>
      </form>
    );
  }
}

export default LoginForm;
