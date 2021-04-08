import React from "react";
import CustomNavbar from "../../componentsFront/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import Deliveryman_body from "../../components/front/Deliveryman_body";

const CustomerInterface = () => {
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
        Ptitle="Deliveryman Interface"
        Pdescription=""
      />
      <Deliveryman_body />
      <FooterTwo fClass="pt_150" FooterData={FooterData} />
    </div>
  );
};
export default CustomerInterface;
