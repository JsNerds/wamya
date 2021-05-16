import React, { Component } from 'react'
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../components/front/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../components/front/FooterData';
import PackagesForm from '../../components/front/PackageForm/PackagesForm';
import PackageUpdateForm from '../../components/front/PackageUpdateForm';  


export default class PackageUpdate extends Component {
    render() {
        return (
            <div>
                <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
                <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Update your Package" Pdescription="here your can update the package that you are sending"/>
            <PackageUpdateForm />
            <FooterTwo FooterData={FooterData}/>
            </div>
        )
    }
}
