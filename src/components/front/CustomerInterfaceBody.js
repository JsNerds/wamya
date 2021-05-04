import React, {Fragment} from 'react';
import MyPackages from "../../pages/front/MyPackages";
import CustomerStats from "./CustomerStats";
import CustomerFavoriteDrivers from "./CustomerFavoriteDrivers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Tooltip } from '@material-ui/core';
import CustomerOperationsPayments from "./CustomerOperationsPayments";
import PackagesForm from "./PackageForm/PackagesForm";
import EditProfileCustomerForm from "./EditProfileCustomerForm";
import ChangePasswordCustomer from "./ChangePasswordCustomer";
import DisableAccountCustomer from "./DisableAccountCustomer";


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
                                    <a className="nav-link active" id="purchas-tab" data-toggle="tab" href="#Analytics" role="tab" aria-controls="purchas" aria-selected="true">
                                        <FontAwesomeIcon
                                        icon={['far', 'chart-bar']}
                                        className="font-size-xl"
                                          />
                                        <br/>
                                        Analytics</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="returns-tab" data-toggle="tab" href="#Drivers" role="tab" aria-controls="returns" aria-selected="false">
                                        <FontAwesomeIcon
                                            icon={['fas', 'car']}
                                            className="font-size-xl"
                                        />
                                        <br/>
                                        My Favorite Drivers </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="price-tab" data-toggle="tab" href="#SendPackage" role="tab" aria-controls="price" aria-selected="false">
                                        <FontAwesomeIcon
                                            icon={['fa', 'paper-plane']}
                                            className="font-size-xl"
                                        />
                                        <br/>
                                    Send Package</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" id="price-tab" data-toggle="tab" href="#Packages" role="tab" aria-controls="price" aria-selected="false">
                                        <FontAwesomeIcon
                                            icon={['fas', 'box']}
                                            className="font-size-xl"
                                        />
                                        <br/>
                                        My Packages</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" id="price-tab" data-toggle="tab" href="#Payments" role="tab" aria-controls="price" aria-selected="false">
                                        <FontAwesomeIcon
                                            icon={['fa', 'credit-card']}
                                            className="font-size-xl"
                                        />
                                        <br/>
                                        My Payments</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="price-tab" data-toggle="tab" href="#Profile" role="tab" aria-controls="price" aria-selected="false">
                                        <FontAwesomeIcon
                                            icon={['fa', 'user-edit']}
                                            className="font-size-xl"
                                        />
                                        <br/>
                                        Edit Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="price-tab" data-toggle="tab" href="#Security" role="tab" aria-controls="price" aria-selected="false">
                                        <FontAwesomeIcon
                                            icon={['fa', 'user-secret']}
                                            className="font-size-xl"
                                        />
                                        <br/>
                                        Security</a>
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
                                    <MyPackages customer={props.customer} />
                            </div>
                            <div className="tab-pane fade" id="Payments" role="tabpanel" aria-labelledby="price-tab">
                                    <CustomerOperationsPayments payments={props.customer.payments}/>
                            </div>

                            <div className="tab-pane fade" id="SendPackage" role="tabpanel" aria-labelledby="price-tab">
                                    <PackagesForm/>
                            </div>

                            <div className="tab-pane fade" id="Profile" role="tabpanel" aria-labelledby="price-tab">
                                <EditProfileCustomerForm id={props.customer._id}/>
                            </div>

                            <div className="tab-pane fade" id="Security" role="tabpanel" aria-labelledby="price-tab">
                                <ChangePasswordCustomer id={props.customer._id}/>
                                <DisableAccountCustomer id={props.customer._id}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CustomerInterfaceBody;