import React, { Component } from "react";
import { Link } from "react-router-dom";
import UnlockOne from "./Unlock1.png";
import UnlockTwo from "./Unlock2.png";
import UnlockThree from "./Unlock3.png";
import LoginContext from "../../contexts/LoginContext";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import "./About.css";

class About extends Component {
  static contextType = LoginContext;

  componentDidMount() {
    this.setState({
      error: null,
    });
  }

  componentWillUnmount() {
    this.setState({
      error: null,
    });
  }

  handleDemoLogin = () => {
    AuthApiService.getDemo()
      .then((res) => {
        this.context.login();
      })
      .catch((res) => {
        this.setState({
          error: res.error,
        });
      });
  };

  renderAccountSection = () => {
    return (
      <>
        <h2>Account</h2>
        <p>
          Quaff Quizz requires an account to access more than the first module
          on <em>Learn</em> as well as to update and save progress.
        </p>
        <span>
          Don’t have an account?{" "}
          <Link to="/create-account">Create Account</Link>
        </span>
        <br />
        <span>
          Don't want to make an account?{" "}
          <Link to="/" onClick={this.handleDemoLogin}>
            Try our Demo
          </Link>
        </span>
      </>
    );
  };

  render() {
    return (
      <div className="About">
        <div className="About__container">
          <header>
            <h1>Quaff Quizz</h1>
          </header>
          <h2>Home</h2>
          <p>
            Quaff Quizz is an interactive wine learning experience. Learn new
            material in bite sized chunks and later study the topics already
            encountered to solidify knowledge. These concepts, <em>Learn</em>{" "}
            and <em>Study</em>, are the pillars of Quaff Quizz. The Home page
            displays the next avialable module through <em>Learn</em> as well as
            the three topics from <em>Study</em> that require the most
            attention.
          </p>
          <h2>Learn</h2>
          <p>
            Visit <em>Learn</em> to gain more knowledge on wine. Easily view all
            modules from the list on the main page. Each module consists of two
            parts: a short lesson on a wine subject followed by a test on the
            material.
          </p>
          <p>
            Locked modules are greyed out to clearly mark which modules are
            available to take at any time. Modules that have been taken display
            the best score, while the next available module that has not been
            taken or passed displays “next”. Achieving a score of 75% or greater
            on the “next” module unlocks the following module.
          </p>
          <h2>Study</h2>
          <p>
            Visit <em>Study</em> to reinforce knowledge through quizzes of
            previously viewed questions. <em>Study</em> is broken into topics,
            with each one containing all the previously viewed questions on the
            topic. Multiple modules in <em>Learn</em> contain questions on the
            same topic, and as each module is taken, it’s questions are added to
            that topic in <em>Study</em>.
          </p>
          <img
            className="About--comparisons"
            src={UnlockOne}
            alt="Learn vs Study pages"
          />
          <div className="About__caption">
            Taking <em>Vine Needs</em> unlocks <em>Viticulture</em> and adds
            it’s questions to that topic.
          </div>
          <img
            className="About--comparisons"
            src={UnlockTwo}
            alt="Learn vs Study pages"
          />
          <div className="About__caption">
            Taking <em>Climate v. Weather</em> unlocks <em>Climate</em> and adds
            it’s questions to that topic as well as <em>Viticulture</em> because
            climate is a subtopic of viticulture.
          </div>
          <img
            className="About--comparisons"
            src={UnlockThree}
            alt="Learn vs Study pages"
          />
          <div className="About__caption">
            Taking <em>Grape Selection</em> unlocks <em>Grapes</em> and adds
            it’s questions to that topic as well as it’s parent topic,{" "}
            <em>Viticulture</em>.
          </div>
          {!TokenService.hasAuthToken() && this.renderAccountSection()}
        </div>
      </div>
    );
  }
}

export default About;
