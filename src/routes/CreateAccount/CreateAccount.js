import React, { Component } from "react";
import CreateAccountForm from "../../components/CreateAccountForm/CreateAccountForm";
import "./CreateAccount.css";

class CreateAccount extends Component {
  render() {
    return (
      <div className="CreateAccount">
        <CreateAccountForm />
      </div>
    );
  }
}

export default CreateAccount;
