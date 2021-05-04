import React, { useState, useEffect } from "react";
import usehs, { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function WaitingForDriverToConfirmPackage(props) {
    const history = useHistory()
    const [delivery,setDelivery] = useState();
    var id= localStorage.getItem("id");
  const getAcceptedDelivery = async () => {
    try {
      const Delivery = await axios.get(
        "http://localhost:3000/delivery/getLastDeliveryByCustomer/" + id
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
        Waiting for Driver to confirm the package receipt
      </h2>
    </div>
  );
}
