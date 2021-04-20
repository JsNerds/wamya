import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "../../utils/queryServerApi";
import { IconButton, Box, Card, CardContent } from "@material-ui/core";

export default function CustomersTable() {
  const addVehicule = () => {
    history.push("/addVehicule");
  };
  const history = useHistory();
  const deleteVehicule = async (id) => {
    const [, err] = await queryServerApi("/vehicule/delete/", "DELETE", false);
    if (err) {
      //setShowLoader(false);
    } else history.push("/Vehicules");
  };
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
                  <th style={{ width: "15%" }}>Weight Capacity</th>
                  <th style={{ width: "15%" }}>Trunk Volume</th>
                  <th style={{ width: "10%" }}>edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
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
                  <td>
                    <p className="font-weight-bold">500Kg</p>
                  </td>
                  <td>
                    <p className="font-weight-bold">500Kg</p>
                  </td>
                  <td>
                    <IconButton
                      size="small"
                      color="primary"
                      className="text-primary"
                      title="View details"
                      onClick={addVehicule}
                    >
                      <FontAwesomeIcon
                        icon={["fa", "edit"]}
                        className="font-size-lg"
                      />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="primary"
                      className="text-primary"
                      title="View details"
                      onClick={deleteVehicule}
                    >
                      <FontAwesomeIcon
                        icon={["fas", "minus-circle"]}
                        className="font-size-lg"
                      />
                    </IconButton>
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
