import React, { Component } from "react";
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
  faSearch,
} from "@fortawesome/pro-regular-svg-icons";
import "./SubNav.css";

class SubNav extends Component {
  static defaultProps = {
    toggleShowSubNav: () => {},
    onLogout: () => {},
    showSubNav: false,
  };

  static contextType = LoginContext;

  renderLogout = () => {
    return (
      <>
        <Link
          to="/"
          className="SubNav__icon_link"
          onClick={(e) => this.props.onLogout()}
        >
          <FontAwesomeIcon icon={faUserTimes} />
        </Link>
        <Link to="/" onClick={(e) => this.props.onLogout()}>
          Logout
        </Link>
      </>
    );
  };

  renderLogin = () => {
    return (
      <>
        <Link to="/login" className="SubNav__icon_link">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/create-account" className="SubNav__icon_link">
          <FontAwesomeIcon icon={faUserPlus} />
        </Link>
        <Link to="/create-account">Create Account</Link>
      </>
    );
  };

  render() {
    const accountLink = this.context.loggedIn
      ? this.renderLogout()
      : this.renderLogin();
    return (
      <>
        <div
          className={classnames("SubNav__shadow", {
            "SubNav__shadow--display": this.props.showSubNav,
          })}
          onClick={(e) => this.props.toggleShowSubNav()}
        ></div>
        <nav
          className={classnames("SubNav", {
            "SubNav--display": this.props.showSubNav,
          })}
          onClick={(e) => this.props.toggleShowSubNav()}
        >
          <div className="SubNav__Marquee__container">
            <Link className="SubNav__Marquee" to="/">
              Quaff Quizz
            </Link>
          </div>
          <div className="SubNav__main_container">
            <Link to="/learn" className="SubNav__icon_link">
              <FontAwesomeIcon icon={faBook} />
            </Link>
            <Link to="/learn">Learn</Link>
            <Link to="/study" className="SubNav__icon_link">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </Link>
            <Link to="/study">Study</Link>
            <Link to="/search" className="SubNav__icon_link">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
            <Link to="/search">Search</Link>
          </div>
          <div className="SubNav__other_container">
            <Link to="/about" className="SubNav__icon_link">
              <FontAwesomeIcon icon={faWineBottle} />
            </Link>
            <Link to="/about">About</Link>
          </div>
          <div className="SubNav__account_container">{accountLink}</div>
        </nav>
      </>
    );
  }
}

export default SubNav;
