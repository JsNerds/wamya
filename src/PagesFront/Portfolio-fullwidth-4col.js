import React from 'react';
import CustomNavbar from '../componentsFront/CustomNavbar';
import Breadcrumb from '../componentsFront/Breadcrumb';
import Portfoliofull from '../componentsFront/Portfolios/Portfoliofull4col';
import FooterTwo from '../componentsFront/Footer/FooterTwo';
import FooterData from '../componentsFront/Footer/FooterData';

const Portfoliofull4col = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Portfolio fullwidth 4 column" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <Portfoliofull/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Portfoliofull4col;