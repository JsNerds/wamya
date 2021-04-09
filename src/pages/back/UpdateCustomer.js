import React, {Fragment} from 'react';
import { PageTitle } from '../../layout-componentsBack';
import { ExampleWrapperSeamless } from '../../layout-componentsBack';
import UpdateCustomerForm from "../../components/back/UpdateCustomerForm";
import {useParams} from "react-router";



export default function UpdateCustomer() {
    const { id } = useParams();

    return (
        <Fragment>
            <PageTitle
                titleHeading="Update Customer"
                titleDescription="Wide selection of forms controls, using a standardised code base, specifically for React."
            />
            <ExampleWrapperSeamless sectionHeading="">
                <UpdateCustomerForm id={id}/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
