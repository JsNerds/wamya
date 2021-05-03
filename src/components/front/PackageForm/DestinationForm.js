import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";

import axios from "axios";

export default function DestinationForm(props) {
  const [markers, setMarkers] = useState([]);
  const [source, setSource] = useState({
    Street: "",
    City: "",
    State: "",
    ZipCode: 0,
    Location: { Longitude: 0, Latitude: 0 },
  });
  const [destination, setDestination] = useState({
    Street: "",
    City: "",
    State: "",
    ZipCode: 0,
    Location: { Longitude: 0, Latitude: 0 },
  });
  const MyMarkers = () => {
    const map = useMapEvent("click", (loc) => {
      map.invalidateSize();
      if (markers.length < 2) {
        axios
          .get(
            `https://eu1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&lat=${loc.latlng.lat}&lon=${loc.latlng.lng}&format=json`
          )
          .then((doc) => {
            let newmarkers = markers;
            newmarkers.push(loc.latlng);
            setMarkers([...newmarkers]);
            if (markers.length == 1) {
              let newSource = { ...source };
              newSource.State = doc.data.address.state;
              newSource.City = doc.data.address.county;
              newSource.Location = {
                Longitude: doc.data.lon,
                Latitude: doc.data.lat,
              };
              newSource.ZipCode = parseInt(doc.data.address.postcode);
              props.changeSource({ ...newSource });
            } else if (markers.length == 2) {
              let newDestination = { ...destination };
              newDestination.State = doc.data.address.state;
              newDestination.City = doc.data.address.county;
              newDestination.Location = {
                Longitude: doc.data.lon,
                Latitude: doc.data.lat,
              };
              newDestination.ZipCode = parseInt(doc.data.address.postcode);
              props.changeDestination({ ...newDestination });
              console.log(newDestination);
            }
          });
      } else {
        setMarkers([]);
      }
    });
    return null;
  };

  const TextInfo = () => {
    if (markers.length == 0) {
      return (
        <label className="f_p text_c f_400 ">
          Please choose the address of departure
        </label>
      );
    } else if (markers.length == 1) {
      return (
        <label className="f_p text_c f_400 ">
          Please choose the address of destination
        </label>
      );
    } else {
      return (
        <label className="f_p text_c f_400 ">
          Please click again if you want to reset the markers
        </label>
      );
    }
  };

  return (
    <>
      <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
        Address Information
      </h2>
      <TextInfo/>
      <div className="row mt-4">
        <div className="col-md-12">
          <MapContainer center={[50, 12]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyMarkers />
            {markers.map((position, idx) => (
              <Marker key={`marker-${idx}`} position={position}>
                <Popup>
                  <span>Popup</span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
}
