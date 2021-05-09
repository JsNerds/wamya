import React, { Fragment } from 'react';

import {Grid, Card, CardContent, Button, List, ListItem, LinearProgress} from '@material-ui/core';
import * as L from "leaflet";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    // useMapEvents,
    useMap,
  } from "react-leaflet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function DeliveryDetails(props) {
    const MyMarkers = () => {
        const map = useMap();
    
        if (props.deliv) {
          const preparedData = [];
          preparedData.push(
            L.latLng(
              props.deliv?.sourceAddress.Location.Latitude,
              props.deliv?.sourceAddress.Location.Longitude
            )
          );
          props.deliv.destinationAddress.forEach((el) => {
            preparedData.push(
              L.latLng(el.Location.Latitude, el.Location.Longitude)
            );
          });
    
          var control = L.Routing.control({
            waypoints: preparedData,
            //router: new L.Routing.Google(),
            lineOptions: {
              styles: [
                {
                  color: "blue",
                  opacity: 0.6,
                  weight: 4,
                },
              ],
            },
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false,
          });
          //L.Routing.Itinerary({ show: false });
          control.addTo(map);
    
          map.panTo([
            props.deliv?.sourceAddress.Location.Latitude,
            props.deliv?.sourceAddress.Location.Longitude,
          ]);
          return (
            <>
              <Marker
                position={[
                  props.deliv?.sourceAddress.Location.Latitude,
                  props.deliv?.sourceAddress.Location.Longitude,
                ]}
              >
                <Popup>
                  <span>start : {props.deliv?.sourceAddress.City}</span>
                </Popup>
              </Marker>
            </>
          );
        } else {
          return null;
        }
      };

    return (
        <Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="mb-4">      
                        <CardContent className="p-3">
                            <h5 className="card-title font-weight-bold font-size-lg">
                                
                            </h5>
                            <p className="card-text">
                                <strong>Package type : {props.deliv?.package[0].type}</strong> 
                            </p>
                            <p className="card-text">
                                Customer:
                                <strong> Full name: {props.deliv?.customer.FirstName} {props.deliv?.customer.LastName}</strong> 
                                <strong>Phone Number : </strong> {props.deliv?.customer.PhoneNumber}
                            </p> 
                            <p className="card-text">
                                <strong>Package type : {props.deliv?.package[0].type}</strong> 
                            </p> 

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                <MapContainer center={[0,0]} zoom={13} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <MyMarkers />
                </MapContainer>
                </Grid>
            </Grid>
        </Fragment>
    );
}
