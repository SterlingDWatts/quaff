import React, { createContext, Component } from "react";

const QuizContext = createContext({
  quiz: [],
  progress: 0,
  numCorrect: 0,
  numQuestions: 0,
  answerId: -1,
  selectedId: null,
  showAnswer: false,
  error: null,
  setError: () => {},
  clearError: () => {},
  setQuiz: () => {},
  revealAnswer: () => {},
  updateProgress: () => {},
});

export default QuizContext;

export class QuizProvider extends Component {
  state = {
    error: null,
    quiz: [],
    progress: 0,
    numCorrect: 0,
    numQuestions: 0,
    answerId: -1,
    selectedId: null,
    showAnswer: false,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setAnswerId = (answers) => {
    const correctAnswer = answers.find((answer) => answer.correct === true);
    const answerId = correctAnswer.id;
    return answerId;
  };

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  shuffleQuiz = (quiz) => {
    let shuffledQuiz = quiz.slice();
    this.shuffle(shuffledQuiz);
    for (let i = 0; i < quiz.length - 1; i++) {
      this.shuffle(shuffledQuiz[i].answers);
    }
    return shuffledQuiz;
  };

  setQuiz = (quiz) => {
    const shuffledQuiz = this.shuffleQuiz(quiz);
    const answerId = this.setAnswerId(shuffledQuiz[0].answers);
    this.setState({
      quiz: shuffledQuiz,
      answerId,
      numQuestions: quiz.length,
      progress: 0,
      numCorrect: 0,
      selectedId: null,
      showAnswer: false,
    });
  };

  revealAnswer = (selectedId) => {
    let correct = selectedId === this.state.answerId;
    let numCorrect = this.state.numCorrect;
    numCorrect = correct ? numCorrect + 1 : numCorrect;
    this.setState({ showAnswer: true, numCorrect, selectedId });
  };

  updateProgress = () => {
    let updatedQuiz = this.state.quiz;
    const question = updatedQuiz[this.state.progress];
    question.seenCount++;
    if (this.state.selectedId === this.state.answerId) {
      question.correctCount++;
    }
    const progress = this.state.progress + 1;
    let answerId = -1;
    if (progress < this.state.numQuestions) {
      answerId = this.setAnswerId(this.state.quiz[progress].answers);
    }
    this.setState({
      quiz: updatedQuiz,
      answerId,
      progress,
      selectedId: null,
      showAnswer: false,
    });
  };

  render() {
    const value = {
      error: this.state.error,
      quiz: this.state.quiz,
      showAnswer: this.state.showAnswer,
      progress: this.state.progress,
      answerId: this.state.answerId,
      selectedId: this.state.selectedId,
      numCorrect: this.state.numCorrect,
      numQuestions: this.state.numQuestions,
      setError: this.setError,
      clearError: this.clearError,
      setQuiz: this.setQuiz,
      revealAnswer: this.revealAnswer,
      updateProgress: this.updateProgress,
    };
    return (
      <QuizContext.Provider value={value}>
        {this.props.children}
      </QuizContext.Provider>
    );
  }
}
