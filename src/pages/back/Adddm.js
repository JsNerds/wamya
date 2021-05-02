import React, { Fragment } from "react";

import { PageTitle } from "../../layout-componentsBack";

import Form from "../../components/back/Dm_form";
export default function Vehicules() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="add a vehicule"
        titleDescription="Specify Vehicule details"
      />
      <Form
        onSubmit={async (values) => {
          console.log(values);
        }}
      />
    </Fragment>
  );
}
