import React, { Component } from "react";
import { Link } from "react-router-dom";
import SubNavBar from "../../components/SubNavBar/SubNavBar";
import { ExploreSquare } from "../../components/Utils/Utils";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <SubNavBar />
        <ExploreSquare></ExploreSquare>
      </div>
    );
  }
}

export default Search;
