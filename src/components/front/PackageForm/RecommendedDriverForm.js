import React, { useState, useEffect } from "react";
import DeliveryManItem from "../DeliveryManItem";
import axios from 'axios';

export default function RecommendedDriverForm(props) {
  const [driverShow, setDriverShow] = useState();

  const getDrivers = async () => {
    try {
        const Delivery = await axios
        .get("https://wamya-backend.herokuapp.com/deliveryman/getdev")
        .then(function(doc) {
            console.log(doc.data);
            setDriverShow(doc.data?.filter((driver) => {
              let regions = driver?.Region.map((reg) => {
                return props.destination.State.includes(reg.value) && driver.Status === 3;
              });
              return regions.includes(true);
            }))
        });
      // set State
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(() => {
    getDrivers();
    const interval = setInterval(() => {
    getDrivers();
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
        Choose Your driver
      </h2>
      <div className="row mt-4">
        <div className="col-md-12">
          {driverShow?.map((driver, index) => {
            return (
              <DeliveryManItem
                key={driver._id}
                driver={driver}
                chosen={() => {
                  props.chooseDriver(driver._id);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
