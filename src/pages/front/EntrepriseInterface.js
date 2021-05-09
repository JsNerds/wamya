import React from "react";
import CustomNavbar from "../../components/front/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import EntrepriseInterfaceBody from "../../components/front/EntrepriseInterfaceBody";
import { useServerApi } from "../../hooks/useServerApi";
import SignInFormWamya from "../../components/front/SignInFormWamya";

const EntrepriseInterface = () => {


    const renderId = () => {
        let id = 0
        if(localStorage.getItem('id') != null)
        {
            id= localStorage.getItem('id');
        }
        else {
            id="60949f6ba158b41be4b96bf0";
        }
        return id;
    }


    const [company, err, reload] = useServerApi("entreprises/"+renderId());
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
          <SignInFormWamya/>
      )}
      <FooterTwo fClass="pt_150" FooterData={FooterData} />
    </div>
  );
};
export default EntrepriseInterface;
