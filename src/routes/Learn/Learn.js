import React, { Component } from "react";
import SubNavBar from "../../components/SubNavBar/SubNavBar";
import { ExploreSquare, TopicSquare } from "../../components/Utils/Utils";
import QuizListContext from "../../contexts/QuizListContext";
import "./Learn.css";

class Learn extends Component {
  static contextType = QuizListContext;

  renderModules = () => {
    const modules = this.context.quizList.map((module) => {
      const address = module.unlocked ? module.id : "";
      return (
        <TopicSquare
          key={module.id}
          to={`/learn/${address}`}
          label={module.name}
          picture={module.picture}
          unlocked={module.unlocked}
        />
      );
    });
    return modules;
  };

  render() {
    const modules = this.renderModules();
    return (
      <div className="Learn">
        <SubNavBar />
        <ExploreSquare>{modules && modules}</ExploreSquare>
      </div>
    );
  }
}

export default Learn;
