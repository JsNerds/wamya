import React, { Component } from 'react'
import PackageSlider from '../../components/front/PackageSlider'
import CustomNavbar from '../../componentsFront/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import FooterTwo from '../../componentsFront/Footer/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
import Sectitle from '../../componentsFront/Title/Sectitle'

export default class MyPackages extends Component {
    render() {
        let 
        return (
            <>
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
                <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Send Package" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <section className="prototype_service_area_two">
                <div className="container custom_container">
                    <Sectitle Title="My Packages " TitleP="WShow off show off pick your nose and blow off Elizabeth grub haggle dropped a clanger cracking.!"
                    tClass="t_color3" sClass="sec_title text-center mb_70"/>
                    <PackageSlider />
                </div>
                <FooterTwo FooterData={FooterData}/>
            </section>
           </>
        )
    }
}
