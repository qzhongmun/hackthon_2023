import React, { Component } from "react";
import Slide from "react-reveal";

class chart extends Component {
  render() {
    return (
      <section id="chart">
        <Slide left duration={1300}>
          <div className="row ">
            <div className="three columns header-col"></div>
            <div>chart here</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default chart;
