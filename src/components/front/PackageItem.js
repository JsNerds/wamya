import React, { Component,Fragment } from 'react'
import FooterData from '../../componentsFront/Footer/FooterData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, CardContent } from '@material-ui/core';
export default class PackageItem extends Component {
    render(){
        return (
    <Fragment>
      <Grid container spacing={4} justify={'center'}>
        <Grid item xs={12} md={8} lg={12}>
          <Card className="card-box mb-4">
            <CardContent className="p-3">
              <div className="align-box-row align-items-start">
                <div className="font-weight-bold">
                  <small className="text-black-50 d-block mb-1 text-uppercase">
                    New Accounts
                  </small>
                  <span className="font-size-xxl mt-1">586,356</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-love-kiss text-center text-white font-size-xl d-50 rounded-circle">
                    <FontAwesomeIcon icon={['far', 'keyboard']} />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success"
                />
                <span className="text-success px-1">15.4%</span>
                <span className="text-black-50">increase this month</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
  
      </Grid>
    </Fragment>
  );
    }
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