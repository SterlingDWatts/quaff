import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import QuizContext from "../../contexts/QuizContext";
import "./QuizForm.css";

class QuizForm extends Component {
  static contextType = QuizContext;

  renderAnswers = (answers) => {
    return answers.map((answer) => {
      let correct = answer.correct ? faCheck : faTimes;
      let icon = this.context.showAnswer ? (
        <FontAwesomeIcon icon={correct} />
      ) : (
        <></>
      );
      return (
        <div className="QuizForm__label_group" key={answer.id}>
          <input
            type="radio"
            name="answer"
            id={`ans_${answer.id}`}
            value={answer.id}
            required
            disabled={this.context.showAnswer}
          />
          <label htmlFor={`ans_${answer.id}`}>
            {answer.answer} {icon}
          </label>
        </div>
      );
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const selected = Number(event.target.answer.value);
    if (!this.context.showAnswer) {
      this.context.revealAnswer(selected);
    } else {
      this.context.updateProgress();
    }
  };

  render() {
    const { quiz, progress, showAnswer, error } = this.context;
    let content;
    if (error) {
      content = <div className="QuizForm--error">Error</div>;
    } else if (quiz.length < 1) {
      content = <div className="QuizForm--loading"></div>;
    } else {
      const question = quiz[progress];
      const answers = this.renderAnswers(question.answers);
      content = (
        <fieldset>
          <legend className="QuizForm__question">{question.question}</legend>
          {answers}
          <button className="QuizForm__button" type="submit">
            {showAnswer ? "Next" : "Submit"}
          </button>
        </fieldset>
      );
    }
    return (
      <form className="QuizForm" onSubmit={this.handleSubmit}>
        {content}
      </form>
    );
  }
}

export default QuizForm;
