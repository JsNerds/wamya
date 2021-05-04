import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "../../utils/queryServerApi";
import { IconButton, Box, Card, CardContent } from "@material-ui/core";

export default function CustomersTable(props) {
  const history = useHistory();
  const addVehicule = () => {
    history.push("/addVehicule");
  };

  const deleteVehicule = async (id) => {
    console.log(id);
    const [, err] = await queryServerApi(
      `vehicle/delete/${id}`,
      null,
      "DELETE",
      false
    );
    history.go(0);
    if (err) {
      //setShowLoader(false);
    } else history.go(0);
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
                  <th style={{ width: "20%" }}>Trunk Volume</th>
                  <th style={{ width: "20%" }}>Weight Capacity</th>
                  <th style={{ width: "10%" }}>edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {props.vehicules?.map((vehicule, index) => {
                  return (
                    <tr>
                      <td>
                        <p className="font-weight-bold">{vehicule.model}</p>
                      </td>
                      <td>
                        <p className="font-weight-bold">
                          {vehicule.registrationNumber}
                        </p>
                      </td>
                      <td>
                        <p className="font-weight-bold">
                          {vehicule.trunkVolume} m²
                        </p>
                      </td>
                      <td>
                        <p className="font-weight-bold">
                          {vehicule.weightCapacity} Kg
                        </p>
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
                          onClick={() => {
                            deleteVehicule(vehicule._id);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={["fas", "minus-circle"]}
                            className="font-size-lg"
                          />
                        </IconButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
}
