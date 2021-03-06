import React from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../components/front/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../components/front/FooterData';
import SignInFormWamya from "../../components/front/SignInFormWamya";

const SignInWamya = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sign In" Pdescription="Log in now and take advantage of our service via your interface"/>
            <SignInFormWamya/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default SignInWamya;