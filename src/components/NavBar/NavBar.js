import React, { useState, useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-regular-svg-icons";
import SubNav from "../SubNav/SubNav";
import LoginContext from "../../contexts/LoginContext";
import TokenService from "../../services/token-service";
import "./NavBar.css";

const NavBar = () => {
  const [showSubNav, setShowSubNav] = useState(false);
  const context = useContext(LoginContext);

  const handleToggleSubNav = () => {
    setShowSubNav(!showSubNav);
  };

  const handleLogout = () => {
    TokenService.clearAuthToken();
    window.localStorage.removeItem("test");
    context.logout();
  };

  const renderLogout = () => {
    return (
      <Link
        className="NavBar--no-pill NavBar--account-link"
        to="/"
        onClick={handleLogout}
      >
        Logout
      </Link>
    );
  };

  const renderLogin = () => {
    return (
      <Link className="NavBar--no-pill NavBar--account-link" to="/login">
        Login
      </Link>
    );
  };

  const { loggedIn } = context;
  const accountLink = loggedIn ? renderLogout() : renderLogin();
  return (
    <nav className="NavBar">
      <div className="NavBar__container">
        <div className="NavBar__logo_div">
          <button type="button" className="NavBar__hamburger">
            <FontAwesomeIcon icon={faBars} onClick={handleToggleSubNav} />
          </button>
          <Link className="NavBar--no-pill NavBar--marquee" to="/">
            Q
          </Link>
          <NavBarPill to="/learn" label="Learn" />
          <NavBarPill to="/study" label="Study" />
        </div>
        {accountLink}
      </div>
      <SubNav
        toggleShowSubNav={handleToggleSubNav}
        showSubNav={showSubNav}
        onLogout={handleLogout}
      />
    </nav>
  );
};

const NavBarPill = ({ label, to }) => {
  const match = useRouteMatch({
    path: to,
    exact: false,
  });

  return (
    <Link to={to}>
      <div className={match ? "NavBarPill--active" : "NavBarPill"}>{label}</div>
    </Link>
  );
};

export default NavBar;
