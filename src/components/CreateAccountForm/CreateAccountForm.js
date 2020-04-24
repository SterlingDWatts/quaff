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
import "./CreateAccountForm.css";

class CreateAccountForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = {
    error: null,
    firstName: {
      value: "",
      touched: false,
    },
    lastName: {
      value: "",
      touched: false,
    },
    username: {
      value: "",
      touched: false,
    },
    email: {
      value: "",
      touched: false,
    },
    confirmEmail: {
      value: "",
      touched: false,
    },
    password: {
      value: "",
      touched: false,
    },
    confirmPassword: {
      value: "",
      touched: false,
    },
  };

  handleFirstNameChange = (firstName) => {
    this.setState({
      firstName: { value: firstName, touched: true },
    });
  };

  handleLastNameChange = (lastName) => {
    this.setState({ lastName: { value: lastName, touched: true } });
  };

  handleUsernameChange = (username) => {
    this.setState({
      username: { value: username, touched: true },
    });
  };

  handleEmailChange = (email) => {
    this.setState({
      email: { value: email, touched: true },
    });
  };

  handleConfirmEmailChange = (confirmEmail) => {
    this.setState({ confirmEmail: { value: confirmEmail, touched: true } });
  };

  handlePasswordChange = (password) => {
    this.setState({
      password: { value: password, touched: true },
    });
  };

  handleConfirmPasswordChange = (confirmPassword) => {
    this.setState({
      confirmPassword: { value: confirmPassword, touched: true },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, username, email, password } = this.state;

    this.setState({ error: null });
    AuthApiService.postUser({
      first_name: firstName.value,
      last_name: lastName.value,
      username: username.value,
      email: email.value,
      password: password.value,
    })
      .then((user) => {
        this.setState({
          firstName: { touched: false, value: "" },
          lastName: { touched: false, value: "" },
          username: { touched: false, value: "" },
          email: { touched: false, value: "" },
          password: { touched: false, value: "" },
          confirmEmail: { touched: false, value: "" },
          confirmPassword: { touched: false, value: "" },
        });
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const {
      error,
      firstName,
      lastName,
      username,
      email,
      confirmEmail,
      password,
      confirmPassword,
    } = this.state;
    const firstNameError = ValidationService.validateFirstName(firstName.value);
    const firstNameLabelError = ValidationService.validateNameLabel(
      firstName.value,
      firstName.touched
    );
    const lastNameError = ValidationService.validateLastName(lastName.value);
    const lastNameLabelError = ValidationService.validateNameLabel(
      lastName.value,
      lastName.touched
    );
    const usernameError = ValidationService.validateUsername(username.value);
    const usernameLabelError = ValidationService.validateUsernameLabel(
      username.value,
      username.touched
    );
    const emailError = ValidationService.validateEmail(email.value);
    const emailLabelError = ValidationService.validateEmailLabel(
      email.value,
      email.touched
    );
    const confirmEmailError = ValidationService.validateConfirmEmail(
      confirmEmail.value,
      email.value
    );
    const confirmEmailLabelError = ValidationService.validateConfirmEmailLabel(
      confirmEmail.value,
      email.value,
      confirmEmail.touched
    );
    const passwordError = ValidationService.validatePassword(password.value);
    const passwordLabelError = ValidationService.validatePasswordLabel(
      password.value,
      password.touched
    );
    const confirmPasswordError = ValidationService.validateConfirmPassword(
      confirmPassword.value,
      password.value
    );
    const confirmPasswordLabelError = ValidationService.validateConfirmPasswordLabel(
      confirmPassword.value,
      password.value,
      confirmPassword.touched
    );
    return (
      <form
        className="CreateAccountForm"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <h2>Create Account</h2>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="hint">
          <Required /> required fields
        </div>
        <LabelGroup className="CreateAccountForm__first_name">
          <Label htmlFor="first_name">
            {firstNameLabelError}First Name <Required />
          </Label>
          <Input
            error={firstNameLabelError}
            name="first_name"
            id="first_name"
            type="text"
            required
            onChange={(e) => this.handleFirstNameChange(e.target.value)}
          />
          <ValidationError
            message={firstNameError}
            touched={firstName.touched}
          />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__last_name">
          <Label htmlFor="last_name">
            {lastNameLabelError}Last Name <Required />
          </Label>
          <Input
            error={lastNameLabelError}
            name="last_name"
            id="last_name"
            type="text"
            required
            onChange={(e) => this.handleLastNameChange(e.target.value)}
          />
          <ValidationError message={lastNameError} touched={lastName.touched} />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__username">
          <Label htmlFor="username">
            {usernameLabelError}Username <Required />
          </Label>
          <Input
            error={usernameLabelError}
            name="username"
            id="username"
            type="text"
            required
            onChange={(e) => this.handleUsernameChange(e.target.value)}
          />
          <ValidationError message={usernameError} touched={username.touched} />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__email">
          <Label htmlFor="email">
            {emailLabelError}Email <Required />
          </Label>
          <Input
            error={emailLabelError}
            name="email"
            id="email"
            type="email"
            required
            onChange={(e) => this.handleEmailChange(e.target.value)}
          />
          <ValidationError message={emailError} touched={email.touched} />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__confirm_email">
          <Label htmlFor="confirm_email">
            {confirmEmailLabelError}Confirm Email <Required />
          </Label>
          <Input
            error={confirmEmailLabelError}
            name="confirm_email"
            id="confirm_email"
            type="email"
            required
            onChange={(e) => this.handleConfirmEmailChange(e.target.value)}
          />
          <ValidationError
            message={confirmEmailError}
            touched={confirmEmail.touched}
          />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__password">
          <Label htmlFor="password">
            {passwordLabelError}Password <Required />
          </Label>
          <Input
            error={passwordLabelError}
            name="password"
            id="password"
            type="password"
            required
            onChange={(e) => this.handlePasswordChange(e.target.value)}
          />
          <ValidationError message={passwordError} touched={password.touched} />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__confirm_password">
          <Label htmlFor="confirm_password">
            {confirmPasswordLabelError}Confirm Password <Required />
          </Label>
          <Input
            error={confirmPasswordLabelError}
            name="confirm_password"
            id="confirm_password"
            type="password"
            required
            onChange={(e) => this.handleConfirmPasswordChange(e.target.value)}
          />
          <ValidationError
            message={confirmPasswordError}
            touched={confirmPassword.touched}
          />
        </LabelGroup>
        <div className="CreateAccountForm--error">
          <ValidationError />
        </div>
        <div className="CreateAccountForm__buttons">
          <Button type="submit" className="form__button">
            Create Account
          </Button>
        </div>
        <div className="CreateAccountForm__other_links">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    );
  }
}

export default CreateAccountForm;
