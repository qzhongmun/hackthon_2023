import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import "./style.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Data from "./Components/Data";
import Resume from "./Components/Resume";

import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      chartData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getchartData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ chartData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getchartData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.chartData} />
        <Data data={this.state.chartData} />
        <Resume data={this.state.chartData} />
        <Portfolio data={this.state.chartData} />
        <Blog data={this.state.chartData} />
        <Footer data={this.state.chartData.main} />
      </div>
    );
  }
}

export default App;
