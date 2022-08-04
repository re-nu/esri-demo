import React from "react";
import ReactDOM from "react-dom";
import { Map } from "@esri/react-arcgis";
import { loadModules } from "esri-loader";

import "./styles.css";

const rootElement = document.getElementById("root");

const App = () => {
  const handleMapLoad = function (map, view) {
    loadModules(["esri/widgets/Search"]).then(([Search]) => {
      const searchWidget = new Search({
        view: view
      });
      view.ui.add(searchWidget, {
        position: "top-right"
      });
    });
  };

  return (
    <Map
      mapProperties={{ basemap: "streets-vector" }}
      viewProperties={{ center: [-90, 38] }}
      loaderOptions={{ version: "4.17", css: true }}
      onLoad={handleMapLoad}
    />
  );
};

ReactDOM.render(<App />, rootElement);
