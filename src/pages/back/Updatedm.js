import React, { Fragment } from "react";
import { PageTitle } from "../../layout-componentsBack";
import { ExampleWrapperSeamless } from "../../layout-componentsBack";
import UpdatedmForm from "../../components/back/UpdatedmForm";
import { useParams } from "react-router";

export default function Updatedm() {
  const { id } = useParams();

  return (
    <Fragment>
      <PageTitle
        titleHeading="Delivery man"
        titleDescription="Wide selection of forms controls, using a standardised code base, specifically for React."
      />
      <ExampleWrapperSeamless sectionHeading="">
        <UpdatedmForm id={id} />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
