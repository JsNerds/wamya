import React from 'react';
import CustomNavbar from '../componentsFront/CustomNavbar';
import AppBanner from '../componentsFront/Banner/AppBanner';
import AppFeaturesTwo from '../componentsFront/Features/AppFeaturesTwo';
import AppFeatures from '../componentsFront/Features/AppFeatures';
import AppTestimonial from '../componentsFront/Testimonial/AppTestimonial';
import AppWork from '../componentsFront/Service/AppWork';
import ScreenshowCase from '../componentsFront/ScreenshowCase';
import AppGetstarted from '../componentsFront/AppGetstarted';
import AppTeam from '../componentsFront/Team/AppTeam';
import FooterTwo from '../componentsFront/Footer/FooterTwo';
import ServiceData from '../componentsFront/Service/ServiceData';
import FooterData from '../componentsFront/Footer/FooterData';

const HomeAppShowcase = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu"  hbtnClass="er_btn"/>
            <AppBanner/>
            <AppFeaturesTwo/>
            <AppFeatures/>
            <AppWork ServiceData={ServiceData}/>
            <AppTestimonial/>
            <ScreenshowCase/>
            <AppGetstarted/>
            <AppTeam/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default HomeAppShowcase;