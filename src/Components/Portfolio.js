import React, { Component, useState, useMemo, useCallback } from "react";
import Fade from "react-reveal";
import { Icon } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
  useMap,
  useMapEvent,
} from "react-leaflet";

let id = 0;
const POSITION_CLASSES = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};

const BOUNDS_STYLE = { weight: 1 };

function MinimapBounds({ parentMap, zoom }) {
  const minimap = useMap();

  // Clicking a point on the minimap sets the parent's map center
  const onClick = useCallback(
    (e) => {
      parentMap.setView(e.latlng, parentMap.getZoom());
    },
    [parentMap]
  );
  useMapEvent("click", onClick);

  // Keep track of bounds in state to trigger renders
  const [bounds, setBounds] = useState(parentMap.getBounds());
  const onChange = useCallback(() => {
    setBounds(parentMap.getBounds());
    // Update the minimap's view to match the parent map's center and zoom
    minimap.setView(parentMap.getCenter(), zoom);
  }, [minimap, parentMap, zoom]);

  // Listen to events on the parent map
  const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), []);
  useEventHandlers({ instance: parentMap }, handlers);

  return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
}

function MinimapControl({ position, zoom }) {
  const parentMap = useMap();
  const mapZoom = zoom || 0;

  // Memoize the minimap so it's not affected by position changes
  const minimap = useMemo(
    () => (
      <MapContainer
        style={{ height: 80, width: 80 }}
        center={parentMap.getCenter()}
        zoom={mapZoom}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
      </MapContainer>
    ),
    []
  );

  const positionClass =
    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
  return (
    <div className={positionClass}>
      <div className="leaflet-control leaflet-bar">{minimap}</div>
    </div>
  );
}

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
    const position = [
      [47.5556, -52.7453],
      [47.5666, -52.7563],
    ];

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1 style={{ color: "#f1707d" }}>map here</h1>
              <MapContainer
                center={[47.5556, -52.7453]}
                zoom={12}
                scrollWheelZoom={true}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <MinimapControl position="topright" />
                {/* <Marker key={0} position={[-20, 30]} icon={icon} /> */}
                {position.map((para) => (
                  <Marker position={para}>
                    <Popup>this is a bump/pit, please slow down</Popup>
                  </Marker>
                ))}
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
