import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

import { Avatar, IconButton, Box, Card, CardContent } from "@material-ui/core";

import car2 from "../../assets/images/avatars/car2.jpg";
import car1 from "../../assets/images/avatars/car1.jpg";

export default function CustomersTable() {
  const addVehicule = () => {
    history.push("/addVehicule");
  };
  const history = useHistory();
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title">
            <b>Vehicule Table</b>
          </div>
          <Box className="card-header--actions">
            <IconButton
              size="small"
              color="primary"
              className="text-primary"
              title="View details"
              onClick={addVehicule}
            >
              <FontAwesomeIcon
                icon={["fas", "plus-circle"]}
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
                  <th style={{ width: "20%" }}>Model</th>
                  <th style={{ width: "20%" }}>Registration Number</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={car1} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="..."
                        >
                          Ford
                        </a>
                        <span className="text-black-50 d-block">fiesta</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="font-weight-bold">186 TN 8749</p>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-warning">
                      In use
                    </div>
                  </td>
                  <td className="text-center">
                    <Box>
                      <IconButton color="primary" size="small">
                        <FontAwesomeIcon icon={["fas", "ellipsis-h"]} />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={car2} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="..."
                        >
                          Wolkswagon
                        </a>
                        <span className="text-black-50 d-block">Polo</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="font-weight-bold">186 TN 8749</p>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-success h-auto py-0 px-3">
                      Completed
                    </div>
                  </td>
                  <td className="text-center">
                    <Box>
                      <IconButton color="primary" size="small">
                        <FontAwesomeIcon icon={["fas", "ellipsis-h"]} />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={car1} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="..."
                        >
                          Opel
                        </a>
                        <span className="text-black-50 d-block">Corsa</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="font-weight-bold">186 TN 8749</p>
                  </td>
                  <td className="text-center">
                    <div className="h-auto py-0 px-3 badge badge-danger">
                      Declined
                    </div>
                  </td>
                  <td className="text-center">
                    <Box>
                      <IconButton color="primary" size="small">
                        <FontAwesomeIcon icon={["fas", "ellipsis-h"]} />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
}
