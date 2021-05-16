import React from 'react';
import CustomNavbar from '../components/front/CustomNavbar';
import SoftwareDarkBanner from '../componentsFront/Banner/SoftwareDarkBanner';
import BannerData from '../componentsFront/Banner/BannerData';
import DarkSoftwareService from '../componentsFront/Service/DarkSoftwareService';
import SoftwareDarkAaction from '../componentsFront/SoftwareDarkAction';
import SoftwareFeatures from '../componentsFront/Features/SoftwareFeatures';
import SecurityFact from '../componentsFront/SecurityFact';
import SecurityTestimonial from '../componentsFront/Testimonial/SecurityTestimonial';
import SecurityPartnerLogo from '../componentsFront/SecurityPartnerLogo';
import PrototypeFooter from '../componentsFront/Footer/PrototypeFooter';
import FooterData from '../components/front/FooterData';

const HomesoftwareDark = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_six" hbtnClass="cus_dark" cClass="custom_container p0" slogo="sticky_logo"/>
            <SoftwareDarkBanner/> 
            <DarkSoftwareService/>
            <SoftwareDarkAaction/>
            <SoftwareFeatures/>
            <SecurityFact image="trust_img2.png"/>
           
            <SecurityTestimonial/>
            <SecurityPartnerLogo sClass="partner_logo_area_three dk_bg_two" BannerData={BannerData}/>
            <PrototypeFooter rclass={'footer_area_six'} FooterData={FooterData}/>
        </div>
    )
}
export default HomesoftwareDark;