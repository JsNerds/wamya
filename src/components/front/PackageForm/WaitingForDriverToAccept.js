import React, { useState, useEffect } from "react";
import axios from "axios";
import { useServerApi } from "../../../hooks/useServerApi";
import { LinearProgress } from "@material-ui/core";

export default function WaitingForDriverToAccept(props) {
  const [delivery, setDelivery] = useState();
  const [DriverApi] = useServerApi("deliveryman/getdev/" + props.driver);
  const id = localStorage.getItem("id");
  const getAcceptedDelivery = async () => {
    try {
      console.log(props.form);
      if(props.form)
      {
        const Delivery = await axios
        .get("http://localhost:3000/delivery/getLastDeliveryByCustomer/" + id )
        .then(function(doc) {
          if (doc.data.state == 1) {
            props.changeStep(1);
          } else {
            console.log(doc.data);
            setDelivery(doc.data);
          }
        });
      }
      else{
        const Delivery = await axios
        .get("http://localhost:3000/delivery/" + props.deliveryId)
        .then(function(doc) {
          if (doc.data.state == 1) {
            props.changeStep(1);
          } else {
            console.log(doc.data);
            setDelivery(doc.data);
          }
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
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="align-box-col d-flex justify-content-center mb-1">
        <div>
          <div className="font-weight-bold align-self-center">
            Waiting for {DriverApi?.FullName} to accept the delivery{" "}
          </div>
        </div>
      </div>
      <LinearProgress color="secondary" variant="indeterminate" />
    </>
  );
}
