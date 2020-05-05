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
          <h1>
            Quaff
            <br />
            Quizz
          </h1>
          <h4>For the inquisitive oenophile</h4>
        </QuaffSquare>
        <NextUp />
      </div>
    );
  }
}

export default Landing;
