import React, { Component } from "react";
import CustomNavbar from "../../components/front/CustomNavbar";
import Breadcrumb from "../../components/front/Breadcrumb";
import FooterTwo from "../../components/front/FooterTwo";
import FooterData from "../../components/front/FooterData";
import Sign_dm from "../../components/front/Dm_comp/Sign_dm";
import ScrollToTop from "../../componentsFront/ScrollToTop";
import "@coreui/icons/css/all.min.css";
import "./scss/style.css";
import Form from "../../components/front/form_deliveryman/Form";
export default class P_deliveryform extends Component {
  result = (values) => {
    console.log("result is", values);
  };
  render() {
    return (
      <div className="body_wrapper">
        <ScrollToTop />
        <CustomNavbar
          slogo="sticky_logo"
          mClass="menu_four"
          nClass="w_menu ml-auto mr-auto"
        />
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName="breadcrumb/ban.jpg"
          Ptitle="Sign Up"
          Pdescription="Follow the steps to complete the registration"
        />
        <Sign_dm />
        <FooterTwo FooterData={FooterData} />
      </div>
    );
  }
}
