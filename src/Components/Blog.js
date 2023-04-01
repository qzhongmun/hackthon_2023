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

class Blog extends Component {
  render() {
    return (
      <section
        id="blog"
        style={{
          background: "white",
          textAlign: "center",
          paddingTop: "8%",
          paddingLeft: "11%",
          paddingRight: "11%",
          paddingBottom: "2%",
        }}
      >
        <Typography
          variant="body"
          color="#f1707d"
          style={{ fontWeight: "bold" }}
        >
          Accelerator
        </Typography>
      </section>
    );
  }
}

export default Blog;
