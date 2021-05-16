import React from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../components/front/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../components/front/FooterData';
import PaymentForm from "../../components/front/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const Payment = () => {
    const stripePromise = loadStripe('pk_test_51IfWBLCVTWqP53093lS3P8XJ4gppAmuKTgt30ePPHobWOjLEJKTNK3IaQnC53IxebPdWVJ6zsHWU1DC2yz4geLym00O9SvcieR');

    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Payment" Pdescription=""/>
            <Elements stripe={stripePromise}>
            <PaymentForm/>
            </Elements>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Payment;