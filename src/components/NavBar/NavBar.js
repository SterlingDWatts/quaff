import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";
import TokenService from "../../services/token-service";
import "./NavBar.css";

class NavBar extends Component {
  static contextType = LoginContext;

  handleLogout = () => {
    TokenService.clearAuthToken();
    window.localStorage.removeItem("test");
    this.context.logout();
  };

  renderLogout = () => {
    return (
      <Link
        className="NavBar--no-pill NavBar--account-link"
        to="/"
        onClick={this.handleLogout}
      >
        Logout
      </Link>
    );
  };

  renderLogin = () => {
    return (
      <Link className="NavBar--no-pill NavBar--account-link" to="/login">
        Login
      </Link>
    );
  };

  render() {
    const accountLink = this.context.loggedIn
      ? this.renderLogout()
      : this.renderLogin();
    return (
      <nav className="NavBar">
        <div className="NavBar__container">
          <div className="NavBar__logo_div">
            <Link className="NavBar--no-pill NavBar--marquee" to="/">
              Q
            </Link>
            <NavBarPill to="/learn" label="Learn" />
            <NavBarPill to="/study" label="Study" />
          </div>
          {accountLink}
        </div>
      </nav>
    );
  }
}

function NavBarPill({ label, to }) {
  let match = useRouteMatch({
    path: to,
    exact: false,
  });

  return (
    <Link to={to}>
      <div className={match ? "NavBarPill--active" : "NavBarPill"}>{label}</div>
    </Link>
  );
}

export default NavBar;
