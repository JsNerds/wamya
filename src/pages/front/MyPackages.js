import React, { Component, useState, useEffect } from "react";
import CustomNavbar from "../../componentsFront/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import PackageList from "../../components/front/PackageList";
import { useServerApi } from "../../hooks/useServerApi"; 

export default function MyPackages(props) {
        const [PackageApi] = useServerApi("package/"); 
        const [packages,setPackages] = useState([]);
        useEffect(() => {
            setPackages(PackageApi);
            console.log(packages);
          });     
        let user = "Customer";
        let packageCont = null;
        if (user === "Customer") {
            packageCont = (
                <>
                    <PackageList packagesList={packages} />
                </>
            );
        } else if (user === "Company") {
            packageCont = (
                <>
                    <PackageList packagesList={packages} />
                </>
            );
        }
        return (
            <>
                <CustomNavbar
                    slogo="sticky_logo"
                    mClass="menu_four"
                    nClass="w_menu ml-auto mr-auto"
                />
                <Breadcrumb
                    breadcrumbClass="breadcrumb_area"
                    imgName="breadcrumb/banner_bg.png"
                    Ptitle="My packages"
                    
                />
                {packageCont}
                <FooterTwo FooterData={FooterData} />
            </>
        );
    }
