import React, { Component, Fragment,useState } from "react";
import FooterData from "./FooterData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {queryServerApi} from '../../utils/queryServerApi'

import { Grid, Card, CardContent } from "@material-ui/core";

export default function DeliveryManItem(props) {
  return (
    <Fragment>
      <Grid container spacing={4} justify={"center"}>
        <Grid item xs={12} md={8} lg={12}>
          <Card className="card-box mb-4">
            <CardContent className="p-3">
              <div className="align-box-row align-items-start">
                <div className="font-weight-bold">
                  <span className="font-size-xxl mt-1">Name : {props.driver.FullName}</span>
                  <small className="text-black-50 d-block mb-1 text-uppercase">
                     Gender: {props.driver.Gender}
                  </small>
                  <small className="text-black-50 d-block mb-1 text-uppercase">
                    Phone Number : {props.driver.Phone}
                  </small>
                </div>
                <div className="ml-auto">
                  <div className="bg-love-kiss text-center text-white font-size-xl d-50 rounded-circle">
                    <img
                      src={"../../../../../ExpressPi/wamya/public/uploads/" + props.driver.img}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-md-4">
              <span className="text-success px-1 mb-5" style={{cursor: "pointer"}} onClick={() => {props.chosen()}}>Choose this Driver</span>
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
