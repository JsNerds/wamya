import React from 'react';
import CustomNavbar from '../../componentsFront/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import HRService from '../../componentsFront/Service/HRService';
import FooterTwo from '../../componentsFront/Footer/FooterTwo';
import ServiceData from '../../componentsFront/Service/ServiceData';
import FooterData from '../../componentsFront/Footer/FooterData';
import EntrepriseStats from "../../components/front/EntrepriseStats";
import EntrepriseInterfaceBody from "../../components/front/EntrepriseInterfaceBody";

const EntrepriseInterface = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Entreprise Interface" Pdescription=""/>
            {/*<HRService ServiceData={ServiceData}/>*/}
            <p></p>
            <EntrepriseInterfaceBody/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default EntrepriseInterface;