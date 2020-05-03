import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ExploreSquare, TopicSquare } from "../../components/Utils/Utils";
import QuizListContext from "../../contexts/QuizListContext";
import ModulesApiService from "../../services/modules-api-service";
import "./Study.css";

class Study extends Component {
  static contextType = QuizListContext;

  componentDidMount() {
    this.context.clearError();
    ModulesApiService.getTopics()
      .then((topics) => {
        this.context.setTopicList(topics);
        ModulesApiService.getModules()
          .then(this.context.setQuizList)
          .catch(this.context.setError);
      })
      .catch(this.context.setError);
  }

  renderTopics = () => {
    const topics = [];
    this.context.topicList.forEach((topic) => {
      const unlocked = topic.seen != null;
      const address = unlocked ? `/study/${topic.id}` : "/learn";
      let mastery = 0;
      if (topic.correct != null && topic.seen != null) {
        mastery = Math.floor((topic.correct / topic.seen) * 100);
      }
      topics.push(
        <TopicSquare
          key={topic.id}
          to={address}
          label={topic.name}
          picture={topic.picture}
          unlocked={unlocked}
          mastery={unlocked && mastery}
        />
      );
    });

    if (topics.length < 6) {
      const remainder = 6 - topics.length;
      for (let i = 0; i < remainder; i++) {
        topics.push(
          <TopicSquare
            key={topics.length * 10}
            to={"/learn"}
            picture={"https://i.imgur.com/h6jaH4c.jpg"}
            label={"Coming soon"}
            unlocked={false}
          />
        );
      }
    }
    return topics;
  };

  render() {
    const topics = this.renderTopics();
    return (
      <div className="Study">
        <ExploreSquare>
          <div className="Study--info-text">
            <h1>Study</h1>
          </div>
          <div className="Study--info-text">
            Master knowledge previously viewed. Visit{" "}
            <Link to="/learn">Learn</Link> to unlock more topics!
          </div>
          {topics && topics}
        </ExploreSquare>
      </div>
    );
  }
}

export default Study;
