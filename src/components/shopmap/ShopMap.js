import "./ShopMap.css";
import React from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";

let iconUbication = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [60, 55],
  iconAnchor: [22, 94],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

const ShopMap = () => {
  const locations = [
    {
      name: "Tamaraceite",
      latitude: 28.1,
      longitude:  -15.4667
    },
    {
      name: "Las Canteras",
      latitude: 28.1345852,
      longitude:-15.4381933
    },
    {
      name: "Triana",
      latitude: 28.1025879,
      longitude: -15.4204843
    }
  ];

  // Obtener los límites del mapa basados en las ubicaciones
  const bounds = L.latLngBounds(locations.map(location => [location.latitude, location.longitude]));

  return (
    <div className="map-container">
      <MapContainer bounds={bounds} scrollWheelZoom={false} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker key={index} position={[location.latitude, location.longitude]} icon={iconUbication}>
            <Popup>
              {location.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ShopMap;