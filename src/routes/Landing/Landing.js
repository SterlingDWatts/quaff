import React, { Component } from "react";
import { QuaffSquare } from "../../components/Utils/Utils";
import NextUp from "../../components/NextUp/NextUp";
import QuizListContext from "../../contexts/QuizListContext";
import ModulesApiService from "../../services/modules-api-service";
import "./Landing.css";

class Landing extends Component {
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

  render() {
    return (
      <div className="Landing">
        <QuaffSquare>
          Quaff
          <br />
          Quizz
        </QuaffSquare>
        <NextUp />
      </div>
    );
  }
}

export default Landing;
