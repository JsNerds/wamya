import React from 'react';
import CustomNavbar from '../componentsFront/CustomNavbar';
import HostingBanner from '../componentsFront/Banner/HostingBanner';
import DomainSearch from '../componentsFront/DomainSearch';
import HostingService from '../componentsFront/Service/HostingService';
import HostingFeatures from '../componentsFront/Service/HostingFeatures';
import HostingFeaturesTwo from '../componentsFront/Service/HostingFeaturesTwo';
import HostingAction from '../componentsFront/HostingAction';
import HostingPlan from '../componentsFront/Features/HostingPlan';
import HostingMap from '../componentsFront/HostingMap';
import HostingBlog from '../componentsFront/Blog/HostingBlog';
import HostingActionTwo from '../componentsFront/HostingActionTwo';
import FooterErp from '../componentsFront/Footer/FooterErp';
import FooterData from '../componentsFront/Footer/FooterData';

const HomeHosting =()=> {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu" slogo="sticky_logo"/>
            <HostingBanner/>
            <DomainSearch/>
            <HostingService/>
            <HostingFeatures/>
            <HostingFeaturesTwo/>
            <HostingAction aClass="h_action_area" aimage="action_img.png" colClass="col-lg-6" colClassTwo="col-lg-6" Atitle="Managed wordpress Hosting on all plans" Atext="Spiffing pukka show off show off pick your nose and blow off easy peasy buggered hotpot Harry, pardon me blatant.!"/>
            <HostingPlan/>
            <HostingMap/>
            <HostingBlog/>
            <HostingActionTwo/>
            <FooterErp FooterData={FooterData}/>
        </div>
    )
}
export default HomeHosting;