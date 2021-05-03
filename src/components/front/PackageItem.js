import React, {Fragment,useState } from "react";
import FooterData from "../../componentsFront/Footer/FooterData";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";

import {queryServerApi} from '../../utils/queryServerApi'

import { Grid, Card, CardContent } from "@material-ui/core";

export default function PackageItem(props) {
  console.log(props.pack);
  const [packDel, setPackDel] = useState(0);
  let history = useHistory();
  const CancelPackage = async (id) => {
    console.log(id);
    const [, err] = await queryServerApi(
      `delivery/cancelDelivery/${id}`,
      null,
      "PUT",
      false
    );
    if (err) {
      //setShowLoader(false);
    } else history.go(0);
    setPackDel(packDel+1);
  };
  return (
    <Fragment>
      <Grid container spacing={4} justify={"center"}>
        <Grid item xs={12} md={8} lg={12}>
          <Card className="card-box mb-4">
            <CardContent className="p-3">
              <div className="align-box-row align-items-start">
                <div className="font-weight-bold">
                  <small className="text-black-50 d-block mb-1 text-uppercase">
                    Date :{" "}
                    {new Intl.DateTimeFormat("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    }).format(props.pack.date_launch)}
                  </small>
                  <span className="font-size-xxl mt-1">{props.pack.Name}</span>
                  <small className="text-black-50 d-block mb-1 text-uppercase">
                    Source : {props.pack.sourceAddress.City}
                  </small>
                  <small className="text-black-50 d-block mb-1 text-uppercase">
                    Destination : {props.pack.destinationAddress[0].City}
                  </small>
                </div>
                <div className="ml-auto">
                  <div className="bg-love-kiss text-center text-white font-size-xl d-50 rounded-circle">
                    <img
                      src={require("../../img/teams/" + props.PackageImage)}
                    />
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
               ><span className="text-warning px-1">Update Package</span></Link>
              </div>
              <div className="col-md-4">
              <Link><span className="text-danger px-1 mb-5" style={{cursor: "pointer"}} onClick={() => {CancelPackage(props.pack._id)}}>Cancel Package</span></Link>
              </div>
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
