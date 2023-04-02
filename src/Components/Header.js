import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;
    console.log(this.props);
    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="polygon" num={1} bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#data">
                Data
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#chart">
                Chart
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#map">
                Map
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#background">
                Accelerator
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              {/* <h1 className="responsive-headline">Home page</h1> */}
              <img src="/17.png" alt="logo" />
            </Fade>

            <Fade bottom duration={1200}>
              {/* <h2 style={{ color: "#f1707d" }}>ECO2 DRIVE</h2>
              <h3 style={{ color: "#f1707d" }}>
                I N T E L L I G E N T &ensp; D R I V I N G
              </h3> */}
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#data">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
