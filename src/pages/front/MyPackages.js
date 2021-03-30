import React, { Component } from "react";
import PackageSlider from "../../components/front/PackageSlider";
import CustomNavbar from "../../componentsFront/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import Sectitle from "../../componentsFront/Title/Sectitle";
import PackageList from "../../components/front/PackageList";

export default class MyPackages extends Component {
    render() {
        let user = "Customer";
        let packageCont = null;
        if (user === "Customer") {
            packageCont = (
                <>
                    <PackageSlider />
                </>
            );
        } else if (user === "Company") {
            packageCont = (
                <>
                    <PackageList />
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
                    Ptitle="Send Package"
                    Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
                />
                {packageCont}
                <FooterTwo FooterData={FooterData} />
            </>
        );
    }
}
