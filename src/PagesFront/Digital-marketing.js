import React from 'react';
import CustomNavbar from '../componentsFront/CustomNavbar';
import AgencyBanner from '../componentsFront/Banner/AgencyBanner';
import BannerData from '../componentsFront/Banner/BannerData';
import MarketingService from '../componentsFront/Service/MarketingService';
import ServiceData from '../componentsFront/Service/ServiceData';
import AgencyAbout from '../componentsFront/About/AgencyAbout';
import Features from '../componentsFront/Features/Features';
import MarketingTestimonial from '../componentsFront/Testimonial/MarketingTestimonial';
import AgencyAction from '../componentsFront/AgencyAction';
import FooterTwo from '../componentsFront/Footer/FooterTwo';
import FooterData from '../componentsFront/Footer/FooterData';


const DigitalMarketing = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <AgencyBanner BannerData={BannerData}/>
            <MarketingService ServiceData={ServiceData}/>
            <AgencyAbout ServiceData={ServiceData}/>
            <Features/>
            <MarketingTestimonial BannerData={BannerData}/>
            <AgencyAction/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default DigitalMarketing;