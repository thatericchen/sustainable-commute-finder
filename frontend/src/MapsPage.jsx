import React, { useState, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Button } from "@nextui-org/react";
import "leaflet/dist/leaflet.css";
import RoutingMachine from "./RoutineMachine";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";

function MapsPage({ center }) {
  const totalDistanceRef = useRef(null);

  const [means, setMeans] = useState("Car");
  const [mileage, setMileage] = useState(10);
  const [rec, setRec] = useState(null);

  const handleCalculateDistance = () => {
    const biking = (21 * totalDistanceRef.current) / 1000;
    const driving = (mileage * 2.5 * totalDistanceRef.current) / 1000;
    let total = 0;
    if (means == "Car") {
      total = driving;
    } else if (means == "Bike") {
      total = biking;
    } else {
      total = 0;
    }
    let str = (`Total CO2 emissions for traveling by ${means}: ${total} CO2.`);
console.log(totalDistanceRef.current); 

const treesEquivalent = Math.round(total / 22); // Assuming 22kg CO2 absorbed by a tree per year

if (totalDistanceRef.current < 1500) {
    str += `🚶‍♂️ **Consider Walking!** Not only is it a healthy choice, but by walking, your carbon footprint is essentially zero. It is a small step that makes a big difference for our planet. 🌎 The CO2 you'd save is equivalent to planting ${treesEquivalent} trees annually!`;
} else if (totalDistanceRef.current < 5000) {
    str += `🚴 **How About Biking?** It is a fun, fit, and eco-friendly alternative that significantly reduces your carbon emissions compared to driving. Cycling this distance instead of driving could be like planting ${treesEquivalent} trees each year!`;
} else {
    str += `🚗 **Driving is Convenient, But...** While driving offers comfort and speed, it's essential to keep environmental protection in mind. The CO2 emissions from this trip are significant. To offset the environmental impact, think about ways to drive less or consider more eco-friendly travel options in the future. The emissions from this trip are equivalent to what ${treesEquivalent} trees might absorb in a year. Every little change can help create a greener future. 🌳`;
}
setRec(str);
  };

  return (
    <div className="flex flex-col gap-4">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[300px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine center={center} totalDistanceRef={totalDistanceRef} />
      </MapContainer>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{means}</Button>
        </DropdownTrigger>
        <DropdownMenu onAction={(key) => setMeans(key)}>
          <DropdownItem key="Car">Car</DropdownItem>
          <DropdownItem key="Bike">Bike</DropdownItem>
          <DropdownItem key="Walk">Walk</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {means == "Car" && (
        <Input
          type="number"
          label="Car Economy (km/L)"
          value={mileage}
          onValueChange={setMileage}
        />
      )}
      <Button color="primary" onClick={handleCalculateDistance}>
        Calculate Footprint
      </Button>
      {rec && <p>{rec}</p>}
    </div>
  );
}

export default MapsPage;
