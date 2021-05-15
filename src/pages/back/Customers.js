import React, {Fragment, useEffect, useState} from 'react';

import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
import CustomersTable from "../../components/back/CustomersTable";
import CustomerStat from "../../components/back/CustomerStat";
import axios from "axios";


export default function Customers() {
    const [customers,setCustomers] = useState([]);

    const getCustomers= async () => {
        try {
            const Customers = await axios.get(
                "http://localhost:3000/customers/"
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
                titleHeading="Customers"
                titleDescription="Wonderful animated charts built with ApexCharts components."
            />
            <ExampleWrapperSeamless sectionHeading="Customers Table">
                <CustomersTable customers={customers}/>
                <CustomerStat customers={customers}/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
