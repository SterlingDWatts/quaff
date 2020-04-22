import React, { Component } from "react";
import { QuaffSquare, UnderSquare } from "../../components/Utils/Utils";
import QuizForm from "../../components/QuizForm/QuizForm";
import Results from "../../components/Results/Results";
import NextUp from "../../components/NextUp/NextUp";
import QuizContext from "../../contexts/QuizContext";
import questionList from "../../question-list";
import "./Test.css";

class Test extends Component {
  static defaultProps = {
    match: { params: { testId: -1 } },
  };

  static contextType = QuizContext;

  componentDidMount() {
    const moduleId = Number(this.props.match.params.testId);
    const quiz = questionList.filter(
      (question) => question.moduleId === moduleId
    );
    this.context.clearError();
    this.context.setQuiz(quiz);
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
    const { error, progress, numQuestions, showAnswer } = this.context;
    let squareContent;
    if (error) {
      squareContent = <div className="Test--error">There was an error</div>;
    } else if (numQuestions < 1) {
      squareContent = <div className="Test--loading"></div>;
    } else if (progress < numQuestions) {
      squareContent = <QuizForm />;
    } else {
      squareContent = <Results />;
    }
    let underSquare;
    if (error) {
      underSquare = <div></div>;
    } else if (progress < numQuestions && numQuestions > 1) {
      underSquare = (
        <UnderSquare>{showAnswer && this.renderAnswer()}</UnderSquare>
      );
    } else {
      underSquare = <NextUp />;
    }
    return (
      <div className="Test">
        <QuaffSquare>{squareContent}</QuaffSquare>
        {underSquare}
      </div>
    );
  }
}

export default Test;
