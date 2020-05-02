import React, { Component } from "react";
import { ExploreSquare, TopicSquare } from "../../components/Utils/Utils";
import QuizListContext from "../../contexts/QuizListContext";
import ModulesApiService from "../../services/modules-api-service";
import "./Learn.css";

class Learn extends Component {
  static contextType = QuizListContext;

  componentDidMount() {
    this.context.clearError();
    ModulesApiService.getModules()
      .then((res) => {
        this.context.setQuizList(res);
        ModulesApiService.getTopics()
          .then(this.context.setTopicList)
          .catch(this.context.setError);
      })
      .catch(this.context.setError);
  }

  renderModules = () => {
    const modules = [];
    this.context.quizList.forEach((mod) => {
      const unlocked = parseFloat(mod.max_score) >= 0.75 || mod.next === true;
      const address = unlocked ? mod.id : "";
      modules.push(
        <TopicSquare
          key={mod.id}
          to={`/learn/${address}`}
          label={mod.name}
          picture={mod.picture}
          unlocked={unlocked}
          next={mod.next}
          max_score={unlocked && Math.floor(parseFloat(mod.max_score) * 100)}
        />
      );
    });

    if (modules.length < 6) {
      const remainder = 6 - modules.length;
      for (let i = 0; i < remainder; i++) {
        modules.push(
          <TopicSquare
            key={modules.length * 10}
            to={"/learn"}
            picture={"https://i.imgur.com/h6jaH4c.jpg"}
            label={"Coming soon"}
            unlocked={false}
          />
        );
      }
    }
    return modules;
  };

  render() {
    const modules = this.renderModules();
    return (
      <div className="Learn">
        <ExploreSquare>
          <div className="Learn--info-text">
            Pass modules with at least 75% to unlock additional content
          </div>
          {modules && modules}
        </ExploreSquare>
      </div>
    );
  }
}

export default Learn;
