import React from 'react';
import EntrepriseStats from "./EntrepriseStats";
import EntrepriseDrivers from "./EntrepriseDrivers";
import PackageSlider from "./PackageSlider";

const CustomerInterfaceBody =()=>{
    return(
        <section className="faq_area bg_color sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 pr_50">
                        <div className="faq_tab">
                            <h4 className="f_p t_color3 f_600 f_size_22 mb_40">Quick Navigation</h4>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="purchas-tab" data-toggle="tab" href="#Analytics" role="tab" aria-controls="purchas" aria-selected="true">Analytics</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="returns-tab" data-toggle="tab" href="#Drivers" role="tab" aria-controls="returns" aria-selected="false">My Drivers </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="price-tab" data-toggle="tab" href="#Packages" role="tab" aria-controls="price" aria-selected="false">My Packages</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tab-content faq_content" id="myTabContent">
                            <div className="tab-pane fade show active" id="Analytics" role="tabpanel" aria-labelledby="purchas-tab">
                                    <EntrepriseStats/>
                            </div>


                            <div className="tab-pane fade" id="Drivers" role="tabpanel" aria-labelledby="returns-tab">
                                    <EntrepriseDrivers/>
                            </div>

                            <div className="tab-pane fade" id="Packages" role="tabpanel" aria-labelledby="price-tab">
                                    <PackageSlider/>
                            </div>
                            <div className="tab-pane fade" id="care" role="tabpanel" aria-labelledby="care-tab">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CustomerInterfaceBody;