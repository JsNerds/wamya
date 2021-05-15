import React, { Component, useState, useEffect } from "react";
import CustomNavbar from "../../components/front/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../components/front/FooterTwo";
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
                setDeliveryList(doc.data)
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
            
        }, 1500);
        return () => clearInterval(interval);
      }, []);
        
        return(
            <>
                 <PackageList packagesList={deliveryList} />
            </>
        );
    }
