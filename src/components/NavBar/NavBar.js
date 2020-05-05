import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./NavBar.css";

class NavBar extends Component {
  handleLogout = () => {
    TokenService.clearAuthToken();
  };

  renderLogout() {
    return (
      <Link className="NavBar--no-pill" to="/" onClick={this.handleLogout}>
        Logout
      </Link>
    );
  }

  renderLogin() {
    return (
      <Link
        className="NavBar--no-pill"
        to="/login"
        onClick={this.handleToggleSideNav}
      >
        Login
      </Link>
    );
  }

  render() {
    return (
      <nav className="NavBar">
        <div className="NavBar__container">
          <Link className="NavBar--no-pill NavBar--marquee" to="/">
            Q
          </Link>
          <NavBarPill to="/learn" label="Learn" />
          <NavBarPill to="/study" label="Study" />
          {TokenService.hasAuthToken()
            ? this.renderLogout()
            : this.renderLogin()}
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
