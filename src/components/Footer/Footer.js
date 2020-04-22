import React, { Component } from "react";
import QuizContext from "../../contexts/QuizContext";
import "./Footer.css";

class Footer extends Component {
  static contextType = QuizContext;

  renderProgress = () => {
    const { progress, numQuestions, numCorrect } = this.context;
    return (
      <div className="Footer__progress">
        <div>Material Covered: {`${progress}/${numQuestions}`}</div>
        <div>Correct: {`${numCorrect}/${numQuestions}`}</div>
      </div>
    );
  };

  render() {
    const progress = this.context.quiz.length > 1 ? this.renderProgress() : " ";
    return (
      <div className="Footer">
        <div className="Footer__container">{progress}</div>
      </div>
    );
  }
}

export default Footer;
