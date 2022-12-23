import React, { Component } from "react";
import { render } from "react-dom";
import Map from "./GoogleMaps";
import InfoWindow from "./İnfoWindow";

export default class Mapİndex extends Component {
  constructor() {
    super();
    this.createInfoWindow = this.createInfoWindow.bind(this);
  }

  createInfoWindow(e, map) {
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow" />',
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() },
    });
    infoWindow.addListener("domready", (e) => {
      render(<InfoWindow />, document.getElementById("infoWindow"));
    });
    infoWindow.open(map);
  }

  render() {
    return (
      <Map
        id="myMap"
        options={{
          center: { lat: 60.619099, lng: -110.428921 },
          zoom: 3,
        }}
        onMapLoad={(map) => {
          const marker = new window.google.maps.Marker({
            position: { lat: 60.619099, lng: -110.428921 },
            map: map,
            title: "Kanada!",
          });
          marker.addListener("click", (e) => {
            this.createInfoWindow(e, map);
          });
        }}
      />
    );
  }
}
