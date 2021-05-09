import React from 'react';
import CustomNavbar from '../components/front/CustomNavbar';
import Breadcrumb from '../componentsFront/Breadcrumb';
import Portfoliosingle from '../componentsFront/Portfolios/Portfoliosingle';
import FooterTwo from '../components/front/FooterTwo';
import FooterData from '../componentsFront/Footer/FooterData';

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Portfolio Details" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <Portfoliosingle/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default About;