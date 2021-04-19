import React, {Fragment} from 'react';
import EntrepriseDrivers from "./EntrepriseDrivers";
import PackageSlider from "./PackageSlider";
import CustomerStats from "./CustomerStats";
import CustomerFavoriteDrivers from "./CustomerFavoriteDrivers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Tooltip } from '@material-ui/core';
import CustomerOperationsPayments from "./CustomerOperationsPayments";
import SendPackages from "../../pages/front/SendPackages";
import PackagesForm from "./PackagesForm";


const CustomerInterfaceBody =(props)=>{

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
                                    <a className="nav-link" id="returns-tab" data-toggle="tab" href="#Drivers" role="tab" aria-controls="returns" aria-selected="false">My Favorite Drivers </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="price-tab" data-toggle="tab" href="#SendPackage" role="tab" aria-controls="price" aria-selected="false">Send Package</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" id="price-tab" data-toggle="tab" href="#Packages" role="tab" aria-controls="price" aria-selected="false">My Packages</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" id="price-tab" data-toggle="tab" href="#Payments" role="tab" aria-controls="price" aria-selected="false">My Operations and Payments</a>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <Button variant="contained" color="primary" className="m-2">
                            <FontAwesomeIcon icon={['far', 'bell']} />
                            <span className="ml-3 badge badge-warning">
                          <b>23</b> New
                            </span>
                        </Button>

                        <div className="tab-content faq_content" id="myTabContent">
                            <div className="tab-pane fade show active" id="Analytics" role="tabpanel" aria-labelledby="purchas-tab">
                                    <CustomerStats customer={props.customer}/>
                            </div>


                            <div className="tab-pane fade" id="Drivers" role="tabpanel" aria-labelledby="returns-tab">
                                    <CustomerFavoriteDrivers/>
                            </div>

                            <div className="tab-pane fade" id="Packages" role="tabpanel" aria-labelledby="price-tab">
                                    <PackageSlider/>
                            </div>
                            <div className="tab-pane fade" id="Payments" role="tabpanel" aria-labelledby="price-tab">
                                    <CustomerOperationsPayments/>
                            </div>

                            <div className="tab-pane fade" id="SendPackage" role="tabpanel" aria-labelledby="price-tab">
                                    <PackagesForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CustomerInterfaceBody;