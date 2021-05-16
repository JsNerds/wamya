import React from "react";
import CustomNavbar from "../components/front/CustomNavbar";
import Breadcrumb from "../components/front/Breadcrumb";
import Sservice from "../componentsFront/Service/Sservice/Sservice";
import AgencyAbout from "../componentsFront/About/AgencyAbout";
import Partner from "../componentsFront/Partner";
import FooterTwo from "../components/front/FooterTwo";
import ServiceData from "../componentsFront/Service/ServiceData";
import FooterData from "../components/front/FooterData";

const About = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="About Us"
        Pdescription="As a way to connect the world through logistics and transportation services we offer solutions that assist start-ups and established businesses in supply chain management, technical support, and more.  "
      />
      <AgencyAbout ServiceData={ServiceData} />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default About;
