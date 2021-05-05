import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WaitingForDriverToAccept(props) {
  const [delivery, setDelivery] = useState();
  const getAcceptedDelivery = async () => {
    try {
<<<<<<< HEAD
      const Delivery = await axios.get(
        "http://localhost:3000/delivery/getLastDeliveryByCustomer/" + localStorage.getItem("id")
      ).then(function(doc){
        if(doc.data.state == 1)
        {
            props.changeStep(1)
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
    <div>
      <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
        Waiting for Driver to accept
      </h2>
    </div>
  );
}
