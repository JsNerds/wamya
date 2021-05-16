import React from 'react';
import CustomNavbar from '../components/front/CustomNavbar';
import HRBanner from '../componentsFront/Banner/HRBanner';
import HRService from '../components/front/HRService';
import ServiceData from '../componentsFront/Service/ServiceData';
import Video from '../componentsFront/Video';
import MarketingGetstarted from '../componentsFront/MarketingGetstarted';
import PrototypeFooter from '../componentsFront/Footer/PrototypeFooter';
import FooterData from '../components/front/FooterData';

const HRManagement = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" nClass="w_menu"/>
            <HRBanner/>
            <HRService ServiceData={ServiceData}/>
            <Video/>
            <MarketingGetstarted/>
            <PrototypeFooter rclass={'payment_footer_area_two'} FooterData={FooterData}/>
        </div>
    )
}
export default HRManagement;