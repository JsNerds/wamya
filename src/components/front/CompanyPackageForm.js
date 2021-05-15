import React, { useState } from "react";
import axios from "axios";
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

export default function CompanyPackageForm(props) {
  const history = useHistory();
  const id = localStorage.getItem("id");
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const [markers, setMarkers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);

  const [source, setSource] = useState({
    Street: "",
    City: "",
    State: "",
    ZipCode: 0,
    Location: { Longitude: 0, Latitude: 0 },
  });
  const [destination, setDestination] = useState([]);
  const options = [
    { value: "Dangerous", label: "Dangerous" },
    { value: "Safe", label: "Safe" },
    { value: "Brittle", label: "Brittle" },
  ];
  const calculateDistance = async () => {
    let destinations = "";
    locations.forEach((value, i) => {
      destinations = destinations + value.lng + "," + value.lat;
      if (i + 1 < locations.length) {
        destinations = destinations + ";";
      }
    });
    let url = `https://eu1.locationiq.com/v1/optimize/driving/${destinations}?key=${process.env.REACT_APP_LOCATIONIQ_KEY_MALEK}&source=first`;
    console.log(url);
    await axios.get(url).then((doc) => {
      //doc.data.waypoints.forEach((loc) => console.log(loc.location));
      let organizedLocations = [];

      doc.data.waypoints.slice(1).forEach((loc) => {
        let i = loc.waypoint_index - 1;
        organizedLocations.push(destination[i]);
      });

      setDestination([...organizedLocations]);

      let newDistance = doc.data.trips[0].distance;
      let newDuration = doc.data.trips[0].duration;
      setDuration(newDuration);
      setDistance(newDistance);
    });
  };

  const formik = useFormik({
    initialValues: {
      customer: id,
      driver: "",
      package: [
        {
          note: "",
          dimension: {
            Length: 0,
            Height: 0,
            Width: 0,
          },
          type: "",
          weight: 0,
        },
      ],
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
      destinationAddress: [
        {
          Street: "",
          City: "",
          State: "",
          ZipCode: 0,
          Location: {
            Longitude: 0,
            Latitude: 0,
          },
        },
      ],
      location: {
        Longitude: 0,
        Latitude: 0,
      },
      CustomerModel: "entreprise",
    },
    onSubmit: async (values) => {
      values.sourceAddress = source;
      values.destinationAddress = destination;
      values.duration = duration;
      values.distance = distance;
      console.log(values);
      const [, err] = await queryServerApi(
        "delivery/startDelivery",
        values,
        "POST",
        false
      );
      if (err) {
        setShowLoader(true);
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else history.go(0);
    },
  });
  const MyMarkers = () => {
    const map = useMapEvent("click", (loc) => {
      setTimeout(function() {
        map.invalidateSize();
      }, 500);

      axios
        .get(
          `https://eu1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY_MALEK}&lat=${loc.latlng.lat}&lon=${loc.latlng.lng}&format=json`
        )
        .then((doc) => {
          let newmarkers = markers;
          newmarkers.push(loc.latlng);
          setMarkers([...newmarkers]);
          locations.push(markers[markers.length - 1]);
          if (markers.length === 1) {
            let newSource = { ...source };
            newSource.State = doc.data.address.state;
            newSource.City = doc.data.address.county;
            newSource.Location = {
              Longitude: doc.data.lon,
              Latitude: doc.data.lat,
            };
            newSource.ZipCode = parseInt(doc.data.address.postcode);
            setSource({ ...newSource });
            // console.log(newSource);
          } else {
            let newDestination = {
              Street: "",
              City: "",
              State: "",
              ZipCode: 0,
              Location: {
                Longitude: 0,
                Latitude: 0,
              },
            };

            newDestination.State = doc.data.address.state;
            newDestination.City = doc.data.address.county;
            newDestination.Location = {
              Longitude: doc.data.lon,
              Latitude: doc.data.lat,
            };
            newDestination.ZipCode = parseInt(doc.data.address.postcode);
            destination.push(newDestination);
            calculateDistance();
          }
        });
    });
    return null;
  };

  const clear = () => {
    setDestination([]);
    setSource({});
    setLocations([]);
    setMarkers([]);
    setDuration(0);
    setDistance(0);
  };
  const TextInfo = () => {
    if (locations.length < 1) {
      return (
        <h3 className=" mt-4 f_p f_600 f_size_24 t_color3 mb_40">
          Select the departure address
        </h3>
      );
    } else {
      return (
        <h3 className=" mt-4 f_p f_600 f_size_24 t_color3 mb_40">
          Select destination address number {locations.length}
        </h3>
      );
    }
  };
  return (
    <div className="sign_info_content">
      <h3 className=" ml-3 f_p f_600 f_size_24 t_color3 mb_40">
        Start a new Delivery
      </h3>
      <div className="login_info">
        <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
          Package description
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group text_box">
            {error.visible && <p>{error.message}</p>}
          </div>
          <div className="form-group text_box">
            <label className="f_p text_c f_400">Dimensions :</label>
            <div className="row mr-2">
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
                  name="package.0.weight"
                  onChange={formik.handleChange}
                  placeholder="Weight"
                />
              </div>
            </div>

            <div className=" mt-3 mr-1 row">
              <div className="col-lg-12">
                <label className="f_p text_c f_400">Package type:</label>
                <Select
                  label="Choose type"
                  options={options}
                  onChange={(value) => {
                    formik.setFieldValue("package.0.type", value.value);
                  }}
                />
              </div>
            </div>
            <div className=" mt-3 ml-1 mr-3 row">
              <label className="f_p text_c f_400">Note to driver :</label>
              <input
                type="text"
                name="package.0.note"
                onChange={formik.handleChange}
                placeholder="Note to driver"
              />
            </div>
            <TextInfo />

            <MapContainer
              center={{ lat: 36.8065, lng: 10.1815 }}
              zoom={10}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MyMarkers />
              {markers.map((position, idx) => (
                <Marker key={`marker-${idx}`} position={position}>
                  <Popup>
                    <span>destination : {idx}</span>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <div className="row">
            <div className="col-md-3">
              <button
                style={{ marginTop: 0 }}
                type="button"
                onClick={() => clear()}
                className="btn_three"
              >
                Clear marks
              </button>
            </div>
            <div className="col-md-5">
              {distance !== 0 && duration !== 0 ? (
                <>
                  <p className="f_p text_c f_400" style={{ marginBottom: 0 }}>
                    the trip is {"  "}
                    <strong>{(distance / 1000).toFixed(2)} Km </strong>
                  </p>
                  <p className="f_p text_c f_400">
                    the trip will take:{"  "}
                    <strong>
                      {Math.round(duration / 3600) !== 0 ? (
                        <>
                          {Math.round(duration / 3600)}Hr
                          {Math.round((duration / 60) % 60)}min
                        </>
                      ) : (
                        <>{Math.round(duration / 60)}min </>
                      )}
                    </strong>
                  </p>
                </>
              ) : null}
            </div>
            <div className="col-md-4 ">
              <button
                style={{ marginTop: 0 }}
                type="submit"
                className="btn_three flex-end float-right"
              >
                Send Package
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
