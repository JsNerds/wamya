import React from 'react';
import CustomNavbar from '../componentsFront/CustomNavbar';
import CrmBanner from '../componentsFront/Banner/CrmBanner';
import StartupFeatures from '../componentsFront/Features/StartupFeatures';
import Stservice from '../componentsFront/Service/Sservice/StartupService';
import Testimonial from '../componentsFront/Testimonial/Testimonial';
import Cprogress from '../componentsFront/CircleProgressbar';
import PrototypeFooter from '../componentsFront/Footer/PrototypeFooter';
import FooterData from '../componentsFront/Footer/FooterData';

const HomeCRM = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
            <CrmBanner/>
            <StartupFeatures/>
            <Stservice/>
            <Cprogress/>
            <Testimonial tClass="testimonial_area_four sec_pad" FooterData={FooterData}/>
            <PrototypeFooter rclass={'payment_footer_area_two'} FooterData={FooterData}/>
        </div>
    )
}
export default HomeCRM;