import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./routes/Landing/Landing";
import Learn from "./routes/Learn/Learn";
import Study from "./routes/Study/Study";
import Search from "./routes/Search/Search";
import Quiz from "./routes/Quiz/Quiz";
import Login from "./routes/Login/Login";
import CreateAccount from "./routes/CreateAccount/CreateAccount";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import QuizListContext from "./contexts/QuizListContext";
import quizList from "./quiz-list";
import topicList from "./topic-list";
import "./App.css";

class App extends Component {
  static contextType = QuizListContext;

  componentDidMount() {
    this.context.clearError();
    this.context.setQuizList(quizList);
    this.context.setTopicList(topicList);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/learn" component={Learn} />
          <Route exact path="/study" component={Study} />
          <Route exact path="/search" component={Search} />
          <Route path="/study/:topicId" component={Quiz} />
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
