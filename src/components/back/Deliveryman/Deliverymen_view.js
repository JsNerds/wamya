import React, { Fragment, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Avatar,
  IconButton,
  Box,
  Card,
  CardContent,
  Button,
  Tooltip,
} from "@material-ui/core";
import { useServerApi } from "../../../hooks/useServerApi";

import avatar2 from "../../../assets/images/avatars/avatar2.jpg";
import { queryServerApi } from "../../../utils/queryServerApi";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditIcon from "@material-ui/icons/Edit";
import validate from "../../../validation/validation";
import ReactStars from "react-rating-stars-component";
export default function Deliverymen_view(props) {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [ws] = useServerApi("deliveryman/getmiles");
  console.log(ws);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const UpdateCustomer = (customer) => {
    history.replace("/UpdateCustomer/" + customer._id);
  };
  const Details = (id) => {
    history.replace("/DeliverymanDetails/" + id);
  };

  const deletedriver = async (id) => {
    const [err] = await queryServerApi(
      "deliveryman/delete/" + id,
      {},
      "DELETE"
    );
    if (err) {
      console.log(err);
    }
    history.go(0);
  };

  const validateit = async (id) => {
    const [err] = await queryServerApi(
      "deliveryman/validate/" + id,
      {},
      "POST"
    );
    if (err) {
      console.log(err);
    }
    history.go(0);
  };

  useEffect(() => {
    console.log(props.dms);
  }, [props.dms]);

  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title">
            <small>Tables</small>
            <b>Customers</b>
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
                  <th style={{ width: "40%" }}>deliveryman</th>
                  <th className="text-center">status</th>
                  <th className="text-center">Region</th>
                  <th className="text-center">Gender</th>
                  <th className="text-center">Rating</th>
                  <th className="text-center">Phone Number</th>
                  <th className="text-center">Actions</th>
                  <th className="text-center"></th>
                </tr>
              </thead>
              <tbody>
                {props.dms?.map((dm, index) => (
                  <tr key={index} className={dm.Status == 1 && "table-warning"}>
                    <td>
                      <div className="d-flex align-items-center">
                        <Avatar alt="..." src={dm.pdp} className="mr-2" />
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="..."
                          >
                            {dm.FullName}
                          </a>
                          <span className="text-black-50 d-block">
                            Username : {dm.Username}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      {dm.Status === 1 && (
                        <span class="badge badge-first">waiting</span>
                      )}
                      {dm.Status === 2 && (
                        <span class="badge badge-danger">Offline</span>
                      )}
                      {dm.Status === 3 && (
                        <span class="badge badge-success">Available</span>
                      )}
                      {dm.Status === 4 && (
                        <span class="badge badge-warning">Delivering</span>
                      )}
                    </td>
                    <td className="text-center">
                      {dm.Region?.map((ds, index) => (
                        <div className="row" key={index}>
                          <span class="btn-pill m-1 badge badge-info">
                            {ds.value}
                          </span>
                        </div>
                      ))}
                    </td>
                    <td className="text-center">
                      <div>{dm.Gender}</div>
                    </td>
                    <td className="text-center">
                      <div>
                        {ws?.map((wa, index) => (
                          <div className="row" key={index}>
                            <span class=" badge badge-primary">
                              {dm._id === wa.Id && (
                                <span class="fa fa-star">{wa.rating}</span>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="text-center">
                      <div>{dm.Phone}</div>
                    </td>
                    <td className="text-center">
                      <Button
                        size="small"
                        variant="contained"
                        className="mr-3"
                        color="primary"
                        onClick={() => UpdateCustomer(dm)}
                      >
                        Update
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        className="mr-3"
                        color="secondary"
                        onClick={() => deletedriver(dm._id)}
                      >
                        Delete
                      </Button>

                      <Tooltip arrow title="View Details">
                        <IconButton
                          size="small"
                          variant="outlined"
                          color="primary"
                          onClick={() => Details(dm._id)}
                        >
                          <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                        </IconButton>
                      </Tooltip>
                      {dm.Status === 1 && (
                        <Tooltip arrow title="Validate">
                          <IconButton
                            size="small"
                            variant="outlined"
                            color="secondary"
                            onClick={() => validateit(dm._id)}
                          >
                            <FontAwesomeIcon icon={["fas", "check-square"]} />
                          </IconButton>
                        </Tooltip>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
}
