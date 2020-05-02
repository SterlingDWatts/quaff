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

  setTopicList = (topicList) => {
    const sortedTopics = topicList.slice();
    sortedTopics.sort((a, b) => {
      const aCorrect = a.correct != null ? Number(a.correct) : 0;
      const aMastery = a.seen ? aCorrect / Number(a.seen) : 1.1;
      const bCorrect = b.correct != null ? Number(b.correct) : 0;
      const bMastery = b.seen != null ? bCorrect / Number(b.seen) : 1.1;
      return aMastery - bMastery;
    });

    this.setState({ topicList: sortedTopics });
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
