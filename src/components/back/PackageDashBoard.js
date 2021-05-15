import React, {Fragment, useEffect, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, CardContent} from '@material-ui/core';

import {useHistory} from "react-router-dom";
import axios from 'axios';

import Simulation from './Simulation'



export default function PackageDashBoard() {

  const history = useHistory();
  const username = localStorage.getItem('username');
  const id = localStorage.getItem('id');
  const role = localStorage.getItem('role');
  const [started,setStarted] = useState(false);
  const [connected,setConnected] = useState(false);
  const [deliveryList,setDeliveryList] = useState([]);
  
  useEffect(()=> {
    if (username === null)
    {
      setConnected(false);
    }
    else {
      setConnected(true);
    }

  })

  const Logout = () => {
    localStorage.clear();
    history.go(0);
    history.push("/");
  }
  

    const getAllDeliveriesForCustomer= async () => {
        try {
          const Delivery = await axios.get(
            "http://localhost:3000/delivery/"
          ).then(function(doc){
            if(JSON.stringify(doc.data) === JSON.stringify(deliveryList))
            {
              console.log("same")
            }
            else{
              setDeliveryList(doc.data)
              console.log(doc.data);
              console.log(deliveryList);
            }
                
          });
           // set State
        } catch (err) {
          console.error(err.message);
        }
      };
      useEffect(() => {
        getAllDeliveriesForCustomer();
        const interval = setInterval(() => {
          console.log("hi")
            getAllDeliveriesForCustomer();
        }, 2000);
        return () => clearInterval(interval);
      }, []);


  const CalculateFinishedDeliveries = () => {
    return deliveryList?.reduce(function(nb, deliv) {
      if (deliv.state === 4 || deliv.state === 5) {
        nb += 1;
      }
      return nb;
    }, 0);
  }
  const CalculateNewDeliveries = () => {
    return deliveryList?.reduce(function(nb, deliv) {
      if (deliv.state === 0) {
        nb += 1;
      }
      return nb;
    }, 0);
  }
  const CalculatePercentageDeliveries = () => {
    var newDeliveries = deliveryList?.reduce(function(nb, deliv) {
      if (deliv.state === 0) {
        nb += 1;
      }
      return nb
    }, 0);
    return (newDeliveries/deliveryList.length*100).toFixed(2);
  }
  const CalculateOnGoingDeliveries = () => {
    return deliveryList?.reduce(function(nb, deliv) {
      if (deliv.state > 0 && deliv.state < 4) {
        nb += 1;
      }
      return nb;
    }, 0);
  }
  const CalculateCanceledDeliveries = () => {
    return deliveryList?.reduce(function(nb, deliv) {
      if (deliv.state === -1) {
        nb += 1;
      }
      return nb;
    }, 0);
  }

  const chart30Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#3c44b1'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 4
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart30Data = [
    {
      name: 'Customers',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart31Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#f4772e'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart31Data = [
    {
      name: 'Deliveries',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  return (
    <Fragment>
       <br/>
       <br/>
       <br/>
       <button type="button" onClick={()=>{setStarted(true)}}> start simulation</button>
       <button type="button" onClick={()=>{setStarted(false)}}>stop simulation</button>
       {started == true ? (<Simulation changeStarted={setStarted}/>) : null}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card-box bg-premium-dark border-0 text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    New Deliveries
                  </small>
                  <span className="font-size-xxl mt-1">{CalculateNewDeliveries()}</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-success d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">{CalculatePercentageDeliveries()+"%"}</span>
                <span className="text-white-50">increase</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className="card-box bg-plum-plate text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    On Going Deliveries
                  </small>
                  <span className="font-size-xxl mt-1">{CalculateOnGoingDeliveries()}</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-down']}
                  className="text-white mr-1"
                />
                <span className="text-red px-1">15.4%</span>
                <span className="text-white-50">More orders</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card-box bg-midnight-bloom text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Finished Deliveries
                  </small>
                  <span className="font-size-xxl mt-1">{CalculateFinishedDeliveries()}</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'lightbulb']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-warning mr-1"
                />
                <span className="text-warning pr-1">7.4%</span>
                <span className="text-white-50">same as before</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card-box bg-premium-dark border-0 text-light mb-4">
            <CardContent className="p-3">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Canceled Deliveries
                  </small>
                  <span className="font-size-xxl mt-1">{CalculateCanceledDeliveries()}</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-success d-50 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">15.4%</span>
                <span className="text-white-50">increase this month</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
