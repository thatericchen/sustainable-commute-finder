import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button } from '@nextui-org/react';
import 'leaflet/dist/leaflet.css';
import RoutingMachine from './RoutineMachine';
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Input} from "@nextui-org/react";


function MapsPage({center}) {

  const totalDistanceRef = useRef(null);

  const [means, setMeans] = useState('Car');
  const [mileage, setMileage] = useState(10);
  const [rec, setRec] = useState(null);

  const handleCalculateDistance = () => {
    const biking = 21 * totalDistanceRef.current / 1000;
    const driving = mileage * 2.5 * totalDistanceRef.current / 1000;
    let total = 0;
    if (means == "Car") {
      total = driving;
    } else if (means == "Bike") {
      total = biking;
    } else {
      total = 0;
    }
    let str = (`Total CO2 emissions for ${means}: ${total} CO2.`);
    console.log(totalDistanceRef.current ); 
    if (totalDistanceRef.current < 1500) {
      str += 'You should walk instead!'
    } else if (totalDistanceRef.current < 5000) {
      str += 'You should bike instead!'
    }
    setRec(str);
  };


  return (
    <div className="flex flex-col gap-4">
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} className='h-[300px]'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <RoutingMachine center={center} totalDistanceRef={totalDistanceRef} />
      </MapContainer>
      <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          {means}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        onAction={(key) => setMeans(key)}
      >
        <DropdownItem key="Car">Car</DropdownItem>
        <DropdownItem key="Bike">Bike</DropdownItem>
        <DropdownItem key="Walk">Walk</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    {means=="Car" && <Input type="number" label="Car Economy (km/L)" value={mileage} onValueChange={setMileage}/>}
      <Button color="primary" onClick={handleCalculateDistance} >
        Calculate Footprint
      </Button>
      {rec && <p>{rec}</p>}
    </div>
  );
}

export default MapsPage;

