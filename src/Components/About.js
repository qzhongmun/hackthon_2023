import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns"></div>
            <div className="nine columns main-col">
              <h2>data </h2>
              <p>put a data table here</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
