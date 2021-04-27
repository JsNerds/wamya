import React, { Component, useState, useEffect } from "react";
import CustomNavbar from "../../componentsFront/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import PackageList from "../../components/front/PackageList";
import PackageSlider from '../../components/front/PackageSlider'
import { useServerApi } from "../../hooks/useServerApi"; 

export default function MyPackages(props) {
        
        return(
            <>
                 <PackageList packagesList={props.customer.deliveries} />
            </>
        );
    }
