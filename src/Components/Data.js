import React, { Component } from "react";
import Fade from "react-reveal";

class Data extends Component {
  render() {
    return (
      <section id="data">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns"></div>
            <div className="nine columns main-col">
              <h2>Mission </h2>
              <p>
                Our approach to minimizing fuel consumption involves tracking
                the frequency and location of braking in trucks. We will analyze
                extensive historical data to identify areas where brakes are
                frequently applied, which may be due to factors such as bumps,
                pits, traffic lights, or other conditions. In the event that
                frequent braking is caused by a pit or bump, we will report this
                information to the appropriate government agency for repair.
                Alternatively, if the problem is with a traffic light, we can
                consider to develop a traffic light control system to reduce the
                numbers of brake.
              </p>
              <h2>What is the problem? </h2>
              <p>The act of braking leads to an increase in CO2 emissions.</p>
              <h2>What is the solution?</h2>
              <p>
                Identify the locations where issues occur on the roads,
                investigate the reasons behind these issues, and report them to
                the relevant department or consider to develop a traffic light
                control system to reduce the numbers of brake.
              </p>
              {/* <h2>How </h2>
              <p>
                Road surface quality and traffic condition impact the CO2
                emissions
              </p> */}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Data;
