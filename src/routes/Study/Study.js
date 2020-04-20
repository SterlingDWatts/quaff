import React, { Component } from "react";
import SubNavBar from "../../components/SubNavBar/SubNavBar";
import { ExploreSquare, TopicSquare } from "../../components/Utils/Utils";
import QuizListContext from "../../contexts/QuizListContext";
import "./Study.css";

class Study extends Component {
  static contextType = QuizListContext;

  renderTopics = () => {
    const topics = this.context.topicList.map((topic) => {
      return (
        <TopicSquare
          key={topic.id}
          to={`/study/${topic.id}`}
          label={topic.name}
          picture={topic.picture}
          unlocked={true}
        />
      );
    });
    return topics;
  };

  render() {
    const topics = this.renderTopics();
    return (
      <div className="Study">
        <SubNavBar />
        <ExploreSquare>{topics && topics}</ExploreSquare>
      </div>
    );
  }
}

export default Study;
