import React from 'react';
import CustomNavbar from '../components/front/CustomNavbar';
import SupportBanner from '../componentsFront/Banner/SupportBanner';
import BannerData from '../componentsFront/Banner/BannerData';
import SupportPartnerlogo from '../componentsFront/SupportPartnerlogo';
import SupportItem from '../componentsFront/Service/SupportItem';
import Designtab from '../componentsFront/Features/Designtab';
import SupportIntegration from '../componentsFront/SupportIntegration';
import Price from '../componentsFront/Price';
import MarketingTestimonial from '../componentsFront/Testimonial/MarketingTestimonial';
import SupportSubscribe from '../componentsFront/SupportSubscribe';
import FooterSecurity from "../componentsFront/Footer/FooterSecurity";
import FooterData from '../componentsFront/Footer/FooterData';

const homesupport = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" hbtnClass="d-none"/>
            <SupportBanner/> 
            <SupportPartnerlogo BannerData={BannerData}/>
            <SupportItem/>
            <Designtab/>
            <SupportIntegration/>
            <Price/>
            <MarketingTestimonial BannerData={BannerData}/>
            <SupportSubscribe/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
export default homesupport;