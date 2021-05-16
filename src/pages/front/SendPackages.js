import React, { Component } from 'react'
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../components/front/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../components/front/FooterData';
import PackagesForm from '../../components/front/PackageForm/PackagesForm'


export default class SendPackages extends Component {
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
