import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useServerApi} from '../../../hooks/useServerApi';
import { LinearProgress } from "@material-ui/core";

export default function WaitingForDriverToConfirmPackage(props) {
    const history = useHistory()
    const [DriverApi] = useServerApi("deliveryman/getdev/" + props.driver);
    const [delivery,setDelivery] = useState();
    var id= localStorage.getItem("id");
  const getAcceptedDelivery = async () => {
    try {
      const Delivery = await axios.get(
        "http://localhost:3000/delivery/" + props.deliveryId
      ).then(function(doc){
        if(doc.data.state == 3)
        {
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
                  history.push("/Payment?amount=" + Math.round(props.amount.toFixed(2) * 100) + "&id=" + id + "&userType=Customer&duration=hr" + Math.round(props.duration / 3600) + ":" + Math.round((props.duration / 60) % 60) + "min");
                }
                else {
                  history.push("/Payment?amount=" + Math.round(props.amount.toFixed(2)*100) + "&id=" + id + "&userType=Customer&duration="+Math.round(props.duration / 60) +"min");
                }
              }
        }
        else
        {
            console.log(doc.data)
            setDelivery(doc.data)
        }
      });
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
            Waiting for {DriverApi?.FullName} to Confirm the package receipt
          </div>
        </div>
      </div>
      <LinearProgress color="primary" variant="indeterminate" />
      </>
  );
}
