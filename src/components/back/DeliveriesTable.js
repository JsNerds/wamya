import React, { useState, Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useServerApi } from "../../hooks/useServerApi";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { Avatar, IconButton, Box, Card, CardContent } from "@material-ui/core";
import { queryServerApi } from "../../utils/queryServerApi";
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import avatar1 from "../../assets/images/avatars/avatar1.jpg";
import avatar2 from "../../assets/images/avatars/avatar2.jpg";
import avatar3 from "../../assets/images/avatars/avatar3.jpg";
export default function DeliveriesTable(props) {
  const history = useHistory();
  const [deliveries, setDeliveries] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const [deliveryList,setDeliveryList] = useState();
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
        }, 500);
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
    } else history.push("/Deliveries");
    setAnchorEl(null);
  };
  const handleDetail = async (id) => {
    
    setAnchorEl(null);
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
                  <th style={{ width: "40%" }}>Source</th>
                  <th className="text-center">destination</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Type of package</th>
                  <th className="text-center">driver</th>
                  <th className="text-center">Actions</th>
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
                    {delivery?.driver.Username}
                    </td>
                    <td className="text-center">
                      <Box>
                        <IconButton
                          onClick={handleClick}
                          color="primary"
                          size="small"
                        >
                          <FontAwesomeIcon icon={["fas", "ellipsis-h"]} />
                        </IconButton>

                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={()=> {handleDelete(delivery?._id)}}>Cancel Package</MenuItem>
                          <MenuItem onClick={()=> {handleDetail()}}>Details & tracking</MenuItem>
                        </Menu>
                      </Box>
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
