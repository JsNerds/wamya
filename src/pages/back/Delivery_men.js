import React, { Fragment } from "react";

import { ExampleWrapperSeamless, PageTitle } from "../../layout-componentsBack";
import Deliverymendata from "../../components/back/Deliveryman/Deliverymen_view";
import CustomerStat from "../../components/back/CustomerStat";
import { useServerApi } from "../../hooks/useServerApi";
export default function Delivery_men() {
  const [dms] = useServerApi("deliveryman/getdev");
  return (
    <Fragment>
      <PageTitle
        titleHeading="Customers"
        titleDescription="Wonderful animated charts built with ApexCharts components."
      />
      <ExampleWrapperSeamless sectionHeading="Customers Table">
        <Deliverymendata dms={dms} />
        <CustomerStat dms={dms} />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
