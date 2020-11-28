import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import LoginContext from "../../contexts/LoginContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faChalkboardTeacher,
  faUserPlus,
  faUser,
  faUserTimes,
  faWineBottle,
} from "@fortawesome/pro-regular-svg-icons";
import "./SideNav.css";

const SideNav = ({ showSideNav, toggleShowSideNav, onLogout }) => {
  const context = useContext(LoginContext);

  const renderLogout = () => {
    return (
      <>
        <Link to="/" className="SideNav__icon_link" onClick={onLogout}>
          <FontAwesomeIcon icon={faUserTimes} />
        </Link>
        <Link to="/" onClick={onLogout}>
          Logout
        </Link>
      </>
    );
  };

  const renderLogin = () => {
    return (
      <>
        <Link to="/login" className="SideNav__icon_link">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/create-account" className="SideNav__icon_link">
          <FontAwesomeIcon icon={faUserPlus} />
        </Link>
        <Link to="/create-account">Create Account</Link>
      </>
    );
  };

  const accountLink = context.loggedIn ? renderLogout() : renderLogin();
  return (
    <>
      <div
        className={classnames("SideNav__shadow", {
          "SideNav__shadow--display": showSideNav,
        })}
        onClick={toggleShowSideNav}
      ></div>
      <nav
        className={classnames("SideNav", {
          "SideNav--display": showSideNav,
        })}
        onClick={toggleShowSideNav}
      >
        <div className="SideNav__Marquee__container">
          <Link className="SideNav__Marquee" to="/">
            Quaff Quizz
          </Link>
        </div>
        <div className="SideNav__main_container">
          <Link to="/learn" className="SideNav__icon_link">
            <FontAwesomeIcon icon={faBook} />
          </Link>
          <Link to="/learn">Learn</Link>
          <Link to="/study" className="SideNav__icon_link">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </Link>
          <Link to="/study">Study</Link>
        </div>
        <div className="SideNav__other_container">
          <Link to="/about" className="SideNav__icon_link">
            <FontAwesomeIcon icon={faWineBottle} />
          </Link>
          <Link to="/about">About</Link>
        </div>
        <div className="SideNav__account_container">{accountLink}</div>
      </nav>
    </>
  );
};

SideNav.defaultProps = {
  toggleShowSideNav: () => {},
  onLogout: () => {},
  showSideNav: false,
};

export default SideNav;
