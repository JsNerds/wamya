import React from 'react';
import CustomNavbar from '../../componentsFront/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import HRService from '../../componentsFront/Service/HRService';
import PrototypeService from '../../componentsFront/Service/Sservice/PrototypeService';
import Partner from '../../componentsFront/Partner';
import ServiceSubscribe from '../../componentsFront/ServiceSubscribe';
import FooterTwo from '../../componentsFront/Footer/FooterTwo';
import ServiceData from '../../componentsFront/Service/ServiceData';
import FooterData from '../../componentsFront/Footer/FooterData';
import CustomerInterfaceBody from "../../components/front/CustomerInterfaceBody";

const CustomerInterface = () => {

    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Customer Interface" Pdescription=""/>
            <CustomerInterfaceBody/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default CustomerInterface;