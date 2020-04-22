import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ResultsDisplay.css";

class ResultsDisplay extends Component {
  static defaultProps = {
    quiz: {
      numCorrect: -1,
      numQuestions: -1,
    },
    quizList: {
      quizList: [],
      updateMastery: () => {},
    },
  };
  componentDidMount() {
    const { quiz, quizList } = this.props;
    const score = quiz.numCorrect / quiz.numQuestions;
    const isTest = this.props.match.path.includes("test");

    if (score >= 0.8 && isTest) {
      const moduleId = Number(this.props.match.params.testId);
      const currentModule = quizList.quizList.find(
        (quiz) => quiz.id === moduleId
      );
      const nextModuleId = currentModule.next;
      quizList.unlockModule(nextModuleId);
    } else if (!isTest) {
      const topicId = Number(this.props.match.params.topicId);
      quizList.updateMastery(topicId, score);
    }
  }

  renderTestResults = (percentCorrect) => {
    return (
      <div>
        <p>You got {Math.floor(percentCorrect * 100)}% correct</p>
      </div>
    );
  };

  renderQuizResults = (percentCorrect) => {
    return (
      <div>
        <p>You got {Math.floor(percentCorrect * 100)}% correct</p>
      </div>
    );
  };

  render() {
    const { numQuestions, numCorrect } = this.props.quiz;
    const isTest = this.props.match.path.includes("test");
    const percentCorrect = numCorrect / numQuestions;
    const content = isTest
      ? this.renderTestResults(percentCorrect)
      : this.renderQuizResults(percentCorrect);
    return <div className="ResultsDisplay"> {content} </div>;
  }
}

export default withRouter(ResultsDisplay);
