import React, { Component } from "react";
import Slide from "react-reveal";
import Lineplots from "./lineplots";

class chart extends Component {
  render() {
    return (
      <section id="chart">
        <Slide left duration={1300}>
          <div className="row ">
            <div className="three columns header-col"></div>
            <img src="./21.png" />
            <img src="./22.png" />
            {/* <Lineplots /> */}
          </div>
        </Slide>
      </section>
    );
  }
}

export default chart;
