import React from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../components/front/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../components/front/FooterData';
import EntrepriserSignUpFrom from "../../components/front/EntrepriserSignUpForm";

const SignUpEntreprise = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sign Up" Pdescription="Create your Account and become a partner"/>
            <EntrepriserSignUpFrom/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default SignUpEntreprise;