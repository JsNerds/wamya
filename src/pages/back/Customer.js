import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import { ExampleWrapperSeamless } from '../../layout-componentsBack';
import CustomersDetails from "../../components/back/CustomersDetails";
import {useServerApi} from "../../hooks/useServerApi";
import {useParams} from "react-router";
import PaymentsTable from "../../components/back/PaymentsTable";
export default function Customer() {

    const {id} = useParams();
    const [customer, err, reload] = useServerApi("customers/"+id);
    const toRender = customer;
  return (
    <Fragment>
      <PageTitle
        titleHeading="Customer Details"
        titleDescription="the cusromer's details : his payments and informations"
      />

        <ExampleWrapperSeamless sectionHeading="Customer's informations">
          {toRender ?
              (   <>

                  <CustomersDetails customer={toRender}/>

                      <PaymentsTable payments={customer.payments}/>
                  </>
              ) : (<p>Product not found</p>)}

              </ExampleWrapperSeamless>
    </Fragment>
  );
}
