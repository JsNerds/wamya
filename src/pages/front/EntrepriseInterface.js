import React from 'react';
import CustomNavbar from '../../componentsFront/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import HRService from '../../componentsFront/Service/HRService';
import PrototypeService from '../../componentsFront/Service/Sservice/PrototypeService';
import Partner from '../../componentsFront/Partner';
import ServiceSubscribe from '../../componentsFront/ServiceSubscribe';
import FooterTwo from '../../componentsFront/Footer/FooterTwo';
import ServiceData from '../../componentsFront/Service/ServiceData';
import FooterData from '../../componentsFront/Footer/FooterData';

const EntrepriseInterface = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Our services" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <HRService ServiceData={ServiceData}/>
            <PrototypeService/>
            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>
            <ServiceSubscribe sClass="s_form_info_two"/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default EntrepriseInterface;