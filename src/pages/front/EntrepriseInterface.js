import React from "react";
import CustomNavbar from "../../componentsFront/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import EntrepriseInterfaceBody from "../../components/front/EntrepriseInterfaceBody";
import { useServerApi } from "../../hooks/useServerApi";

const EntrepriseInterface = () => {
  const [company, err, reload] = useServerApi(
    "entreprises/607ed54b49517f043091b18d"
  );
  const toRender = company;
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
      {toRender ? (
        <>
          <EntrepriseInterfaceBody company={toRender} />
        </>
      ) : (
        <p>LOGIN</p>
      )}
      <FooterTwo fClass="pt_150" FooterData={FooterData} />
    </div>
  );
};
export default EntrepriseInterface;
