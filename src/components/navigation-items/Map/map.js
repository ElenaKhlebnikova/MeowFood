import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import React from "react";
import pawMarker from "./../../../assets/paw-marker.png";
const position = [39.2, -106.5];
function getIcon(_iconSize) {
  return L.icon({
    iconUrl: pawMarker,
    iconSize: [_iconSize],
  });
}

const Map = () => {
  return (
    <MapContainer
      id="map"
      style={{ height: "100%" }}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={getIcon(40)}>
        <Popup>We are here!</Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
