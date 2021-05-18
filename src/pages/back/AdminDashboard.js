import React, {Fragment, useEffect, useState} from 'react';
import PackageDashBoard from '../../components/back/PackageDashBoard';

import { PageTitle } from '../../layout-componentsBack';
import CustomerStat from "../../components/back/CustomerStat";
import axios from "axios";
export default function AdminDashborad() {

    const [customers,setCustomers] = useState([]);


    const getCustomers= async () => {
        try {
            const Customers = await axios.get(
                "https://wamya-backend.herokuapp.com/customers/"
            ).then(function(doc){
                if(JSON.stringify(doc.data) === JSON.stringify(customers))
                {
                    console.log("same")
                }
                else{
                    setCustomers(doc.data)
                    console.log(doc.data);
                    console.log(customers);
                }
            });
            // set State
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getCustomers();
        const interval = setInterval(() => {
            getCustomers();
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Fragment>
            <PageTitle
                titleHeading="Wamya Dashboard"
                titleDescription="Admin Template"
            />
            <PackageDashBoard/>
            <CustomerStat customers={customers}/>
        </Fragment>
    );
}
