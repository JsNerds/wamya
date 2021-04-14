import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    IconButton,
    LinearProgress,
    Card,
    CardContent,
    Button,
    Tooltip
} from '@material-ui/core';
import {queryServerApi} from "../../utils/queryServerApi";
import {useHistory} from "react-router";

export default function EntreprisesTable(props) {
    const history = useHistory();


    const UpdateCompany= (company) =>{
        history.replace("/UpdateCompany/"+ company._id)
    }


    const deleteCompany = async (id) => {
        const [err] = await queryServerApi("entreprises/remove/" + id, {}, "DELETE");
        if (err) {
            console.log(err);
        } history.go(0);
    };

    return (
        <Fragment>
            <Card className="card-box mb-4">
                <div className="card-header pr-2">
                    <div className="card-header--title">Employees status</div>
                    <div className="card-header--actions">
                        <Tooltip arrow title="Refresh">
                            <IconButton size="small" color="primary" className="mr-3">
                                <FontAwesomeIcon icon={['fas', 'cog']} spin />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <CardContent className="p-3">
                    <div className="table-responsive">
                        <table className="table table-borderless table-hover text-nowrap mb-0">
                            <thead>
                            <tr>
                                <th>Denomination</th>
                                <th className="text-left">Responsible</th>
                                <th className="text-center">Subscription</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Headquarters Address</th>
                                <th className="text-center">Phone Number</th>
                                <th className="text-center">Actions</th>
                                <th className="text-center"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.companies?.map((company,index) => (
                                <tr key={index}>
                                    <td>
                                        {company.Denomination}
                                    </td>
                                    <td>
                                        <div>
                                            <a
                                                href="#/"
                                                onClick={e => e.preventDefault()}
                                                className="font-weight-bold text-black"
                                                title="...">
                                                {company.ResponsibleName}
                                            </a>
                                            <span className="text-black-50 d-block">
                                           CIN : {company.ResponsibleCin}
                                        </span>
                                        </div>
                                    </td>

                                    {Date.parse(company.SubscriptionExpirationDate) > Date.now() ? (
                                        <td className="text-center">
                                            <div className="badge badge-success px-4">Subscribed</div>
                                        </td>
                                    ):
                                        <td className="text-center">
                                            <div className="badge badge-danger px-4">Expired</div>
                                        </td>
                                    }

                                    <td>
                                        {company.Email}
                                    </td>

                                    <td>
                                        {company.HeadquartersAddress.City} , {company.HeadquartersAddress.Street}
                                    </td>

                                    <td>
                                        {company.PhoneNumber}
                                    </td>
                                    <td className="text-center">
                                        <Button
                                            size="small"
                                            variant="contained"
                                            className="mr-3"
                                            color="primary" onClick={() => UpdateCompany(company) }>
                                            Update
                                        </Button>
                                        <Button size="small" variant="contained" color="secondary" onClick={()=> deleteCompany(company._id)}>
                                            Delete
                                        </Button>
                                    </td>

                                    <td className="text-center">
                                        <Tooltip arrow title="View Details">
                                            <IconButton
                                                size="small"
                                                variant="outlined"
                                                color="primary">
                                                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                            </IconButton>
                                        </Tooltip>
                                    </td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
                <div className="card-footer d-flex justify-content-between">
                    <Button color="primary" size="small">
                        Delete All
                    </Button>
                </div>
            </Card>
        </Fragment>
    );
}
