import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <h2>Sunlight into Wine</h2>
        <p>
          The grape naturally has all the ingredients needed for wine. The pulp
          (juice) contains sugar, water, and acid. The sugar is converted into
          alcohol during the fermentation process to create alcohol, while acid
          gives it the zip needed to keep it refreshing. The skin contains
          compounds that create color, flavor, and tannin. The bloom on the skin
          has bacteria and yeast, the later of which is responsible for turning
          the sugar into alcohol. While the process for making great wine is
          much more complicated, all that is needed to make wine is to puncture
          or crush the berry for the yeast to get to the contents.
        </p>
        <p>
          Selecting a grape variety is one of the important decisions for a
          vineyard. Location and climate as well as ability to sell a certain
          type of wine will have a big impact on that decision. Each type of
          grape has different qualities that impact its ability to grow in an
          area. Certain grapes may have bud break around the same time as spring
          frosts which could cause the vine to produce much less. Some grapes do
          better in warmer climates, or in certain types of soil.
        </p>
        <p>
          Wine starts in the vineyard. Great wine cannot be made without great
          grapes. There are several factors that affect the quality of the
          grapes
        </p>
        <Link to={`/test/${this.props.match.params.moduleId}`}>Test</Link>
      </div>
    );
  };

  render() {
    return <div className="Module">{this.renderModule()}</div>;
  }
}

export default Module;
