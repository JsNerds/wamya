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
import PackageSteps from "./PackageSteps";
import WaitingForDriverToAccept from "./PackageForm/WaitingForDriverToAccept";
import WaitingForDriverToConfirmPackage from "./PackageForm/WaitingForDriverToConfirmPackage";
import ConfirmGivingPackage from "./PackageForm/ConfirmGivingPackage";
import * as L from "leaflet";
import "leaflet-routing-machine";
export default function PackageDetailItem() {
  let { id } = useParams();
  console.log(id);
  const [delivery] = useServerApi("delivery/" + id);
  const [marker, setMarker] = useState();
  const [deliv, setDeliv] = useState();
  const [step, setStep] = useState(0);

  useEffect(() => {
    setDeliv(delivery);
    console.log(delivery);
  });
  useEffect(() => {
    setStep(delivery?.state);
  }, [delivery]);

  const changeStep = (i) => {
    if (step + i < 0 || step + i > component.length) {
      return null;
    } else {
      setStep(step + i);
    }
  };
  const component = [
    <WaitingForDriverToAccept
      changeStep={changeStep}
      deliveryId={deliv?._id}
      driver={deliv?.driver?._id}
    />,
    <ConfirmGivingPackage changeStep={changeStep} deliveryId={deliv?._id} />,
    <WaitingForDriverToConfirmPackage
      duration={deliv?.duration}
      driver={deliv?.driver?._id}
      amount={(deliv?.distance * 0.7) / 1000}
      deliveryId={deliv?._id}
    />,
    <WaitingForDriverToConfirmPackage
      duration={deliv?.duration}
      driver={deliv?.driver?._id}
      amount={(deliv?.distance * 0.7) / 1000}
      deliveryId={deliv?._id}
    />,
  ];

  const MyMarkers = () => {
    const map = useMap();

    if (deliv) {
      const preparedData = [];
      preparedData.push(
        L.latLng(
          deliv?.sourceAddress.Location.Latitude,
          deliv?.sourceAddress.Location.Longitude
        )
      );
      deliv.destinationAddress.forEach((el) => {
        preparedData.push(
          L.latLng(el?.Location.Latitude, el?.Location.Longitude)
        );
      });

      var control = L.Routing.control({
        waypoints: preparedData,
        //router: new L.Routing.Google(),
        lineOptions: {
          styles: [
            {
              color: "blue",
              opacity: 0.6,
              weight: 4,
            },
          ],
        },
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false,
      });
      //L.Routing.Itinerary({ show: false });
      control.addTo(map);

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
        </>
      );
    } else {
      return null;
    }
  };
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
                  <p>Driver's Name {deliv?.driver?.FullName}</p>
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
                  <h6>Service Details:</h6>
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
                    <p>{el?.City}</p>
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
                {deliv?.state > -1 &&
                deliv?.state < 4 &&
                deliv?.CustomerModel === "customer" ? (
                  <section className="sign_in_area bg_color sec_pad">
                    <div className="container">
                      <div className="sign_info">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="login_info">
                              <form>
                                <div className="form-group text_box"></div>
                                <div className="form-group text_box">
                                  <PackageSteps
                                    component={component}
                                    step={step}
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
