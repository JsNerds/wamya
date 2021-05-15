import React, { Fragment } from "react";

import {
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  LinearProgress,
  Tooltip,
  IconButton
} from "@material-ui/core";
import * as L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  // useMapEvents,
  useMap,
} from "react-leaflet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";

export default function DeliveryDetails(props) {
  const history = useHistory();
  const DeliveryManDetails= (id) =>{
    history.replace("/DeliverymanDetails/"+ id)
}
const CustomerDetails= (id) =>{
  history.replace("/CustomerDetails/"+ id)
}
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
                Package
              </h5>
              <p className="card-text">
                <strong>type :</strong> {props.deliv?.package[0].type}
              </p>
              <p className="card-text">
                <strong>Note :</strong> {props.deliv?.package[0].note}
              </p>
              <p className="card-text">
                {" "}
                <strong>Weight :</strong> {props.deliv?.package[0].weight}
              </p>
              <p className="card-text">
                <strong>Length :</strong>{" "}
                {props.deliv?.package[0].dimension.Length} <span />
                <strong>Width :</strong>{" "}
                {props.deliv?.package[0].dimension.Width}
                <span />
                <strong>Height :</strong>{" "}
                {props.deliv?.package[0].dimension.Height}
                <span />
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg">
                {" "}
                Customer
              </h5>
              <p className="card-text">
                <strong>Full name :</strong> {props.deliv?.customer.FirstName}{" "}
                {props.deliv?.customer.LastName}
              </p>

              <p className="card-text">
                <strong>Username :</strong> {props.deliv?.customer.UserName}
              </p>
              <p className="card-text">
                <strong>Email :</strong> {props.deliv?.customer.Email}
              </p>
              <Tooltip arrow title="View Details">
                <IconButton
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    CustomerDetails(props.deliv?.customer._id);
                  }}
                >
                  <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                </IconButton>
              </Tooltip>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg">
                {props.deliv?.driver.Fullname}
              </h5>
              <p className="card-text">
                <strong>Username : </strong> {props.deliv?.driver.Username}
                {console.log(props.mile)}
                {console.log(props.deliv?.driver)}
              </p>
              <p className="card-text">
                <strong>Email : </strong> {props.deliv?.driver.Email}
              </p>
              <p className="card-text">
                <strong>Phone Number : </strong> {props.deliv?.driver.Phone}
              </p>
              <p className="card-text">
                <strong>Address : </strong> {props.deliv?.driver.address}
              </p>
              <Tooltip arrow title="View Details">
                <IconButton
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    DeliveryManDetails(props.deliv?.driver._id);
                  }}
                >
                  <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                </IconButton>
              </Tooltip>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={12}>
          <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={true}>
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
