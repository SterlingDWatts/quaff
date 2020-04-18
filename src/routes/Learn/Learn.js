import React, { Component } from "react";
import SubNavBar from "../../components/SubNavBar/SubNavBar";
import { ExploreSquare, TopicSquare } from "../../components/Utils/Utils";
import "./Learn.css";

class Learn extends Component {
  render() {
    return (
      <div className="Learn">
        <SubNavBar />
        <ExploreSquare>
          <TopicSquare
            to="/learn/viticulture"
            label="Viticulture"
            picture="https://sterlingdwatts.github.io/quaff_quizz/images/viticulture2.jpg"
          />
          <TopicSquare
            to="/learn/winemaking"
            label="Winemaking"
            picture="https://sterlingdwatts.github.io/quaff_quizz/images/winemaking2.jpg"
          />
          <TopicSquare
            to="/learn/california"
            label="California"
            picture="https://sterlingdwatts.github.io/quaff_quizz/images/california2.jpg"
          />
          <TopicSquare
            to="/learn/bordeaux"
            label="Bordeaux"
            picture="https://sterlingdwatts.github.io/quaff_quizz/images/france2.jpg"
          />
          <TopicSquare
            to="/learn/viticulture"
            label="Viticulture"
            picture="https://sterlingdwatts.github.io/quaff_quizz/images/viticulture2.jpg"
          />
          <TopicSquare
            to="/learn/winemaking"
            label="Winemaking"
            picture="https://sterlingdwatts.github.io/quaff_quizz/images/winemaking2.jpg"
          />
        </ExploreSquare>
      </div>
    );
  }
}

export default Learn;
