import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ModulesApiService from "../../services/modules-api-service";
import TokenService from "../../services/token-service";
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
    const { quiz, quizList, match } = this.props;
    const score = quiz.numCorrect / quiz.numQuestions;
    const isTest = this.props.match.path.includes("test");

    if (isTest && TokenService.hasAuthToken()) {
      ModulesApiService.insertTest(match.params.testId, quiz.views, score)
        .then((quiz) => {
          quizList.setQuizList(quiz);
        })
        .catch(quizList.setError);
    } else if (TokenService.hasAuthToken()) {
      ModulesApiService.insertViews(quiz.views)
        .then((topics) => {
          quizList.setTopicList(topics);
        })
        .catch(quizList.setError);
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
