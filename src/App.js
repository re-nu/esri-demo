import React from "react";
import ReactDOM from "react-dom";
import { Map } from "@esri/react-arcgis";

import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Map
    mapProperties={{ basemap: "streets-vector" }}
    viewProperties={{ center: [-90, 38] }}
    loaderOptions={{ version: "4.13", css: true }}
  />,
  rootElement
);
