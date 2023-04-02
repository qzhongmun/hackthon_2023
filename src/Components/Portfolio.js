import React, { Component, useState } from "react";
import Fade from "react-reveal";
import { Icon } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import data from "./location.json";

let id = 0;

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      isOpen: false,
    };
  }

  render() {
    console.log(this.props);
    console.log("data location", data);
    const position = [
      // [47.5556, -52.7453],
      // [47.5666, -52.7563],
      [47.561984, -52.748932],
      [47.544808, -52.745702],
      [47.541002, -52.751544],
      [47.534357, -52.747633],
      [47.532985, -52.751023],
      [47.530778, -52.757034],
      [47.525398, -52.771101],
    ];

    const polyline = [];
    // data.map((datas) => polyline.push([datas.latitude, datas.longitude]));
    for (var i = 0; i <= 764; i++) {
      polyline.push([data.latitude[i], data.longitude[i]]);
    }

    console.log("polyline location", polyline);
    const limeOptions = { color: "black" };

    return (
      <section id="map">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1 style={{ color: "#336459" }}>map here</h1>
              <MapContainer
                center={[47.5556, -52.7453]}
                zoom={12}
                scrollWheelZoom={true}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* <Marker key={0} position={[-20, 30]} icon={icon} /> */}
                <Polyline pathOptions={limeOptions} positions={polyline} />
                {/* {position.map((para) => (
                  <Marker position={para}>
                    <Popup>this is a bump/pit, please slow down</Popup>
                  </Marker>
                ))} */}
              </MapContainer>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              ></div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
