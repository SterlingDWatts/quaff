import React, { Component } from "react";
import QuizContext from "../../contexts/QuizContext";
import "./Footer.css";

class Footer extends Component {
  static contextType = QuizContext;

  renderProgress = () => {
    const { progress, numQuestions, numCorrect, showAnswer } = this.context;
    const correctedProgress = showAnswer ? progress + 1 : progress;
    const correctPercent =
      numCorrect > 0 ? Math.floor((numCorrect / correctedProgress) * 100) : 0;
    return (
      <div className="Footer__progress">
        <div>
          {progress < numQuestions ? progress + 1 : numQuestions}/{numQuestions}
        </div>
        <div>{correctPercent}%</div>
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
