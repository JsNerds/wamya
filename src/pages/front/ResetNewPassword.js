import React from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../components/front/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../components/front/FooterData';
import ResetNewPasswordForm from "../../components/front/ResetNewPasswordForm";

const ResetNewPassword = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Reset Your Password" Pdescription="TO EDIT"/>

            <ResetNewPasswordForm/>

            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default ResetNewPassword;