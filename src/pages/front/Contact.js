import React from 'react';
import CustomNavbar from "../../components/front/CustomNavbar";
import FooterTwo from "../../components/front/FooterTwo";
import FooterData from "../../components/front/FooterData";
import Contacts from "../../components/front/Contacts";
import Breadcrumb from "../../components/front/Breadcrumb";


const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Contact Us" Pdescription=""/>
            <Contacts/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default About;