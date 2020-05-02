import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Button } from "../../components/Utils/Utils";
import ModA from "../../components/ModuleContents/ModA";
import ModB from "../../components/ModuleContents/ModB";
import "./Module.css";

class Module extends Component {
  static defaultProps = {
    match: {
      params: {
        moduleId: -1,
      },
    },
  };
  renderModule = () => {
    return (
      <div>
        <Route path="/learn/1" component={ModA} />
        <Route path="/learn/2" component={ModB} />
        <Route path="/learn/3" component={ModB} />
        <div className="Module__buttons">
          <Link to={`/test/${this.props.match.params.moduleId}`}>
            <Button className="form__button">Test</Button>
          </Link>
        </div>
      </div>
    );
  };

  render() {
    return <div className="Module">{this.renderModule()}</div>;
  }
}

export default Module;
