import React from 'react';
import CustomNavbar from '../components/front/CustomNavbar';
import SecurityBanner from "../componentsFront/Banner/SecurityBanner";
import SecurityFeatures from "../componentsFront/Features/SecurityFeatures";
import SecurityPowerFeatures from "../componentsFront/Features/SecurityPowerfulFeatures";
import SecurityService from "../componentsFront/Service/SecurityService";
import SequrityPrice from "../componentsFront/Features/SecurityPrice";
import Analyticeslist from "../componentsFront/Analyticeslist";
import SecurityCustomerLogo from "../componentsFront/SecurityCustomersLogo";
import SecurityIntegration from "../componentsFront/SecurityIntegration";
import SecurityAction from "../componentsFront/SecurityAction";
import FooterSecurity from "../componentsFront/Footer/FooterSecurity";
import FooterData from '../componentsFront/Footer/FooterData';

const HomeSecurity =()=> {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_eight" nClass="w_menu" slogo="sticky_logo" hbtnClass="security_btn"/>
            <SecurityBanner/>
            <SecurityFeatures/>
            <SecurityPowerFeatures/>
            <SecurityService/>
            <SequrityPrice/>
            <Analyticeslist/>
            <SecurityCustomerLogo/>
            <SecurityIntegration/>
            <SecurityAction/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
 
export default HomeSecurity;