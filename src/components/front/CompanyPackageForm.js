import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "../../utils/queryServerApi";
import { useFormik } from "formik";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { marker } from "leaflet";

export default function CompanyPackageForm(props) {
  const history = useHistory();
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
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
      Name: "",
      dimension: [0, 0, 0],
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
      destinationAddress: {
        Street: "",
        City: "",
        State: "",
        ZipCode: 0,
        Location: {
          Longitude: 0,
          Latitude: 0,
        },
      },
      location: {
        Longitude: 0,
        Latitude: 0,
      },
      type: "",
      state: "",
    },
    onSubmit: async (values) => {
      values.sourceAddress = source;
      values.destinationAddress = destination;
      console.log(values);
      setShowLoader(false);
      const [, err] = await queryServerApi(
        "package/addPackageCustomer/60717a108cd4e80964d0a06c",
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
            <div className="sign_info_content">
              <h3 className=" ml-3 f_p f_600 f_size_24 t_color3 mb_40">
                Package Description
              </h3>
              <div className="login_info">
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Package</h2>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group text_box">
                    {error.visible && <p>{error.message}</p>}
                  </div>
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Dimensions :</label>
                    <div className="row">
                      <div className="col-md-3">
                        <input
                          type="text"
                          name="dimension[0]"
                          onChange={formik.handleChange}
                          placeholder="Length"
                        />
                      </div>
                      <div className="col-md-3">
                        <input
                          type="text"
                          name="dimension[1]"
                          onChange={formik.handleChange}
                          placeholder="Height"
                        />
                      </div>
                      <div className="col-md-3">
                        <input
                          type="text"
                          name="dimension[2]"
                          onChange={formik.handleChange}
                          placeholder="Width"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className=" mt-3 ml-1 row">
                          <label className="f_p text_c f_400">
                            package description :
                          </label>
                          <input
                            type="text"
                            name="type"
                            onChange={formik.handleChange}
                            placeholder="Package description"
                          />
                        </div>
                        <div className=" mt-3 ml-1 row">
                          <label className="f_p text_c f_400">
                            Note to driver :
                          </label>
                          <input
                            type="text"
                            name="note"
                            onChange={formik.handleChange}
                            placeholder="Note to driver"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <MapContainer
                          center={[50, 12]}
                          zoom={13}
                          scrollWheelZoom={false}
                        >
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
