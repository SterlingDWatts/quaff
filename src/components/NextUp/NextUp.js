import React, { Component } from "react";
import { Link } from "react-router-dom";
import QuizListContext from "../../contexts/QuizListContext";
import "./NextUp.css";

class NextUp extends Component {
  static contextType = QuizListContext;

  renderNextModule = () => {
    let nextModule = this.context.quizList.findIndex(
      (quiz) => quiz.unlocked === false
    );
    nextModule = nextModule ? nextModule - 1 : this.context.quizList.length - 1;
    nextModule = this.context.quizList[nextModule];
    return (
      <NextUpItem
        id={nextModule.id}
        label={nextModule.name}
        type={"Learn"}
        picture={nextModule.picture}
      />
    );
  };

  renderStudyTopics = () => {
    let topicList = this.context.topicList.sort(
      (a, b) => a.mastery - b.mastery
    );
    topicList = topicList.slice(0, 3);
    return topicList.map((topic) => {
      return (
        <NextUpItem
          key={topic.id}
          id={topic.id}
          label={topic.name}
          type={"Study"}
          picture={topic.picture}
        />
      );
    });
  };

  renderLoading = () => {
    return (
      <>
        <div className="NextUp__learn-loading">
          <div className="NextUp__header">Learn</div>
          <div className="NextUp__container">Loading</div>
        </div>
        <div className="NextUp__study-loading">
          <div className="NextUp__header">Learn</div>
          <div className="NextUp__container">Loading</div>
        </div>
        <div className="NextUp__study-loading">
          <div className="NextUp__header">Learn</div>
          <div className="NextUp__container">Loading</div>
        </div>
        <div className="NextUp__study-loading">
          <div className="NextUp__header">Learn</div>
          <div className="NextUp__container">Loading</div>
        </div>
      </>
    );
  };

  render() {
    const { error, topicList } = this.context;
    let content;
    if (error) {
      content = <p className="NextUp--error">There was an error</p>;
    } else if (topicList.length < 1) {
      content = this.renderLoading();
    } else {
      content = (
        <>
          {this.renderNextModule()}
          {this.renderStudyTopics()}
        </>
      );
    }
    return <div className="NextUp">{content}</div>;
  }
}

function NextUpItem({ id, label, picture, type }) {
  return (
    <Link to={`/${type.toLowerCase()}/${id}`}>
      <div className="NextUp__header">{type}</div>
      <div
        className="NextUp__container"
        style={{ backgroundImage: `url(${picture})` }}
      >
        {label}
      </div>
    </Link>
  );
}

export default NextUp;
