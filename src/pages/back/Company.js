import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSeamless } from '../../layout-componentsBack';
import CustomersDetails from "../../components/back/CustomersDetails";
import {useServerApi} from "../../hooks/useServerApi";
import {useParams} from "react-router";
import PaymentsTable from "../../components/back/PaymentsTable";
import CompanyDetails from "../../components/back/CompanyDetails";
export default function Company() {

    const {id} = useParams();
    const [company, err, reload] = useServerApi("entreprises/"+id);
    const toRender = company;
  return (
    <Fragment>
      <PageTitle
        titleHeading="Company's Details"
        titleDescription="the company's details : his payments and informations"
      />

        <ExampleWrapperSeamless sectionHeading="Deliveries (Packages)  and sales analytics">
          {toRender ?
              (   <>
                      <CompanyDetails company={toRender}/>

                      <PaymentsTable payments={company.payments}/>
                  </>
              ) : (<p>Product not found</p>)}

              </ExampleWrapperSeamless>
    </Fragment>
  );
}
