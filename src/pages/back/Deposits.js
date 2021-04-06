import React, { Fragment } from "react";

import { ExampleWrapperSeamless, PageTitle } from "../../layout-componentsBack";
import DepositsTable from "../../components/back/DepositsTable";
export default function Packages() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Deposits"
        titleDescription="Manage deposists and packages"
      />
      <ExampleWrapperSeamless sectionHeading="Deposits table">
        <DepositsTable />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
