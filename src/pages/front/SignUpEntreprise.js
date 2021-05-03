import React from 'react';
import CustomNavbar from '../../componentsFront/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import FooterTwo from '../../componentsFront/Footer/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
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