import React, { useContext, useEffect } from "react";
import { QuaffSquare } from "../../components/Utils/Utils";
import NextUp from "../../components/NextUp/NextUp";
import QuizListContext from "../../contexts/QuizListContext";
import ModulesApiService from "../../services/modules-api-service";
import "./Landing.css";

const Landing = () => {
  const context = useContext(QuizListContext);

  useEffect(() => {
    const { clearError, setQuizList, setTopicList, setError } = context;
    clearError();
    ModulesApiService.getModules()
      .then((res) => {
        setQuizList(res);
        ModulesApiService.getTopics().then(setTopicList).catch(setError);
      })
      .catch(setError);
  }, []);

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
};

export default Landing;
