import React from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
import SignInFormWamya from "../../components/front/SignInFormWamya";

const SignInWamya = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sign In" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <SignInFormWamya/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default SignInWamya;