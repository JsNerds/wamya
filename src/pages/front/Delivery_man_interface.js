import React, { useEffect, useState } from "react";
import CustomNavbar from "../../componentsFront/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import Deliveryman_body from "../../components/front/Deliveryman_body";
import { useServerApi } from "../../hooks/useServerApi";
import axios from "axios";

const CustomerInterface = () => {
  const [dm, err, reload] = useServerApi(
    "deliveryman/getdev/" + localStorage.getItem("id")
  );
  const [deli, setdeli] = useState([]);
  const [dlv, err1, reload1] = useServerApi(
    "delivery/delivsfordv/" + localStorage.getItem("id")
  );
  const getdriver = async () => {
    try {
      const userPosts = await axios.get(
        "http://localhost:3000/deliveryman/getdev/" + localStorage.getItem("id")
      );
      setdeli(userPosts.data); // set State
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getdriver();
    const interval = setInterval(() => {
      getdriver();
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const toRender = deli;
  const toRender1 = dlv;

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

      {toRender ? (
        <>
          <Deliveryman_body dm={toRender} deliveries={toRender1} />
        </>
      ) : (
        console.log("nopeeee no render")
      )}

      <FooterTwo fClass="pt_150" FooterData={FooterData} />
    </div>
  );
};
export default CustomerInterface;
