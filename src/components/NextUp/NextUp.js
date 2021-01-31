import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import QuizListContext from "../../contexts/QuizListContext";
import "./NextUp.css";

class NextUp extends Component {
  static contextType = QuizListContext;

  renderNextModule = () => {
    let nextModule = this.context.quizList.find((quiz) => quiz.next === true);
    if (nextModule) {
      return (
        <NextUpItem
          id={nextModule.id}
          label={nextModule.name}
          type={"Learn"}
          address={"learn"}
          picture={nextModule.picture}
          unlocked={true}
        />
      );
    }
  };

  renderStudyTopics = () => {
    let topicList = this.context.topicList.sort((a, b) => a.mastery - b.mastery);
    topicList = topicList.slice(0, 3);
    return topicList.map((topic) => {
      const unlocked = topic.seen != null;
      return (
        <NextUpItem
          key={topic.id}
          id={topic.id}
          label={topic.name}
          type={"Study"}
          address={"quiz"}
          picture={topic.picture}
          unlocked={unlocked}
        />
      );
    });
  };

  renderLoading = () => {
    return (
      <>
        <div className="NextUp__learn-loading">
          <div className="NextUp__header">
            <div className="NextUp__header-loading"></div>
          </div>
          <div className="NextUp__container">
            <div className="NextUp--loading"></div>
          </div>
          <div className="NextUp__placeholder"></div>
        </div>
        <div className="NextUp__study-loading">
          <div className="NextUp__header">
            <div className="NextUp__header-loading"></div>
          </div>
          <div className="NextUp__container">
            <div className="NextUp--loading"></div>
          </div>
          <div className="NextUp__placeholder"></div>
        </div>
        <div className="NextUp__study-loading">
          <div className="NextUp__header">
            <div className="NextUp__header-loading"></div>
          </div>
          <div className="NextUp__container">
            <div className="NextUp--loading"></div>
          </div>
          <div className="NextUp__placeholder"></div>
        </div>
        <div className="NextUp__study-loading">
          <div className="NextUp__header">
            <div className="NextUp__header-loading"></div>
          </div>
          <div className="NextUp__container">
            <div className="NextUp--loading"></div>
          </div>
          <div className="NextUp__placeholder"></div>
        </div>
      </>
    );
  };

  render() {
    const { error, topicList } = this.context;
    let content;
    if (error) {
      content = this.renderLoading();
      // content = <p className="NextUp--error">There was an error</p>;
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

function ScrollToTop() {
  window.scrollTo(0, 0);
}

function NextUpItem({ id, label, picture, type, unlocked, address }) {
  const link = unlocked ? `/${address.toLowerCase()}/${id}` : "learn";
  return (
    <Link className="NextUp__link" to={link} onClick={(e) => ScrollToTop()}>
      <div className="NextUp__header">{type}</div>
      <div
        className={classnames("NextUp__container", {
          "NextUp__container--locked": !unlocked,
        })}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${picture})`,
        }}
      >
        {label}
      </div>
    </Link>
  );
}

export default NextUp;
