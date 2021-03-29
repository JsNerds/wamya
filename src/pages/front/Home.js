import React from 'react';
import CustomNavbar from '../../componentsFront/CustomNavbar';
import PaymentBanner from '../../componentsFront/Banner/PaymentBanner';
import PaymentFeatures from '../../componentsFront/Features/PaymentFeatures';
import PaymentService from '../../componentsFront/Service/PaymentService';
import ServiceData from '../../componentsFront/Service/ServiceData';
import Paymentprocess from '../../componentsFront/Paymentprocess';
import PaymentTestimonial from '../../componentsFront/Testimonial/PaymentTestimonial';
import FooterThree from '../../componentsFront/Footer/FooterThree';
import FooterData from '../../componentsFront/Footer/FooterData';
import HomeBanner from "../../components/front/HomeBanner";
import CustomEntrepHome from "../../components/front/CustomEntrepHome";

const Home = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu"/>
            <HomeBanner/>
            <CustomEntrepHome/>
            <FooterThree FooterData={FooterData}/>
        </div>
    )
}
export default Home;