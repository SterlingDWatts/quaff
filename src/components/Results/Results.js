import React from "react";
import QuizContext from "../../contexts/QuizContext";
import QuizListContext from "../../contexts/QuizListContext";
import ResultsDisplay from "../ResultsDisplay/ResultsDisplay";
import "./Results.css";

function Results({ className, ...props }) {
  return (
    <QuizListContext.Consumer>
      {(quizList) => (
        <QuizContext.Consumer>
          {(quiz) => <ResultsDisplay quiz={quiz} quizList={quizList} />}
        </QuizContext.Consumer>
      )}
    </QuizListContext.Consumer>
  );
}

export default Results;
