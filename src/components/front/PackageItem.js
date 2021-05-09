import React, { Fragment, useState } from "react";
import FooterData from "../../componentsFront/Footer/FooterData";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import PopUp from "reactjs-popup";
import { queryServerApi } from "../../utils/queryServerApi";
import { ProgressBar } from "react-bootstrap";

import { Grid, Card, CardContent } from "@material-ui/core";

export default function PackageItem(props) {
  console.log(props.pack);
  const [packDel, setPackDel] = useState(0);
  const [cancel, setCancel] = useState(false);
  let history = useHistory();
  const CancelPackage = async (id) => {
    if (props.pack.state > 0) {
      setCancel(true);
    } else {
      const [, err] = await queryServerApi(
        `delivery/cancelDelivery/${id}`,
        null,
        "PUT",
        false
      );
      if (err) {
        //setShowLoader(false);
      } else setPackDel(packDel + 1);
    }
  };
  return (
    <Fragment>
      <Grid container spacing={4} justify={"center"}>
        <Grid item xs={12} md={8} lg={12}>
          <Card className="card-box mb-4">
            <CardContent className="p-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="font-weight-bold">
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Date :{" "}
                      {new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      }).format(props.pack.date_launch)}
                    </small>
                    <span className="font-size-xxl mt-1">
                      {props.pack.Name}
                    </span>
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Source : {props.pack.sourceAddress.City}
                    </small>
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Destination : {props.pack.destinationAddress[0].City}
                    </small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="font-weight-bold">
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Note :{props.pack?.package[0].note}
                    </small>
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Type : {props.pack?.package[0].type}
                    </small>
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Weight : {props.pack?.package[0].weight}
                    </small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="font-weight-bold">
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Length :{props.pack?.package[0].dimension.Length}
                    </small>
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Height : {props.pack?.package[0].dimension.Height}
                    </small>
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Width : {props.pack?.package[0].dimension.Width}
                    </small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Link
                    to={`/PackageDetail/${props.pack._id}`}
                    className="nav-link active"
                    id="purchas-tab"
                    data-toggle="tab"
                    href="#PackageDetail"
                    role="tab"
                    aria-controls="purchas"
                    aria-selected="true"
                  >
                    <span className="text-success px-1">More Details</span>
                  </Link>
                </div>

                {props.pack.state < 1 ? (
                  <>
                    <div className="col-md-4">
                      <Link
                        to={`/PackageUpdate/${props.pack.package[0]._id}`}
                        className="nav-link active"
                        id="purchas-tab"
                        data-toggle="tab"
                        href="#PackageDetail"
                        role="tab"
                        aria-controls="purchas"
                        aria-selected="true"
                        aria-hidden="true"
                      >
                        <span className="text-warning px-1">
                          Update Package
                        </span>
                      </Link>
                    </div>
                    <div className="col-md-4">
                      <span
                        className="text-danger px-1 mb-5"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          CancelPackage(props.pack._id);
                        }}
                      >
                        Cancel Package
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="col-md-6">
                    <ProgressBar max={1000} >
                      {props.pack.state > -1  ? <ProgressBar animated variant="danger" now={250} key={1} min={0} max={1000} label={props.pack.state === 3 ? "Delivery" : ""} /> : null }
                      {props.pack.state > 0  ? <ProgressBar animated variant="warning" now={250} key={2} min={0} max={1000}
                      label={props.pack.state === 3 ? "On" : ""} /> : null}
                      {props.pack.state > 1  ? <ProgressBar animated  now={250} key={3} min={0} max={1000} 
                      label={props.pack.state === 3 ? "The" : ""} /> : null}
                      {props.pack.state > 2  ? <ProgressBar animated variant="success" now={250} key={4} min={0} max={1000} 
                      label={props.pack.state === 3 ? "Way" : ""}/> : null} 
                    </ProgressBar>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

/**
        var {PackageImage, memberN, memberd}= this.props;
        return(
            <div className="ex_team_item">
                <img src={require ("../../img/teams/" + PackageImage)} alt="team"/>
                <div className="team_content">
                    <a href=".#">
                        <h3 className="f_p f_size_16 f_600 t_color3">{memberN}</h3>
                    </a>
                    <h5>web designer</h5>
                </div>
                <div className="hover_content">
                    <div className="n_hover_content">
                        <ul className="list-unstyled">
                            {
                                FooterData.socialIcon.map(item=>{
                                    return(
                                        <li key={item.id}><a href={item.url}><i className={`${item.icon}`}></i></a></li>
                                    )
                                })
                            }
                        </ul>
                        <div className="br"></div>
                        <a href=".#">
                            <h3 className="f_p f_size_16 f_600 w_color">{memberN}</h3>
                        </a>
                        <h5>{memberd}</h5>
                    </div>
                </div>
            </div>
        ) */
