import React, { useEffect, useState } from "react";
import CustomNavbar from "../../components/front/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../components/front/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import EntrepriseInterfaceBody from "../../components/front/EntrepriseInterfaceBody";
import SignInFormWamya from "../../components/front/SignInFormWamya";
import axios from "axios";

const EntrepriseInterface = () => {
  const [company, setCompany] = useState();

  const renderId = () => {
    let id = 0;
    if (localStorage.getItem("id") != null) {
      id = localStorage.getItem("id");
    } else {
      id = "60949f6ba158b41be4b96bf0";
    }
    return id;
  };
  const getCompany = async () => {
    try {
      const Customer = await axios
        .get("http://localhost:3000/entreprises/" + renderId())
        .then(function(doc) {
          if (JSON.stringify(doc.data) === JSON.stringify(company)) {
            console.log("same");
          } else {
            setCompany(doc.data);
            console.log(doc.data);
            console.log(company);
          }
        });
      // set State
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCompany();
    const interval = setInterval(() => {
      getCompany();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
        Ptitle="Entreprise Interface"
        Pdescription=""
      />
      {/*<HRService ServiceData={ServiceData}/>*/}
      <p></p>
      {company ? (
        <>
          <EntrepriseInterfaceBody company={company} />
        </>
      ) : (
        <SignInFormWamya />
      )}
      <FooterTwo fClass="pt_150" FooterData={FooterData} />
    </div>
  );
};
export default EntrepriseInterface;
