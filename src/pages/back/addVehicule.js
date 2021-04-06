import React, { Fragment } from "react";

import { PageTitle } from "../../layout-componentsBack";

import VehiculeForm from "../../components/back/VehiculeForm";
export default function Vehicules() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="add a vehicule"
        titleDescription="Specify Vehicule details"
      />
      <VehiculeForm />
    </Fragment>
  );
}
