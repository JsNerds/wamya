import React from 'react';
import CustomNavbar from '../components/front/CustomNavbar';
import PaymentBanner from '../componentsFront/Banner/PaymentBanner';
import PaymentFeatures from '../componentsFront/Features/PaymentFeatures';
import PaymentService from '../componentsFront/Service/PaymentService';
import ServiceData from '../componentsFront/Service/ServiceData';
import Paymentprocess from '../componentsFront/Paymentprocess';
import PaymentTestimonial from '../componentsFront/Testimonial/PaymentTestimonial';
import FooterThree from '../components/front/FooterThree';
import FooterData from '../componentsFront/Footer/FooterData';

const Paymentprocessing = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu"/>
            <PaymentBanner/>
            <PaymentFeatures/>
            <PaymentService ServiceData={ServiceData}/>
            <Paymentprocess/>
            <PaymentTestimonial/>
            <FooterThree FooterData={FooterData}/>
        </div>
    )
}
export default Paymentprocessing;