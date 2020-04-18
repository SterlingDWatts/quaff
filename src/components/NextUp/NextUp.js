import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NextUp.css";

class NextUp extends Component {
  render() {
    return (
      <div className="NextUp">
        <Link to="/learn/viticulture">
          <div className="NextUp__header">Learn</div>
          <div
            className="NextUp__module"
            style={{
              backgroundImage:
                "url(https://sterlingdwatts.github.io/quaff_quizz/images/viticulture2.jpg)",
            }}
          >
            Viticulture
          </div>
        </Link>
        <Link to="/study/winemaking">
          <div className="NextUp__header">Study</div>
          <div
            className="NextUp__quiz"
            style={{
              backgroundImage:
                "url(https://sterlingdwatts.github.io/quaff_quizz/images/winemaking2.jpg)",
            }}
          >
            Winemaking
          </div>
        </Link>
        <Link to="/study/california">
          <div className="NextUp__header">Study</div>
          <div
            className="NextUp__quiz"
            style={{
              backgroundImage:
                "url(https://sterlingdwatts.github.io/quaff_quizz/images/california2.jpg)",
            }}
          >
            California
          </div>
        </Link>
        <Link to="/study/bordeaux">
          <div className="NextUp__header">Study</div>
          <div
            className="NextUp__quiz"
            style={{
              backgroundImage:
                "url(https://sterlingdwatts.github.io/quaff_quizz/images/france2.jpg)",
            }}
          >
            Bordeaux
          </div>
        </Link>
      </div>
    );
  }
}

export default NextUp;
