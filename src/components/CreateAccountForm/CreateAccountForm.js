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
import "./CreateAccountForm.css";

class CreateAccountForm extends Component {
  render() {
    return (
      <form className="CreateAccountForm">
        <h2>Create Account</h2>
        <div className="hint">
          <Required /> required fields
        </div>
        <LabelGroup className="CreateAccountForm__first_name">
          <Label htmlFor="first_name">
            First Name <Required />
          </Label>
          <Input name="first_name" id="first_name" type="text" required />
          <ValidationError />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__last_name">
          <Label htmlFor="last_name">
            Last Name <Required />
          </Label>
          <Input name="last_name" id="last_name" type="text" required />
          <ValidationError />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__username">
          <Label htmlFor="username">
            Username <Required />
          </Label>
          <Input name="username" id="username" type="text" required />
          <ValidationError />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__email">
          <Label htmlFor="email">
            Email <Required />
          </Label>
          <Input name="email" id="email" type="email" required />
          <ValidationError />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__confirm_email">
          <Label htmlFor="confirm_email">
            Confirm Email <Required />
          </Label>
          <Input
            name="confirm_email"
            id="confirm_email"
            type="email"
            required
          />
          <ValidationError />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__password">
          <Label htmlFor="password">
            Password <Required />
          </Label>
          <Input name="password" id="password" type="password" required />
          <ValidationError />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__confirm_password">
          <Label htmlFor="confirm_password">
            Confirm Password <Required />
          </Label>
          <Input
            name="confirm_password"
            id="confirm_password"
            type="password"
            required
          />
          <ValidationError />
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
