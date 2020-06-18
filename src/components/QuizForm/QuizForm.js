import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Utils/Utils";
import classnames from "classnames";
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
          <label
            htmlFor={`ans_${answer.id}`}
            className={classnames("QuizForm__label", {
              "QuizForm__label--selected":
                answer.id === this.context.selectedId,
              "QuizForm__label--correct":
                answer.correct && this.context.showAnswer,
            })}
          >
            {icon}
            {answer.content}
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
    const buttonText = showAnswer ? "Next" : "Check Answer";
    return buttonText;
  };

  render() {
    const {
      quiz,
      numQuestions,
      progress,
      showAnswer,
      error,
      numCorrect,
    } = this.context;
    const correctedProgress = showAnswer ? progress + 1 : progress;
    const correctPercent =
      numCorrect > 0 ? Math.floor((numCorrect / numQuestions) * 100) : 0;
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
            <div className="QuizForm--top">
              <div className="QuizForm--guage">
                <div className="QuizForm--guage-border"></div>
                <div className="QuizForm--goal">
                  <FontAwesomeIcon
                    className={classnames("QuizForm--goal-star", {
                      "QuizForm--goal-star-achieved": correctPercent >= 75,
                    })}
                    icon={faStar}
                  />
                </div>
                <div
                  className="QuizForm--progress"
                  style={{
                    width: `${Math.floor(
                      (correctedProgress / numQuestions) * 100
                    )}%`,
                  }}
                ></div>
                <div
                  className="QuizForm--correct"
                  style={{ width: `${correctPercent}%` }}
                ></div>
              </div>
              <legend className="QuizForm__question">
                {progress < numQuestions ? progress + 1 : numQuestions}.{" "}
                {question.content}
              </legend>
            </div>
            <div className="QuizForm--bottom">
              {answers}
              <Button className="QuizForm__button form__button" type="submit">
                {this.renderButton(showAnswer)}
              </Button>
            </div>
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
