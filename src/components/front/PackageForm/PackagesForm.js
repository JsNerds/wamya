import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "../../../utils/queryServerApi";
import { useServerApi } from "../../../hooks/useServerApi";
import { useFormik } from "formik";
import * as Yup from 'yup';

import PackageSteps from "../PackageSteps";
import DestinationForm from "./DestinationForm";
import PackageDetailForm from "./PackageDetailForm";
import RecommendedDriverForm from "./RecommendedDriverForm";
import WaitingForDriverToAccept from './WaitingForDriverToAccept'
import ConfirmGivingPackage from './ConfirmGivingPackage'
import WaitingForDriverToConfirmPackage from "./WaitingForDriverToConfirmPackage";

export default function PackagesForm(props) {
  const id = localStorage.getItem("id");
  const [recommendedDriversList, setRecommendedDriverList] = useState([]);
  const role = localStorage.getItem("role");
  const history = useHistory();
  const [DriverApi] = useServerApi("deliveryman/getdev");
  const [chosenDriver, setChosenDriver] = useState();
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [locations, setLocations] = useState([]);
  const [amount, setAmount] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [driverShow, setDriverShow] = useState();
  const [error, setError] = useState({ visible: false, message: "" });
  const [startedDeliv,setStartedDeliv] = useState();
  const [step, setStep] = useState(0);
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
      CustomerModel: "customer",
      Paid:false
    },
    onSubmit: async (values) => {
      values.sourceAddress = source;
      values.destinationAddress.shift();
      values.destinationAddress.push(destination);
      values.duration = duration;
      values.distance = distance;
      console.log(values);
      setShowLoader(false);
      const [startedDelivery, err] = await queryServerApi(
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
      } else {
        setStartedDeliv(startedDelivery);
        console.log(startedDeliv);    
      }
    },
  });
  const chooseDriver = (id) => {
    formik.setFieldValue("driver", id);
    setChosenDriver(id);
    formik.submitForm();
      changeStep(1);
  };

  const calculateDistance = async () => {
    let destinations = "";
    locations.forEach((value, i) => {
      destinations = destinations + value.lng + "," + value.lat;
      if (i + 1 < locations.length) {
        destinations = destinations + ";";
      }
    });
    let url = `https://eu1.locationiq.com/v1/optimize/driving/${destinations}?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&source=first&destination=last&roundtrip=false&overview=simplified`;
    console.log(url);
    await axios.get(url).then((doc) => {
      let newDistance = doc.data.trips[0].distance;
      let newDuration = doc.data.trips[0].duration;
      setDuration(newDuration);
      setDistance(newDistance);
      setAmount((newDistance / 1000) * 0.7);
      console.log(newDistance, distance, duration, doc.data.trips[0].distance);
    });
    console.log(distance, duration);
  };

  const changeStep = (i) => {
    if (step + i < 0 || step + i > component.length) {
      return null;
    } else {
      if (step + i == 2) {
        calculateDistance();
        setRecommendedDriverList(
          DriverApi?.filter((driver) => {
            let regions = driver?.Region.map((reg) => {
              return destination.State.includes(reg.value);
            });
            return regions.includes(true);
          })
        );
        console.log(recommendedDriversList);
      }
      else if (step + i == 1){
        setDistance(0);
        setDuration(0);
        setAmount(0);
      }
      setStep(step + i);
    }

  };
  const component = [
    <PackageDetailForm formik={formik} />,
    <DestinationForm
      changeSource={setSource}
      changeDestination={setDestination}
      changeDuration={setDuration}
      changeDistance={setDistance}
      changeLocations={setLocations}
      locations={locations}
      changeAmout={setAmount}
    />,
    <RecommendedDriverForm
      chooseDriver={chooseDriver}
      driverList={recommendedDriversList}
    />,
    <WaitingForDriverToAccept changeStep={changeStep} driver={chosenDriver} form={true}/>,
    <ConfirmGivingPackage changeStep={changeStep} form={true}/>,
    <WaitingForDriverToConfirmPackage duration={duration} driver={chosenDriver} amount={amount} form={true}/>
  ];
  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-12">
              <div className="login_info">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group text_box">
                    {error.visible && <p>{error.message}</p>}
                  </div>
                  <div className="form-group text_box">
                    <PackageSteps component={component} step={step} />
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    {step != 0 ? (
                      <button
                        type="button"
                        onClick={() => {
                          changeStep(-1);
                        }}
                        className="btn_three"
                      >
                        Previous
                      </button>
                    ) : null} 
                    {step > 1 ? null : (
                      <button
                        type="button"
                        onClick={() => {
                          changeStep(1);
                        }}
                        className="btn_three"
                      >
                        Next
                      </button>
                    )}
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
