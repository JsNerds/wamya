import React from 'react';
import CustomNavbar from '../componentsFront/CustomNavbar';
import HomeERP from '../componentsFront/Banner/ErpBanner';
import ErpService from '../componentsFront/Service/ErpService';
import ErpAction from '../componentsFront/ErpAction';
import ErpFeatures from '../componentsFront/Features/ErpFeatures';
import Erpanalytics from '../componentsFront/Erpanalytics';
import ErpCustomerlogo from '../componentsFront/ErpCustomerlogo';
import ErpActionTwo from '../componentsFront/ErpActionTwo';
import ErpTestimonial from '../componentsFront/Testimonial/ErpTestimonial';
import FooterErp from '../componentsFront/Footer/FooterErp';
import FooterData from '../componentsFront/Footer/FooterData';

const Homeerp = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="erp_menu" hbtnClass="er_btn" nClass="mr-auto"/>
            <HomeERP/> 
            <ErpService/>
            <ErpAction/>
            <ErpFeatures/>
            <Erpanalytics/>
            <ErpCustomerlogo/>
            <ErpTestimonial/>
            <ErpActionTwo/>
            <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>
        </div>
    )
}
export default Homeerp;