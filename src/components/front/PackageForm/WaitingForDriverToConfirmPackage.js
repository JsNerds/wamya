import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useServerApi } from "../../../hooks/useServerApi";
import { LinearProgress } from "@material-ui/core";

export default function WaitingForDriverToConfirmPackage(props) {
  const history = useHistory();
  const [DriverApi] = useServerApi("deliveryman/getdev/" + props.driver);
  const [delivery, setDelivery] = useState();
  var id = localStorage.getItem("id");
  const renderPayment = () => {
    if (Math.round(props.duration / 3600) !== 0) {
      history.push(
        "/Payment?amount=" +
          Math.round(props.amount.toFixed(2) * 100) +
          "&id=" +
          id +
          "&userType=Customer&duration=hr" +
          Math.round(props.duration / 3600) +
          ":" +
          Math.round((props.duration / 60) % 60) +
          "min"
      );
    } else {
      if (Math.round(props.duration / 3600) !== 0) {
        history.push(
          "/Payment?amount=" +
            Math.round(props.amount.toFixed(2) * 100) +
            "&id=" +
            id +
            "&userType=Customer&duration=hr" +
            Math.round(props.duration / 3600) +
            ":" +
            Math.round((props.duration / 60) % 60) +
            "min"
        );
      } else {
        history.push(
          "/Payment?amount=" +
            Math.round(props.amount.toFixed(2) * 100) +
            "&id=" +
            id +
            "&userType=Customer&duration=" +
            Math.round(props.duration / 60) +
            "min"
        );
      }
    }
  };
  const getAcceptedDelivery = async () => {
    try {
      if (props.form) {
        const Delivery = await axios
          .get("http://localhost:3000/delivery/getLastDeliveryByCustomer/" + id)
          .then(function(doc) {
            setDelivery(doc.data);
          });
      } else {
        const Delivery = await axios
          .get("http://localhost:3000/delivery/" + props.deliveryId)
          .then(function(doc) {
            setDelivery(doc.data);
          });
      }

      // set State
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAcceptedDelivery();
    const interval = setInterval(() => {
      getAcceptedDelivery();
    }, 2000)

    return () => clearInterval(interval);
  }, []);
  const DisplayPaymentOrWait = () => {
    if (delivery?.state === 2) {
      return (<>
        <div className="font-weight-bold align-self-center">
          Waiting for {DriverApi?.FullName} to Confirm the package receipt
        </div>
        <LinearProgress color="primary" variant="indeterminate" />
      </>)
    } else if (delivery?.Paid === false) {
      return (<button
        type="button"
        onClick={() => {
          renderPayment();
        }}
        className="btn_three"
      >
        Go to Payment
      </button>)
    }
    else{return null}
  };
  return (
    <>
      <div className="align-box-col d-flex justify-content-center mb-1">
        <div>
          <DisplayPaymentOrWait/>
        </div>
      </div>
    </>
  );
}
