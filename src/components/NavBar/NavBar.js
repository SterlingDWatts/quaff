import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faChalkboardTeacher,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faLeanpub } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    showSideNav: false,
  };

  renderSideNav = () => {
    return (
      <div
        className={classnames("SideNav__overlay", {
          "SideNav--hidden": !this.state.showSideNav,
        })}
      >
        <nav className="SideNav">
          <Link className="SideNav__link" onClick={this.handleToggleSideNav}>
            <FontAwesomeIcon icon={faTimes} />
          </Link>
          <Link className="SideNav__link" onClick={this.handleToggleSideNav}>
            Close
          </Link>
          <Link
            className="SideNav__link"
            onClick={this.handleToggleSideNav}
            to="/"
          >
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link
            className="SideNav__link"
            to="/"
            onClick={this.handleToggleSideNav}
          >
            Home
          </Link>
          <Link
            className="SideNav__link"
            onClick={this.handleToggleSideNav}
            to="/learn"
          >
            <FontAwesomeIcon icon={faLeanpub} />
          </Link>
          <Link
            className="SideNav__link"
            to="/learn"
            onClick={this.handleToggleSideNav}
          >
            Learn
          </Link>
          <Link
            className="SideNav__link"
            onClick={this.handleToggleSideNav}
            to="/study"
          >
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </Link>
          <Link
            className="SideNav__link"
            to="/study"
            onClick={this.handleToggleSideNav}
          >
            Study
          </Link>
          <Link
            className="SideNav__link"
            onClick={this.handleToggleSideNav}
            to="/search"
          >
            <FontAwesomeIcon icon={faSearch} />
          </Link>
          <Link
            className="SideNav__link"
            to="/search"
            onClick={this.handleToggleSideNav}
          >
            Search
          </Link>
          <Link
            className="SideNav__link"
            onClick={this.handleToggleSideNav}
            to="/login"
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link
            className="SideNav__link"
            to="/login"
            onClick={this.handleToggleSideNav}
          >
            Login
          </Link>
        </nav>
      </div>
    );
  };

  handleToggleSideNav = () => {
    this.setState({
      showSideNav: !this.state.showSideNav,
    });
  };

  render() {
    const sideNav = this.renderSideNav();
    return (
      <nav className="NavBar">
        {sideNav}
        <div className="NavBar__container">
          <div className="NavBar__logo_container">
            <Link
              className="NavBar__hamburger"
              onClick={this.handleToggleSideNav}
            >
              <FontAwesomeIcon icon={faBars} />
            </Link>
            <Link to="/">Q</Link>
          </div>
          <nav className="NavBar__links">
            <Link to="/login">Login</Link>
          </nav>
        </div>
      </nav>
    );
  }
}

export default NavBar;
