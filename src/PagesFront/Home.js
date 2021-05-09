import React from 'react';
import CustomNavbar from '../components/front/CustomNavbar';
import DesignBanner from '../componentsFront/Banner/DesignBanner';
import Service from '../componentsFront/Service/Service';
import Subscribe from '../componentsFront/Subscribe';
import Footer from '../componentsFront/Footer/Footer';
import FooterData from '../componentsFront/Footer/FooterData';

export const Home = () => (
    <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
        <DesignBanner/>
        <Service/>
        <Subscribe FooterData={FooterData}/>
        <Footer FooterData={FooterData}/>
    </div>
)