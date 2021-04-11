import React, { useState, Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useServerApi } from "../../hooks/useServerApi";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { Avatar, IconButton, Box, Card, CardContent } from "@material-ui/core";

import avatar1 from "../../assets/images/avatars/avatar1.jpg";
import avatar2 from "../../assets/images/avatars/avatar2.jpg";
import avatar3 from "../../assets/images/avatars/avatar3.jpg";
export default function PackagesTable(props) {
  const [PackageApi] = useServerApi("package/");
  const [packages, setPackages] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
    useEffect(() => {
        console.log("hi")
        setPackages(PackageApi)
    })

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title">
            <small>Tables</small>
            <b>Packages</b>
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
                  <th style={{ width: "40%" }}>Package Name</th>
                  <th className="text-center">status</th>
                  <th className="text-center">source</th>
                  <th className="text-center">destination</th>
                  <th className="text-center">driver</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {packages?.map((pack) => {
                  return (
                  <tr key={pack._id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <Avatar alt="..." src={avatar2} className="mr-2" />
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="..."
                          >
                            {pack.Name}
                          </a>
                          <span className="text-black-50 d-block">
                            UI Engineer, Apple Inc.
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="h-auto py-0 px-3 badge badge-warning">
                        Pending
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="h-auto py-0 px-3">
                        {pack.sourceAddress.City}
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="h-auto py-0 px-3">
                      {pack.destinationAddress.City}
                      </div>
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
                          <MenuItem onClick={handleClose}>delete</MenuItem>
                          <MenuItem onClick={handleClose}>update</MenuItem>
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
