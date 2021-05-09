import React, {useEffect} from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
import PricingComponent from "../../components/front/PricingComponent";
import {useParams} from "react-router";

const Pricing = () => {
    const {id} = useParams();
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Pricing" Pdescription=""/>
            <PricingComponent id={id} />
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Pricing;