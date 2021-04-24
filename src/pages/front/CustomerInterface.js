import React, {useEffect} from 'react';
import CustomNavbar from '../../componentsFront/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import FooterTwo from '../../componentsFront/Footer/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
import CustomerInterfaceBody from "../../components/front/CustomerInterfaceBody";
import {useServerApi} from "../../hooks/useServerApi";
import SignInFormWamya from "../../components/front/SignInFormWamya";


const CustomerInterface = () => {
    const renderId = () => {
        let id = 0
        if(localStorage.getItem('id') != null)
        {
            id= localStorage.getItem('id');
        }
        else {
            id="60949f6ba158b41be4b96bf0";
        }
        return id;
    }

    const [customer, err, reload] = useServerApi("customers/"+renderId());
    const toRender = customer;
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Customer Interface" Pdescription=""/>
            {toRender ?
                (   <>
                        <CustomerInterfaceBody customer={toRender}/>
                    </>
                ) : (<SignInFormWamya/>)}
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default CustomerInterface;