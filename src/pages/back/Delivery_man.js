import React, { Fragment } from "react";

import { PageTitle } from "../../layout-componentsBack";

import { ExampleWrapperSeamless } from "../../layout-componentsBack";
import Deliveryman_data from "../../components/back/Deliveryman/Deliveryman_data";
import { useServerApi } from "../../hooks/useServerApi";
import { useParams } from "react-router";
import PaymentsTable from "../../components/back/PaymentsTable";

export default function Delivery_man() {
  const { id } = useParams();
  const [dm, err, reload] = useServerApi("deliveryman/getdev/" + id);
  const [mile, err1, reload1] = useServerApi("deliveryman/getrate/" + id);
  const toRender = dm;
  const toRender2 = mile;
  return (
    <Fragment>
      <PageTitle
        titleHeading="Deliveryman Details"
        titleDescription="the deliveryman's details : his deliveries and informations"
      />

      <ExampleWrapperSeamless sectionHeading="Deliveryman's informations">
        {toRender ? (
          <>
            <Deliveryman_data dm={toRender} mile={toRender2} />
          </>
        ) : (
          <p>Product not found</p>
        )}
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
