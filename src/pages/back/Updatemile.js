import React, { Fragment } from "react";
import { PageTitle } from "../../layout-componentsBack";
import { ExampleWrapperSeamless } from "../../layout-componentsBack";
import UpdatemileForm from "../../components/back/UpdatemileForm";
import { useParams } from "react-router";

export default function Updatemile() {
  const { id } = useParams();

  return (
    <Fragment>
      <PageTitle
        titleHeading="Update the milestone"
        titleDescription="Wide selection of forms controls, using a standardised code base, specifically for React."
      />
      <ExampleWrapperSeamless sectionHeading="">
        <UpdatemileForm id={id} />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
