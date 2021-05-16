import React from 'react';
import OnepageMenu from '../componentsFront/OnepageMenu';
import AppBanner from '../componentsFront/Banner/AppBanner';
import AppFeaturesTwo from '../componentsFront/Features/AppFeaturesTwo';
import AppFeatures from '../componentsFront/Features/AppFeatures';
import AppTestimonial from '../componentsFront/Testimonial/AppTestimonial';
import AppWork from '../componentsFront/Service/AppWork';
import ScreenshowCase from '../componentsFront/ScreenshowCase';
import AppGetstarted from '../componentsFront/AppGetstarted';
import AppTeam from '../componentsFront/Team/AppTeam';
import FooterTwo from '../components/front/FooterTwo';
import ServiceData from '../componentsFront/Service/ServiceData';
import FooterData from '../components/front/FooterData';

const Landing = () => {
    return(
        <div className="body_wrapper">
            <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
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
export default Landing;