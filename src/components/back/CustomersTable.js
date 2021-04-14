import React, {Fragment, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    Avatar,
    IconButton,
    Box,
    Card,
    CardContent
} from '@material-ui/core';

import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import {queryServerApi} from "../../utils/queryServerApi";
import {useHistory} from "react-router";

export default function CustomersTable(props) {
    const history = useHistory();

    const UpdateCustomer= (customer) =>{
        history.replace("/UpdateCustomer/"+ customer._id)
    }


    const deleteCustomer = async (id) => {
        const [err] = await queryServerApi("customers/removeById/" + id, {}, "DELETE");
        if (err) {
            console.log(err);
        } history.go(0);
    };

    useEffect(()=>{
        console.log(props.customers);
    },[props.customers])


    return (
        <Fragment>
            <Card className="card-box mb-4">
                <div className="card-header">
                    <div className="card-header--title">
                        <small>Tables</small>
                        <b>Customers</b>
                    </div>
                    <Box className="card-header--actions">
                        <IconButton
                            size="small"
                            color="primary"
                            className="text-primary"
                            title="View details">
                            <FontAwesomeIcon
                                icon={['far', 'keyboard']}
                                className="font-size-lg"
                            />
                        </IconButton>
                    </Box>
                </div>
                <CardContent className="p-0">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover text-nowrap mb-0">
                            <thead className="thead-light">
                            <tr>
                                <th style={{ width: '40%' }}>Customer</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Address</th>
                                <th className="text-center">Phone Number</th>
                                <th className="text-center">Actions</th>
                            </tr>
                            </thead>


                            <tbody>

                            {props.customers?.map((customer, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Avatar alt="..." src={avatar2} className="mr-2" />
                                            <div>
                                                <a
                                                    href="#/"
                                                    onClick={e => e.preventDefault()}
                                                    className="font-weight-bold text-black"
                                                    title="...">
                                                    {customer.FirstName} {customer.LastName}
                                                </a>
                                                     <span className="text-black-50 d-block">
                                                          CIN : {customer.Cin} | Username : {customer.UserName}
                                                     </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div >
                                            {customer.Email}
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div >
                                            {customer.Adress.Street}, {customer.Adress.City}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div >
                                            {customer.PhoneNumber}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <button className="h-auto py-0 px-3 badge badge-warning" onClick={()=>UpdateCustomer(customer)}>
                                            Update
                                        </button>
                                        <br/>
                                        <button className="h-auto py-0 px-3 badge badge-danger" onClick={()=> deleteCustomer(customer._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>


                            ))}




                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

        </Fragment>
    );
}
