import React, { Component } from "react";
import {
  Button,
  Card,
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import imageUrl2 from "./pages/welcome-to-the-blog/2.png";
import imageUrl from "./pages/welcome-to-the-blog/1.png";
import Fade from "react-reveal";

class Blog extends Component {
  render() {
    return (
      <section
        id="background"
        style={{
          background: "white",
          textAlign: "center",
          paddingTop: "8%",
          paddingLeft: "11%",
          paddingRight: "11%",
          paddingBottom: "2%",
        }}
      >
        {/* <Typography
          variant="body"
          color="#336459"
          style={{ fontWeight: "bold" }}
        > */}
        <Fade duration={1000}>
          <div className="">
            <div className=" ">
              <div className="  ">
                <h2>SENSOR LOGGER</h2>
                <p>
                  Sensor Logger is an easy-to-use, beautifully designed data
                  logger that logs readings from common sensors on your iPhone
                  and Apple Watch — including accelerometer, gyroscope, GPS,
                  audio and camera.
                </p>
                <ul>
                  <li>No limitations on the number of stored recordings</li>
                  <li>Advanced sensor configurations</li>
                  <li>Customise Recording Workflow</li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
        {/* // </Typography> */}
      </section>
    );
  }
}

export default Blog;
