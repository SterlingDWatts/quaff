import React, { createContext, Component } from "react";

const QuizListContext = createContext({
  quizList: [],
  topicList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setQuizList: () => {},
  unlockModule: () => {},
  setTopicList: () => {},
});

export default QuizListContext;

export class QuizListProvider extends Component {
  state = {
    error: null,
    quizList: [],
    topicList: [],
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setQuizList = (quizList) => {
    this.setState({ quizList });
  };

  calculateMastery = ({ correct, seen }) => {
    const numCorrectAnswers = correct ? Number(correct) : 0;
    const correctPercent = seen
      ? (numCorrectAnswers / Number(seen)) * 100
      : 101;
    return correctPercent;
  };

  setTopicList = (topicList) => {
    topicList.sort(
      (a, b) => this.calculateMastery(a) - this.calculateMastery(b)
    );
    this.setState({ topicList });
  };

  render() {
    const value = {
      error: this.state.error,
      quizList: this.state.quizList,
      topicList: this.state.topicList,
      setError: this.setError,
      clearError: this.clearError,
      setQuizList: this.setQuizList,
      setTopicList: this.setTopicList,
    };
    return (
      <QuizListContext.Provider value={value}>
        {this.props.children}
      </QuizListContext.Provider>
    );
  }
}
