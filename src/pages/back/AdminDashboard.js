import React, { Fragment } from 'react';
import PackageDashBoard from '../../components/back/PackageDashBoard';

import { PageTitle } from '../../layout-componentsBack';
export default function AdminDashborad() {
    return (
        <Fragment>
            <PageTitle
                titleHeading="Wamya Dashboard"
                titleDescription="Admin Template"
            />
            <PackageDashBoard/>
        </Fragment>
    );
}
