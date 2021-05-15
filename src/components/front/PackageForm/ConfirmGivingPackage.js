import React, { useState, useEffect } from "react";
import {
    Grid,
    LinearProgress,
    Card,
    Button,
    List,
    ListItem,
    CardContent,
  } from "@material-ui/core";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {queryServerApi} from '../../../utils/queryServerApi'

import axios from 'axios'

export default function ConfirmGivingPackage(props) {
    const [delivery,setDelivery] = useState();
    const id = localStorage.getItem("id");
    const getAcceptedDelivery = async () => {
    try {
      if(props.form)
      {
        const Delivery = await axios
        .get("http://localhost:3000/delivery/getLastDeliveryByCustomer/" + id )
        .then(function(doc) {
          setDelivery(doc.data);
        });
      }
      else{
        const Delivery = await axios
        .get("http://localhost:3000/delivery/" + props.deliveryId)
        .then(function(doc) {
          if (doc.data.state > 1) {
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

  const confirmDelivery = async (id) => {
      console.log(delivery)
    const [res, err] = await queryServerApi(
      "delivery/confirmDeliveryCustomer/" + delivery._id,
      null,
      "PUT",
      false
    );
    props.changeStep(1);
  };
  return (
      <>
    <Card className="card-box bg-midnight-bloom text-light mb-4">
                    <CardContent className="p-3">
                      <div className="d-flex align-items-start">
                        <div className="font-weight-bold">
                          <small className="text-white-50 d-block mb-1 text-uppercase">
                            Notification :
                          </small>
                          <span>
                            You need to confirm that the driver get your package
                          </span>
                          <br />
                          <button
                          type="button"
                            className="btn-primary"
                            onClick={() =>
                              confirmDelivery()
                            }
                          >
                            Confirm Delivery
                          </button>
                        </div>

                        <div className="ml-auto">
                          <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon
                              icon={["fa", "box"]}
                              className="font-size-xl"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
    </>
  );
}
