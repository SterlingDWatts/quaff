import React, { Component } from "react";
import CreateAccountForm from "../../components/CreateAccountForm/CreateAccountForm";
import "./CreateAccount.css";

class CreateAccount extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="CreateAccount">
        <CreateAccountForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    );
  }
}

export default CreateAccount;
