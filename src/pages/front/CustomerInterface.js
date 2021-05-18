import React, {useEffect, useState} from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../components/front/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../components/front/FooterData';
import CustomerInterfaceBody from "../../components/front/CustomerInterfaceBody";
import SignInFormWamya from "../../components/front/SignInFormWamya";
import axios from "axios";


const CustomerInterface = () => {
    const [customer,setCustomer] = useState();
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

    const getCustomer= async () => {
        try {
            const Customer = await axios.get(
                "https://wamya-backend.herokuapp.com/customers/"+renderId()
            ).then(function(doc){
                if(JSON.stringify(doc.data) === JSON.stringify(customer))
                {
                    console.log("same")
                }
                else{
                    setCustomer(doc.data)
                    console.log(doc.data);
                    console.log(customer);
                }
            });
            // set State
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getCustomer();
        const interval = setInterval(() => {
            getCustomer();
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Customer Interface" Pdescription=""/>
            {customer ?
                (   <>
                        <CustomerInterfaceBody customer={customer}/>
                    </>
                ) : (<SignInFormWamya/>)}
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default CustomerInterface;