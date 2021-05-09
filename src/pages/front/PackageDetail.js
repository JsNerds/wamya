import React, { Component } from 'react'
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
import PackageDetailItem from '../../components/front/PackageDetailItem'


export default class PackageUpdate extends Component {  
    render() {   
        return (
            <div>
                <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
                <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Update your Package" Pdescription="here your can update the package that you are sending"/>
            <PackageDetailItem />
            {this.a}
            <FooterTwo FooterData={FooterData}/>
            </div>
        )
    }
}
