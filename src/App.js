import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./routes/Landing/Landing";
import Learn from "./routes/Learn/Learn";
import Login from "./routes/Login/Login";
import CreateAccount from "./routes/CreateAccount/CreateAccount";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/learn" component={Learn} />
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
