import React from 'react';
import CustomNavbar from '../components/front/CustomNavbar';
import TrackingBanner from '../componentsFront/Banner/TrackingBanner';
import TrackingActivity from '../componentsFront/TrackingActivity';
import TrackingProduct from '../componentsFront/Features/TrackingProduct';
import TrackingPrice from '../componentsFront/TrackingPrice';
import TrackingGetstarted from '../componentsFront/TrackingGetstarted';
import FooterSecurity from "../componentsFront/Footer/FooterSecurity";
import FooterData from '../components/front/FooterData';

const homesupport = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>
            <TrackingBanner/> 
            <TrackingActivity/>
            <TrackingProduct/>
            <TrackingPrice/>
            <TrackingGetstarted/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
export default homesupport;