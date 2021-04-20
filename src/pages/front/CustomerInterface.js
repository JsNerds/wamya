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
import {useServerApi} from "../../hooks/useServerApi";
import CustomersDetails from "../../components/back/CustomersDetails";
import PaymentsTable from "../../components/back/PaymentsTable";
import {ExampleWrapperSeamless} from "../../layout-componentsBack";

const CustomerInterface = () => {
    const [customer, err, reload] = useServerApi("customers/607f469b86187226c038d247");
    const toRender = customer;
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Customer Interface" Pdescription=""/>
            {toRender ?
                (   <>
                        <CustomerInterfaceBody customer={toRender}/>

                    </>
                ) : (<p>LOGIN</p>)}
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default CustomerInterface;