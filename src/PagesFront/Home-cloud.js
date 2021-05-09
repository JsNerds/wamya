import React from 'react';
import CustomNavbar from '../components/front/CustomNavbar';
import CloudBanner from '../componentsFront/Banner/CloudBanner';
import CloudService from '../componentsFront/Service/CloudService';
import CloudServiceTab from '../componentsFront/Service/Sservice/CloudServiceTab';
import CloudFeatures from '../componentsFront/Features/CloudFeatures';
import CloudFeaturesTwo from '../componentsFront/Features/CloudFeaturesTwo';
import DeveloperTab from '../componentsFront/DeveloperTab';
import Partner from '../componentsFront/Partner';
import ServiceSubscribe from '../componentsFront/ServiceSubscribe';
import FooterTwo from '../components/front/FooterTwo';
import FooterData from '../componentsFront/Footer/FooterData';

const HomeCloud = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
            <CloudBanner/>
            <CloudService/>
            <CloudFeatures/>
            <CloudServiceTab/>
            <CloudFeaturesTwo/>
            <DeveloperTab/>
            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>
            <ServiceSubscribe/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default HomeCloud;