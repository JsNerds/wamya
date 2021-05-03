import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  // useMapEvents,
  useMap,
} from "react-leaflet";
import { useServerApi } from "../../hooks/useServerApi";
export default function PackageDetailItem() {
  let { id } = useParams();
  console.log(id);
  const [delivery] = useServerApi("delivery/" + id);
  const [markers, setMarkers] = useState([]);
  const [deliv, setDeliv] = useState();

  useEffect(() => {
    setDeliv(delivery);
    console.log(delivery);
  });

  const MyMarkers = () => {
    const map = useMap();
    if (deliv) {
      map.panTo([
        deliv?.sourceAddress.Location.Latitude,
        deliv?.sourceAddress.Location.Longitude,
      ]);
      return (
        <>
          <Marker
            position={[
              deliv?.sourceAddress.Location.Latitude,
              deliv?.sourceAddress.Location.Longitude,
            ]}
          >
            <Popup>
              <span>start : {deliv?.sourceAddress.City}</span>
            </Popup>
          </Marker>
          {deliv?.destinationAddress.map((el) => (
            <Marker position={[el.Location.Latitude, el.Location.Longitude]}>
              <Popup>
                <span>{el.City}</span>
              </Popup>
            </Marker>
          ))}
        </>
      );
    } else {
      return null;
    }
  };
  /*function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }*/
  return (
    <div>
      <section className="service_details_area sec_pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pr_70">
              <div className="job_info">
                <div className="info_head">
                  <i className="ti-receipt"></i>
                  <h6 className="f_p f_600 f_size_18 t_color3">
                    Voici votre Paquet
                  </h6>
                </div>
                <div className="info_item">
                  <h6></h6>
                  <p>Driver's Name</p>
                </div>
                <div className="info_item">
                  <h6>Live Time:</h6>
                  <p>
                    {new Intl.DateTimeFormat("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    }).format(deliv?.date_launch)}
                  </p>
                </div>
                <div className="info_item">
                  <h6>Service Cost:</h6>
                  <p>
                    Duration: {Math.round(deliv?.duration / 3600)}Hr
                    {Math.round((deliv?.duration / 60) % 60)}min
                  </p>
                  <p>Distance: {Math.round(deliv?.distance / 1000)} Km</p>
                </div>
                <div className="info_item">
                  <h6>Source Adress</h6>
                  <p>{deliv?.sourceAddress.City}</p>
                </div>
                <div className="info_item">
                  <h6>Destination Address</h6>
                  {deliv?.destinationAddress.map((el, index) => (
                    <p>{el.City}</p>
                  ))}
                </div>
                <div className="info_item">
                  <h6>Package Type</h6>
                  <p>{deliv?.package[0].type}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="details_content">
                <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <MyMarkers />
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
