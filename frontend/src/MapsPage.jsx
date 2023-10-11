import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


function MapsPage() {

  const [center, setCenter] = useState([
    33.7815474, -84.3895108]);

  const successCallback = (position) => {
    if (center == [51.505, -0.09])
      setCenter([position.coords.latitude, position.coords.longitude]);
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false} className='h-[300px]'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default MapsPage;

