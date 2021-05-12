import React, { useState, Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useServerApi } from "../../hooks/useServerApi";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { Avatar, IconButton, Box, Card, CardContent, Tooltip } from "@material-ui/core";
import { queryServerApi } from "../../utils/queryServerApi";
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import avatar1 from "../../assets/images/avatars/avatar1.jpg";
import avatar2 from "../../assets/images/avatars/avatar2.jpg";
import avatar3 from "../../assets/images/avatars/avatar3.jpg";
export default function DeliveriesTable(props) {
  const history = useHistory();
  const [deliveries, setDeliveries] = useState();
  const [deliveryList,setDeliveryList] = useState();
  const Details= (id) =>{
    history.replace("/DeliveryDetails/"+ id)
}
    const getAllDeliveriesForCustomer= async () => {
        try {
          const Delivery = await axios.get(
            "http://localhost:3000/delivery/"
          ).then(function(doc){
                console.log(doc.data)
                setDeliveryList(doc.data)
          });
           // set State
        } catch (err) {
          console.error(err.message);
        }
      };
      useEffect(() => {
        getAllDeliveriesForCustomer();
        const interval = setInterval(() => {
            getAllDeliveriesForCustomer();
        }, 1000);
        return () => clearInterval(interval);
      }, []);

  const handleDelete = async (id) => {
    const [, err] = await queryServerApi(
      `delivery/cancelDelivery/${id}`,
      null,
      "PUT",
      false
    );
    if (err) {
      //setShowLoader(false);
    } else console.log("deleted")
  };
  const handleDetail = async (id) => {
    
  };
  const DeliveryState = (props) => {
    if ( props.deliv.state == 0) {
      return (
        <div className="h-auto py-0 px-3 badge badge-warning">
                        pending
                      </div> 
      );
    } else if (props.deliv.state < 4 && props.deliv.state >0 ) {
      return (
        <div className="h-auto py-0 px-3 badge badge-warning">
                        On going
                      </div> 
      );
    } else if(props.deliv.state == -1) {
      return (
        <div className="h-auto py-0 px-3 badge badge-danger">
                      Canceled
                    </div>
      );
    }
    else{
      return (
        <div className="h-auto py-0 px-3 badge badge-success">
                      Finished
                    </div>
      );
    }
  }
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title">
            <small>Tables</small>
            <b>Deliveries</b>
          </div>
          <Box className="card-header--actions">
            <IconButton
              size="small"
              color="primary"
              className="text-primary"
              title="View details"
            >
              <FontAwesomeIcon
                icon={["far", "keyboard"]}
                className="font-size-lg"
              />
            </IconButton>
          </Box>
        </div>
        <CardContent className="p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th className="text-center">Source</th>
                  <th className="text-center">destination</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Type of package</th>
                  <th className="text-center">driver</th>
                  <th className="text-center">Actions</th>
                  <th className="text-center"></th>
                </tr>
              </thead>
              <tbody>
                {deliveryList?.map((delivery) => {
                  return (
                  <tr key={delivery?._id}>
                     <td className="text-center">
                      <div className="h-auto py-0 px-3">
                        {delivery?.sourceAddress.City}
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="h-auto py-0 px-3">
                        {delivery?.destinationAddress[0].City}
                      </div>
                    </td>
                    <td className="text-center">
                    <DeliveryState deliv={delivery}/>
                    </td>
                    <td className="text-center">
                      <div className="h-auto py-0 px-3">
                      {delivery?.package[0].type}
                      </div>
                    </td>
                    <td className="text-center">
                    {delivery?.driver?.FullName}
                    </td>
                    <td className="text-center">   
                                        <Button size="small" variant="contained" color="secondary" onClick={()=> {handleDelete(delivery._id)}}>
                                            Cancel Delivery
                                        </Button>
                                    </td>
                                    <td className="text-center">
                                        <Tooltip arrow title="View Details">
                                            <IconButton
                                                size="small"
                                                variant="outlined"
                                                color="primary"
                                                onClick={()=>{Details(delivery._id)}}
                                            >
                                                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                            </IconButton>
                                        </Tooltip>
                                    </td>
                  </tr>)
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
}
