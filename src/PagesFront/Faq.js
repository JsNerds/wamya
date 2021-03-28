import React from 'react';
import CustomNavbar from '../componentsFront/CustomNavbar';
import Breadcrumb from '../componentsFront/Breadcrumb';
import FaqSection from '../componentsFront/FaqSection';
import FooterTwo from '../componentsFront/Footer/FooterTwo';
import FooterData from '../componentsFront/Footer/FooterData';

const Faq = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="FAQ" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <FaqSection/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Faq;