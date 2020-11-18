import React, { Component } from "react";
import { QuaffSquare } from "../../components/Utils/Utils";
import QuizForm from "../../components/QuizForm/QuizForm";
import Results from "../../components/Results/Results";
import NextUp from "../../components/NextUp/NextUp";
import QuizContext from "../../contexts/QuizContext";
import ModulesApiService from "../../services/modules-api-service";
import "./Test.css";

class Test extends Component {
  static defaultProps = {
    match: { params: { testId: -1 } },
  };

  static contextType = QuizContext;

  componentDidMount() {
    const moduleId = Number(this.props.match.params.testId);
    this.context.clearError();
    ModulesApiService.getModule(moduleId)
      .then((quiz) => {
        this.context.setQuiz(quiz.questions);
      })
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearQuiz();
  }

  renderAnswer = () => {
    const { answerId, selectedId, quiz, progress } = this.context;
    const correct = selectedId === answerId ? "Correct!" : "Incorrect";
    return (
      <div className="Test__answer">
        <h3>{correct}</h3>
        <p>{quiz[progress].explanation}</p>
      </div>
    );
  };

  render() {
    const { error, progress, numQuestions } = this.context;
    let squareContent;
    if (error) {
      squareContent = <div className="Test--error">There was an error</div>;
    } else if (numQuestions < 1) {
      squareContent = (
        <div className="Test--loading">
          <div className="Test--loading-top">
            <div className="Test--loading-guage"></div>
            <div className="Test--loading-question"></div>
          </div>
          <div className="Test--loading-bottom">
            <div className="Test--loading-answer"></div>
            <div className="Test--loading-answer"></div>
            <div className="Test--loading-answer"></div>
            <div className="Test--loading-answer"></div>
            <div className="Test--loading-button"></div>
          </div>
          <div className="Test--loading-placeholder"></div>
        </div>
      );
    } else if (progress < numQuestions) {
      squareContent = <QuizForm />;
    } else {
      squareContent = (
        <>
          <QuaffSquare>
            <Results />
          </QuaffSquare>
          <NextUp />
        </>
      );
    }
    return <div className="Test">{squareContent}</div>;
  }
}

export default Test;
