import React, { Fragment } from "react";

import { ExampleWrapperSeamless, PageTitle } from "../../layout-componentsBack";
import VehiculesTable from "../../components/back/VehiculesTable";
import { useServerApi } from "../../hooks/useServerApi";
export default function Vehicules() {
  const [vehicules, err, reload] = useServerApi("vehicule/");
  return (
    <Fragment>
      <PageTitle
        titleHeading="Vehicules"
        titleDescription="Monitor company and drivers vehicules"
      />
      <VehiculesTable vehicules={vehicules} />
    </Fragment>
  );
}
