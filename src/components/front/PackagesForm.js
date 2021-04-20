import React, { useState, useEffect } from "react";
import axios from "axios";
import Packages from "../../pages/front/SendPackages";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "../../utils/queryServerApi";
import { useFormik } from "formik";
import Select from "react-select";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { marker } from "leaflet";

export default function PackagesForm(props) {
  const history = useHistory();
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const [step, setStep] = useState(1);
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
  const formik = useFormik({
    initialValues: {
      customer: "607f469b86187226c038d247",
      package: [{
        note: "",
        dimension: {
          Length: 0,
          Height: 0,
          Width: 0,
        },
        type: "",
        weight: 0,
      }],
      date_Launch: new Date().getDate(),
      distance: 0,
      duration: 0,
      state: 0,
      sourceAddress: {
        Street: "",
        City: "",
        State: "",
        ZipCode: 0,
        Location: {
          Longitude: 0,
          Latitude: 0,
        },
      },
      destinationAddress: [{
        Street: "",
        City: "",
        State: "",
        ZipCode: 0,
        Location: {
          Longitude: 0,
          Latitude: 0,
        },
      }],
      location: {
        Longitude: 0,
        Latitude: 0,
      },
      CustomerModel: "customer",
    },
    onSubmit: async (values) => {
      values.sourceAddress = source;
      values.destinationAddress.shift();
      values.destinationAddress.push(destination);
      console.log(values);
      setShowLoader(false);
      const [, err] = await queryServerApi(
        "delivery/startDelivery",
        values,
        "POST",
        false
      );
      if (err) {
        setShowLoader(false);
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else history.push("/SendPackage");
    },
  });
  const options = [
    { value: "Dangerous", label: "Dangerous" },
    { value: "Safe", label: "Safe" },
    { value: "Brittle", label: "Brittle" },
  ];
  const MyMarkers = () => {
    const map = useMapEvent("click", (loc) => {
      if (markers.length < 2) {
        axios
          .get(
            `https://eu1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&lat=${loc.latlng.lat}&lon=${loc.latlng.lng}&format=json`
          )
          .then((doc) => {
            let newmarkers = markers;
            newmarkers.push(loc.latlng);
            setMarkers([...newmarkers]);
            console.log(markers.length);
            if (markers.length == 1) {
              let newSource = { ...source };
              newSource.State = doc.data.address.state;
              newSource.City = doc.data.address.county;
              newSource.Location = {
                Longitude: doc.data.lon,
                Latitude: doc.data.lat,
              };
              newSource.ZipCode = parseInt(doc.data.address.postcode);
              setSource({ ...newSource });
              console.log(newSource);
            } else if (markers.length == 2) {
              let newDestination = { ...source };
              newDestination.State = doc.data.address.state;
              newDestination.City = doc.data.address.county;
              newDestination.Location = {
                Longitude: doc.data.lon,
                Latitude: doc.data.lat,
              };
              newDestination.ZipCode = parseInt(doc.data.address.postcode);
              setDestination({ ...newDestination });
              console.log(newDestination);
            }
          });
      } else {
        setMarkers([]);
      }
    });
    return null;
  };
  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-5">
              <div className="sign_info_content">
                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">
                  Send Your Package Now!!!
                </h3>
                <h2 className="f_p f_400 f_size_30 mb-30">
                  Fill out the Form <br /> starting using our <br />
                  <span className="f_700">amazing</span> Application
                </h2>
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="ti-check"></i>Safety
                  </li>
                  <li>
                    <i className="ti-check"></i>Digital Signature
                  </li>
                  <li>
                    <i className="ti-check"></i>Real Time Tracking
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="login_info">
                <form onSubmit={formik.handleSubmit}>
                  <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Package</h2>
            <div className="form-group text_box">
              {error.visible && <p>{error.message}</p>}
            </div>
            <div className="form-group text_box">
              <label className="f_p text_c f_400">Dimension</label>
              <div className="row">
                <div className="col-lg-12">
                  <Select label="Choose type" 
                   options={options} 
                   onChange={value => {formik.setFieldValue('package.0.type',value.value)}}/>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-3">
                  <input
                    type="text"
                    name="package.0.dimension.Length"
                    onChange={formik.handleChange}
                    placeholder="Length"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    name="package.0.dimension.Height"
                    onChange={formik.handleChange}
                    placeholder="Height"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    name="package.0.dimension.Width"
                    onChange={formik.handleChange}
                    placeholder="Width"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Weight"
                    name="package.0.weight"
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-12">
                  <input
                    type="text"
                    placeholder="Note"
                    name="package.0.note"
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="row mt-4">
              <div className="col-md-12">
              <MapContainer center={[50, 12]} zoom={13} scrollWheelZoom={false}>
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
            </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn_three">
                      Send Package
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
