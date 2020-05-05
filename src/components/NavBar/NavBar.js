import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TokenService from "../../services/token-service";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    showSubNav: false,
  };

  togglesubNav = () => {
    this.setState({
      showSubNav: !this.state.showSubNav,
    });
  };

  handleLogout = () => {
    TokenService.clearAuthToken();
    this.togglesubNav();
  };

  renderLogout = () => {
    return (
      <Link className="NavBar--no-pill" to="/" onClick={this.handleLogout}>
        Logout
      </Link>
    );
  };

  renderLogin = () => {
    return (
      <>
        <Link
          className="NavBar--no-pill"
          to="/login"
          onClick={this.togglesubNav}
        >
          Login
        </Link>
        <Link
          className="NavBar--no-pill"
          to="/login"
          onClick={this.togglesubNav}
        >
          Create Account
        </Link>
      </>
    );
  };

  renderSubNav = () => {
    const accountLinks = TokenService.hasAuthToken()
      ? this.renderLogout()
      : this.renderLogin();
    return <div className="NavBar__subnav">{accountLinks}</div>;
  };

  render() {
    return (
      <nav className="NavBar">
        <div className="NavBar__container">
          <div className="NavBar__logo_div">
            <button onClick={(e) => this.togglesubNav()}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <Link className="NavBar--no-pill NavBar--marquee" to="/">
              Q
            </Link>
          </div>
          <NavBarPill to="/learn" label="Learn" />
          <NavBarPill to="/study" label="Study" />
        </div>
        {this.state.showSubNav && this.renderSubNav()}
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
