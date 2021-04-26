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
import { marker } from "leaflet";

export default function CompanyPackageForm(props) {
  const history = useHistory();
  const id = localStorage.getItem("id");
  const role = localStorage.getItem("role");
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
  const [destination, setDestination] = useState([
    {
      Street: "",
      City: "",
      State: "",
      ZipCode: 0,
      Location: { Longitude: 0, Latitude: 0 },
    },
  ]);
  const options = [
    { value: "Dangerous", label: "Dangerous" },
    { value: "Safe", label: "Safe" },
    { value: "Brittle", label: "Brittle" },
  ];
  const formik = useFormik({
    initialValues: {
      customer: id,
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
      } else
        history.push(
          "/Payment?amount=" + 2222 + "&id=" + id + "&userType=Enterprise"
        );
    },
  });
  const MyMarkers = () => {
    const map = useMapEvent("click", (loc) => {
      axios
        .get(
          `https://eu1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY_MALEK}&lat=${loc.latlng.lat}&lon=${loc.latlng.lng}&format=json`
        )
        .then((doc) => {
          let newmarkers = markers;
          newmarkers.push(loc.latlng);
          setMarkers([...newmarkers]);
          console.log(markers.length);
          console.log(markers);
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
            console.log(newSource);
          } else {
            let destinationList = { ...destination };
            let newDestination = { ...destination[0] };
            newDestination.State = doc.data.address.state;
            newDestination.City = doc.data.address.county;
            newDestination.Location = {
              Longitude: doc.data.lon,
              Latitude: doc.data.lat,
            };
            newDestination.ZipCode = parseInt(doc.data.address.postcode);

            //destinationList.push(newDestination);
            destinationList[markers.length - 1] = newDestination;
            setDestination({ ...destinationList });
            console.log(destinationList);
          }
        });
    });
    return null;
  };
  const calculateRoute = () => {
    console.log(source.Location);
    console.log(destination[1].Location);
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
              <div className="col-md-4">
                <input
                  type="text"
                  name="package.0.dimension.Length"
                  onChange={formik.handleChange}
                  placeholder="Length"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  name="package.0.dimension.Height"
                  onChange={formik.handleChange}
                  placeholder="Height"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  name="package.0.dimension.Width"
                  onChange={formik.handleChange}
                  placeholder="Width"
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

            <h3 className=" mt-4 f_p f_600 f_size_24 t_color3 mb_40">
              Select source address first then the destinations :
            </h3>
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
          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn_three">
              Send Package
            </button>
            <button
              type="button"
              onClick={() => calculateRoute}
              className="btn_three"
            >
              Calculate Route
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
