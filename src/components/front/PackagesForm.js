import React, { Component, useState } from "react";
import Packages from "../../pages/front/Packages";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

export default class PackagesForm extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  render() {
   function LocationMarker() {
      const [position, setPosition] = useState(null)
      const map = useMapEvents({
        click() {
          map.locate()
        },
        locationfound(e) {
          setPosition(e.latlng)
          map.flyTo(e.latlng, map.getZoom())
        },
      })
    
      return position === null ? null : (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )
    }
    return (
      <section className="sign_in_area bg_color sec_pad">
        <div className="container">
          <div className="sign_info">
            <div className="row">
              <div className="col-lg-5">
                <div className="sign_info_content">
                  <h3 className="f_p f_600 f_size_24 t_color3 mb_40">
                    Send Your Package Now!!!
                  </h3>
                  <h2 className="f_p f_400 f_size_30 mb-30">
                    Fill out the Form <br /> starting using our <br />
                    <span className="f_700">amazing</span> Application
                  </h2>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <i className="ti-check"></i>Safety
                    </li>
                    <li>
                      <i className="ti-check"></i>Digital Signature
                    </li>
                    <li>
                      <i className="ti-check"></i>Real Time Tracking
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="login_info">
                  <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
                    Package
                  </h2>
                  <form action="#" className="login-form sign-in-form">
                    <div className="form-group text_box">
                      <label className="f_p text_c f_400">Dimension</label>
                      <div className="row">
                        <div className="col-md-3">
                          <input type="text" placeholder="Length" />
                        </div>
                        <div className="col-md-3">
                          <input type="text" placeholder="Height" />
                        </div>
                        <div className="col-md-3">
                          <input type="text" placeholder="Height" />
                        </div>
                        <div className="col-md-3">
                          <input type="text" placeholder="Quantity" />
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-12">
                        <MapContainer
                          center={[51.505, -0.09]}
                          zoom={13}
                          scrollWheelZoom={false}
                        >
                          <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <LocationMarker />
                        </MapContainer> 
                        </div>
                      </div>
                    </div> 
                    <div className="d-flex justify-content-between align-items-center">
                      <button type="submit" className="btn_three">
                        Send Package
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
