import React, { useState } from "react";
import { Marker, Popup,useMap, } from "react-leaflet";
export default function RealTimeTrackingSimulation(props) {
  const map = useMap();
  
  const [coordinates, setCoordinates] = useState(0);
  const interval = setInterval(() => {
    setCoordinates(coordinates + 1);
  }, 5000);
  return (
    <Marker position={[coordinates, coordinates]}>
      <Popup>
        <span>driver</span>
      </Popup>
    </Marker>
  );
}
