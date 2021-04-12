import React, {Fragment} from 'react';
import { PageTitle } from '../../layout-componentsBack';
import { ExampleWrapperSeamless } from '../../layout-componentsBack';
import {useParams} from "react-router";
import UpdateCompanyForm from "../../components/back/UpdateCompanyForm";



export default function UpdateCompany() {
    const { id } = useParams();

    return (
        <Fragment>
            <PageTitle
                titleHeading="Update Customer"
                titleDescription="Wide selection of forms controls, using a standardised code base, specifically for React."
            />
            <ExampleWrapperSeamless sectionHeading="">
                <UpdateCompanyForm id={id}/>
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
