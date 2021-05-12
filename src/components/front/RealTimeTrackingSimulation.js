import React from 'react'
import {
    Marker,
    Popup,
  } from "react-leaflet";
export default function RealTimeTrackingSimulation(props) {
        const interval = setInterval(() => {
          props.setCoordinates(props.coordinates+20);
        }, 2000);
    return (
            <Marker
            position={[0,0]}
            >
            <Popup>
              <span>driver</span>
            </Popup>
          </Marker>
    )
}
