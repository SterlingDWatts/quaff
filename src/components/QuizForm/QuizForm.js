import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faHandPointUp } from "@fortawesome/free-regular-svg-icons";
import QuizContext from "../../contexts/QuizContext";
import "./QuizForm.css";

class QuizForm extends Component {
  static contextType = QuizContext;

  renderIcon = (answer) => {
    const { selectedId, showAnswer } = this.context;
    if ((answer.id !== selectedId && !answer.correct) || !showAnswer) {
      return <div className="QuizForm__icon"> </div>;
    } else {
      const correct = answer.correct ? faCheck : faTimes;
      return (
        <div className="QuizForm__icon">
          <FontAwesomeIcon icon={correct} />
        </div>
      );
    }
  };

  renderAnswers = (answers) => {
    return answers.map((answer) => {
      const icon = this.renderIcon(answer);
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
            {answer.answer}
            {icon}
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

  renderButton = (showAnswer) => {
    const icon = showAnswer ? faArrowRight : faHandPointUp;
    return (
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={icon} transform="shrink-6" color="white" />
      </span>
    );
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
          <div>
            <legend className="QuizForm__question">{question.question}</legend>
            <div>{answers}</div>
            <button className="QuizForm__button" type="submit">
              {this.renderButton(showAnswer)}
            </button>
          </div>
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
