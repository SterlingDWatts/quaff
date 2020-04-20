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
  addTopic: () => {},
  updateMastery: () => {},
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

  unLockModule = (moduleId) => {
    const updatedQuizList = this.state.quizList.map((quiz) => {
      return quiz.id === moduleId ? { ...quiz, locked: false } : quiz;
    });
    this.setState({ quizList: updatedQuizList });
  };

  setTopicList = (topicList) => {
    this.setState({ topicList });
  };

  addTopic = (topic) => {
    this.setState({ topicList: [...this.state.topicList, topic] });
  };

  updateMastery = (topicId, masteryPercent) => {
    const updatedTopicList = this.state.topicList.map((topic) => {
      return topic.id === topicId
        ? { ...topic, mastery: masteryPercent }
        : topic;
    });
    this.setState({ topicList: updatedTopicList });
  };

  render() {
    const value = {
      error: this.state.error,
      quizList: this.state.quizList,
      topicList: this.state.topicList,
      setError: this.setError,
      clearError: this.clearError,
      setQuizList: this.setQuizList,
      unLockModule: this.unLockModule,
      setTopicList: this.setTopicList,
      addTopic: this.addTopic,
      updateMastery: this.updateMastery,
    };
    return (
      <QuizListContext.Provider value={value}>
        {this.props.children}
      </QuizListContext.Provider>
    );
  }
}
