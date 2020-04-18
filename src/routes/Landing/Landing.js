import React, { Component } from "react";
import { QuaffSquare } from "../../components/Utils/Utils";
import NextUp from "../../components/NextUp/NextUp";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <QuaffSquare>
          Quaff
          <br />
          Quizz
        </QuaffSquare>
        <NextUp />
      </div>
    );
  }
}

export default Landing;
