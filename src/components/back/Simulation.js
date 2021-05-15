import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Simulation(props) {
  const [simulation, setSimulation] = useState(false);
  const [state, setState] = useState(0);
  const AddDelivery = () => {
      if(state <6)
      {
        axios
        .post("http://localhost:3000/delivery/startDelivery", {
          customer: "608da92e31963732ccb29c21",
          driver: "609036b4116dba478453eea2",
          package: [
            {
              Name: "yo wassup",
              dimension: {
                Length: 20,
                Height: 20,
                Width: 20,
              },
              type: "Dangerous",
              note: "hello sir",
              weight: 20,
            },
          ],
          state: state,
          sourceAddress: {
            Street: "nahj saidi",
            City: "agba",
            ZipCode: 5000,
            Location: {
              Latitude: 23.0,
              Longitude: 50.0,
            },
          },
          destinationAddress: {
            Street: "nahj saidi",
            City: "agba",
            ZipCode: 5000,
            Location: {
              Latitude: 23.0,
              Longitude: 50.0,
            },
          },
          location: {
            Latitude: 223.0,
            Longitude: 50.0,
          },
          CustomerModel: "customer",
        })
        .then(
          (response) => {
            console.log(response);
            setState( Math.floor(Math.random() * 7) -1)
          },
          (error) => {
            console.log(error);
          }
        );
        
      }
      else
      {
        setState( Math.floor(Math.random() * 6))
      }
    
  };
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         console.log("hi2");
  //         AddDelivery(state)
  //         if(state < 5)
  //         {
  //             setState(state+1)
  //         }
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);
  useEffect(() => {
    const interval = setInterval(() => {   
         AddDelivery()
      }, 3000);
      return () => clearInterval(interval); // This is be executed when `loading` state changes
}, [state])
  return (
    <button
      type="button"
      onClick={() => {
        AddDelivery()
      }}
    >
      add Delivery
    </button>
  );
}
