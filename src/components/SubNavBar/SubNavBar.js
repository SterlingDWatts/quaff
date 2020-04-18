import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./SubNavBar.css";

class SubNavBar extends Component {
  render() {
    return (
      <nav className="SubNavBar">
        <SubNavBarLink to="/learn" label="Learn" />
        <SubNavBarLink to="/study" label="Study" />
        <SubNavBarLink to="/search" label="Search" />
      </nav>
    );
  }
}

function SubNavBarLink({ label, to }) {
  let match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <Link to={to}>
      <div className={match ? "SubNavBarPill--active" : "SubNavBarPill"}>
        {label}
      </div>
    </Link>
  );
}

export default SubNavBar;
