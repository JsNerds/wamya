import React, { Component } from 'react'
import CustomNavbar from '../../componentsFront/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import SignUpForm from '../../components/front/SignUpForm';
import FooterTwo from '../../componentsFront/Footer/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
import PackagesForm from '../../components/front/PackagesForm'
import {BrowserRouter as Router} from "react-router-dom";

export default class Packages extends Component {
    render() {
        return (
            <div>
                <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
                <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Send Package" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <PackagesForm />
            <FooterTwo FooterData={FooterData}/>
            </div>
        )
    }
}
