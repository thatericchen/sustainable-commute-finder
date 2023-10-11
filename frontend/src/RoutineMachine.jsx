import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({ center, totalDistanceRef }) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(center[0], center[1]),
      L.latLng(center[0] + 0.5, center[1])
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });

  instance.on("routesfound", (event) => {
    const { routes } = event;
    const [route] = routes;
    const { summary } = route;
    const { totalDistance } = summary;
    totalDistanceRef.current = totalDistance;
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;