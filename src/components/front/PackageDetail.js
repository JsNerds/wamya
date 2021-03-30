import React, { Component,useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';


export default class PackageDetail extends Component {
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
            <div>
                <section className="service_details_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 pr_70">
                        <div className="job_info">
                            <div className="info_head">
                                <i className="ti-receipt"></i>
                                <h6 className="f_p f_600 f_size_18 t_color3">Package Name</h6>
                            </div>
                            <div className="info_item">
                                <h6>Driver in Charge</h6>
                                <p>Driver's Name</p>
                            </div>
                            <div className="info_item">
                                <h6>Live Time:</h6>
                                <p>Position</p>
                            </div>
                            <div className="info_item">
                                <h6>Service Cost:</h6>
                                <p>$250.00</p>
                            </div>
                            <div className="info_item">
                                <h6>Quality:</h6>
                                <p>High</p>
                            </div>
                            <div className="info_item">
                                <h6>Experience</h6>
                                <p>3 Years</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="details_content">
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
            </div>
        </section>
            </div>
        )
    }
}
