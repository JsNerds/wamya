import React from 'react';
import CustomNavbar from '../components/front/CustomNavbar';
import Breadcrumb from '../componentsFront/Breadcrumb';
import Sservice from '../componentsFront/Service/Sservice/Sservice';
import AgencyAbout from '../componentsFront/About/AgencyAbout';
import Partner from '../componentsFront/Partner';
import FooterTwo from '../components/front/FooterTwo';
import ServiceData from '../componentsFront/Service/ServiceData';
import FooterData from '../componentsFront/Footer/FooterData';

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Us" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <Sservice/>
            <AgencyAbout ServiceData={ServiceData}/>
            <Partner pClass="partner_logo_area_five bg_color"/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default About;