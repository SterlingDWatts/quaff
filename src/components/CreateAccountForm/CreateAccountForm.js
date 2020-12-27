import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LabelGroup, Label, Input, Button, Required, ValidationError, PasswordValidationError } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import ValidationService from "../../services/validation-service";
import "./CreateAccountForm.css";

const CreateAccountForm = (props) => {
  const [form, setForm] = useState({
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
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: { value, touched: true } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const { firstName, lastName, username, email, password } = form;

    AuthApiService.postUser({
      first_name: firstName.value,
      last_name: lastName.value,
      username: username.value,
      email: email.value,
      password: password.value,
    })
      .then((user) => {
        setForm({
          firstName: { touched: false, value: "" },
          lastName: { touched: false, value: "" },
          username: { touched: false, value: "" },
          email: { touched: false, value: "" },
          password: { touched: false, value: "" },
          confirmEmail: { touched: false, value: "" },
          confirmPassword: { touched: false, value: "" },
        });
        props.onRegistrationSuccess();
      })
      .catch((res) => {
        setError({ error: res.error });
      });
  };

  const { firstName, lastName, username, email, confirmEmail, password, confirmPassword } = form;
  const firstNameError = ValidationService.validateFirstName(firstName.value);
  const firstNameLabelError = ValidationService.validateNameLabel(firstName.value, firstName.touched);
  const lastNameError = ValidationService.validateLastName(lastName.value);
  const lastNameLabelError = ValidationService.validateNameLabel(lastName.value, lastName.touched);
  const usernameError = ValidationService.validateUsername(username.value);
  const usernameLabelError = ValidationService.validateUsernameLabel(username.value, username.touched);
  const emailError = ValidationService.validateEmail(email.value);
  const emailLabelError = ValidationService.validateEmailLabel(email.value, email.touched);
  const confirmEmailError = ValidationService.validateConfirmEmail(confirmEmail.value, email.value);
  const confirmEmailLabelError = ValidationService.validateConfirmEmailLabel(
    confirmEmail.value,
    email.value,
    confirmEmail.touched
  );
  const passwordError = ValidationService.validatePassword(password.value);
  const passwordLabelError = ValidationService.validatePasswordLabel(password.value, password.touched);
  const confirmPasswordError = ValidationService.validateConfirmPassword(confirmPassword.value, password.value);
  const confirmPasswordLabelError = ValidationService.validateConfirmPasswordLabel(
    confirmPassword.value,
    password.value,
    confirmPassword.touched
  );
  return (
    <form className="CreateAccountForm" onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <div role="alert">{error && <p className="red">{error}</p>}</div>
      <div className="hint">
        <Required /> required fields
      </div>
      <LabelGroup className="CreateAccountForm__first_name">
        <Label htmlFor="firstName">
          {firstNameLabelError}First Name <Required />
        </Label>
        <Input
          error={firstNameLabelError}
          name="firstName"
          id="firstName"
          type="text"
          required
          onChange={handleChange}
        />
        <ValidationError message={firstNameError} touched={firstName.touched} />
      </LabelGroup>
      <LabelGroup className="CreateAccountForm__last_name">
        <Label htmlFor="lastName">
          {lastNameLabelError}Last Name <Required />
        </Label>
        <Input error={lastNameLabelError} name="lastName" id="lastName" type="text" required onChange={handleChange} />
        <ValidationError message={lastNameError} touched={lastName.touched} />
      </LabelGroup>
      <LabelGroup className="CreateAccountForm__username">
        <Label htmlFor="username">
          {usernameLabelError}Username <Required />
        </Label>
        <Input error={usernameLabelError} name="username" id="username" type="text" required onChange={handleChange} />
        <ValidationError message={usernameError} touched={username.touched} />
      </LabelGroup>
      <LabelGroup className="CreateAccountForm__email">
        <Label htmlFor="email">
          {emailLabelError}Email <Required />
        </Label>
        <Input error={emailLabelError} name="email" id="email" type="email" required onChange={handleChange} />
        <ValidationError message={emailError} touched={email.touched} />
      </LabelGroup>
      <LabelGroup className="CreateAccountForm__confirm_email">
        <Label htmlFor="confirmEmail">
          {confirmEmailLabelError}Confirm Email <Required />
        </Label>
        <Input
          error={confirmEmailLabelError}
          name="confirmEmail"
          id="confirmEmail"
          type="email"
          required
          onChange={handleChange}
        />
        <ValidationError message={confirmEmailError} touched={confirmEmail.touched} />
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
          onChange={handleChange}
        />
        <PasswordValidationError password={password.value} touched={password.touched} />
      </LabelGroup>
      <LabelGroup className="CreateAccountForm__confirm_password">
        <Label htmlFor="confirmPassword">
          {confirmPasswordLabelError}Confirm Password <Required />
        </Label>
        <Input
          error={confirmPasswordLabelError}
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          required
          onChange={handleChange}
        />
        <ValidationError message={confirmPasswordError} touched={confirmPassword.touched} />
      </LabelGroup>
      <div className="CreateAccountForm--error">
        <ValidationError />
      </div>
      <div className="CreateAccountForm__buttons">
        <Button
          type="submit"
          className="form__button"
          disabled={
            firstNameError ||
            lastNameError ||
            usernameError ||
            emailError ||
            confirmEmailError ||
            passwordError ||
            confirmPasswordError
          }
        >
          Create Account
        </Button>
      </div>
      <div className="CreateAccountForm__other_links">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </form>
  );
};

CreateAccountForm.defaultProps = {
  onRegistrationSuccess: () => {},
};

export default CreateAccountForm;
