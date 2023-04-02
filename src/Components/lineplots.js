import { Box, Button, Card, CardHeader, Divider } from "@mui/material";
import * as React from "react";
import Lineplot from "./Lineplot";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default function Lineplots(props) {
  const ITEM_HEIGHT = 40;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        minWidth: 70,
      },
    },
  };

  const names = ["GR", "ROP5", "P40H"];

  const [xaxis, setXaxis] = React.useState(["GR"]);
  //console.log("1");

  const handleChangex = (event) => {
    const {
      target: { value },
    } = event;
    setXaxis(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    //setXaxis((prev) => (prev = event.target.value));
    //xaxis = event.target.value;
    //console.log("parent", xaxis);
  };

  const [yaxis, setYaxis] = React.useState("TVD");

  const handleChangey = (event) => {
    setYaxis(event.target.value);
    //yaxis = event.target.value;
    //console.log(yaxis);
  };

  const [zaxis, setZaxis] = React.useState("well2");

  const handleChangez = (event) => {
    setZaxis(event.target.value);
    // zaxis = event.target.value;
    //console.log(zaxis);
  };

  return <Lineplot xaxises={xaxis} yaxis={yaxis} wellname={zaxis} />;
}
