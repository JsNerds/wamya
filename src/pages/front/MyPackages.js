import React, { Component, useState, useEffect } from "react";
import CustomNavbar from "../../componentsFront/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import PackageList from "../../components/front/PackageList";
import PackageSlider from "../../components/front/PackageSlider";
import { useServerApi } from "../../hooks/useServerApi";
import axios from 'axios'
export default function MyPackages(props) {
    const [deliveryList,setDeliveryList] = useState();
    const getAllDeliveriesForCustomer= async () => {
        try {
          const Delivery = await axios.get(
            "http://localhost:3000/delivery/getDeliveryByCustomer/" + localStorage.getItem("id")
          ).then(function(doc){
            if(doc.data.state == 1)
            {
                props.changeStep(1)
            }
            else
            {  
                console.log(doc.data)
                setDeliveryList(doc.data)
            }
          });
           // set State
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        getAllDeliveriesForCustomer();
        const interval = setInterval(() => {
            getAllDeliveriesForCustomer();
            
        }, 500);
    
        return () => clearInterval(interval);
      }, []);
        
        return(
            <>
                 <PackageList packagesList={deliveryList} />
            </>
        );
    }
