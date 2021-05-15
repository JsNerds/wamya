import React, { Fragment } from 'react';
import { useParams } from "react-router-dom";
import {ExampleWrapperSeamless, PageTitle} from '../../layout-componentsBack';
import DeliveryDetails from "../../components/back/DeliveryDetails";
import {useServerApi} from '../../hooks/useServerApi';

export default function Delivery() {
    const {id} = useParams();
    const [delivery, err, reload] = useServerApi("delivery/"+id);
    const toRender = delivery;
    return (
        <Fragment>
            <PageTitle
                titleHeading="Delivery Details"
                titleDescription="this is the details of the delivery"
            />
            <ExampleWrapperSeamless sectionHeading="Delivery">
            {toRender ?
              (   <>
                    <DeliveryDetails deliv={toRender}/>
                  </>
              ) : (<p>Delivery not found</p>)}
                
            </ExampleWrapperSeamless>
        </Fragment>
    );
}
