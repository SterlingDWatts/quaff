import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./routes/Landing/Landing";
import Learn from "./routes/Learn/Learn";
import Study from "./routes/Study/Study";
import Search from "./routes/Search/Search";
import Quiz from "./routes/Quiz/Quiz";
import Module from "./routes/Module/Module";
import Test from "./routes/Test/Test";
import Login from "./routes/Login/Login";
import CreateAccount from "./routes/CreateAccount/CreateAccount";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
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
          <Route path="/quiz/:topicId" component={Quiz} />
          <Route path="/learn/:moduleId" component={Module} />
          <Route path="/test/:testId" component={Test} />
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
