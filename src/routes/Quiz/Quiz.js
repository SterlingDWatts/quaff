import React, { Component } from "react";
import { QuaffSquare, UnderSquare } from "../../components/Utils/Utils";
import QuizForm from "../../components/QuizForm/QuizForm";
import QuizContext from "../../contexts/QuizContext";
import topicList from "../../topic-list";
import questionList from "../../question-list";
import "./Quiz.css";

class Quiz extends Component {
  static defaultProps = {
    match: { params: { topicId: -1 } },
  };

  static contextType = QuizContext;

  componentDidMount() {
    const topicId = Number(this.props.match.params.topicId);
    const topic = topicList.find((topic) => topic.id === topicId);
    const questionIds = topic ? topic.questionIds : [];
    const questions = questionList.filter((question) =>
      questionIds.includes(question.id)
    );
    this.context.clearError();
    this.context.setQuiz(questions);
  }

  renderAnswer = () => {
    const { answerId, selectedId, quiz, progress } = this.context;
    const correct = selectedId === answerId ? "Correct" : "Incorrect";
    return (
      <div className="Quiz__answer">
        <h3>{correct}</h3>
        <p>{quiz[progress].explanation}</p>
      </div>
    );
  };

  render() {
    const { error, progress, numQuestions, showAnswer } = this.context;
    let squareContent;
    if (error) {
      squareContent = <div className="Quiz--error">There was an error</div>;
    } else if (numQuestions < 1) {
      squareContent = <div className="Quiz--loading"></div>;
    } else if (progress < numQuestions) {
      squareContent = <QuizForm />;
    }
    return (
      <div className="Quiz">
        <QuaffSquare>{squareContent}</QuaffSquare>
        <UnderSquare>{showAnswer && this.renderAnswer()}</UnderSquare>
      </div>
    );
  }
}

export default Quiz;
