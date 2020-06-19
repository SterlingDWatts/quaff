import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-regular-svg-icons";
import SubNav from "../SubNav/SubNav";
import LoginContext from "../../contexts/LoginContext";
import TokenService from "../../services/token-service";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    showSubNav: false,
  };

  static contextType = LoginContext;

  handleToggleSubNav = () => {
    this.setState({
      showSubNav: !this.state.showSubNav,
    });
  };

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
            <button type="button" className="NavBar__hamburger">
              <FontAwesomeIcon
                icon={faBars}
                onClick={this.handleToggleSubNav}
              />
            </button>
            <Link className="NavBar--no-pill NavBar--marquee" to="/">
              Q
            </Link>
            <NavBarPill to="/learn" label="Learn" />
            <NavBarPill to="/study" label="Study" />
            <NavBarPill to="/search" label="Search" />
          </div>
          {accountLink}
        </div>
        <SubNav
          toggleShowSubNav={this.handleToggleSubNav}
          showSubNav={this.state.showSubNav}
          onLogout={this.handleLogout}
        />
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
