import React, {Fragment, useEffect, useState} from 'react';

import clsx from 'clsx';

import {
    Grid,
    Input,
    Card,
    FormControl,
    FormHelperText,
    Divider
    , InputLabel
    , InputBase, FormGroup, InputAdornment, TextField, Button

} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {useFormik} from "formik";
import {useHistory} from "react-router";
import {queryServerApi} from "../../utils/queryServerApi";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FilledInput from "@material-ui/core/FilledInput";


const UpdateCustomerForm = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [error,setError] = useState({visible: false,message: ""});

    const formik = useFormik({
        initialValues:{
            cin: 0,
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            phoneNumber: 0,
            street: "",
            city: "",
            zipCode: 0
        },
        onSubmit: async (values) =>{
            console.log(values);
            const [,err] = await queryServerApi("customers/update/" +props.id, values,"PUT",false);
            if(err){
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            }
            else history.push("/Customers")
        }
    });

    const Reset= ()=>{
        async function fetchDataForm() {
            const [res, err] = await queryServerApi("customers/"+ props.id);
            setError({
                visible: true,
                message: JSON.stringify(err?.errors, null, 2),
            });
            formik.setValues({
                cin: res.Cin,
                firstname: res.FirstName,
                lastname: res.LastName,
                username: res.UserName,
                email: res.Email,
                phoneNumber: res.PhoneNumber,
                street: res.Adress.Street,
                city: res.Adress.City,
                zipCode: res.Adress.ZipCode
            });
        }
        fetchDataForm();
    }

    useEffect(()=>{
        console.log("id child",props.id)
        async function fetchDataForm() {
            const [res, err] = await queryServerApi("customers/"+ props.id);
            setError({
                visible: true,
                message: JSON.stringify(err?.errors, null, 2),
            });
            formik.setValues({
                cin: res.Cin,
                firstname: res.FirstName,
                lastname: res.LastName,
                username: res.UserName,
                email: res.Email,
                phoneNumber: res.PhoneNumber,
                street: res.Adress.Street,
                city: res.Adress.City,
                zipCode: res.Adress.ZipCode
            });
        }
        fetchDataForm();
        // eslint-disable-next-line
    },[props.id]);


    return (
        <Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                    <Card className="p-4 mb-4">
                        <div className="font-size-lg font-weight-bold">Customer</div>
                        <Divider className="my-4" />

                        <form onSubmit={formik.handleSubmit}>
                            <FormGroup>
                                <InputLabel>Informations</InputLabel>

                                <FormControl
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="filled">
                                    <FilledInput
                                        id="cin"
                                        value={formik.values.cin}
                                        onChange={formik.handleChange}
                                        aria-describedby="filled-weight-helper-text"
                                        type="number"
                                        disabled="true"
                                        inputProps={{
                                            'aria-label': 'cin'
                                        }}
                                    />
                                    <FormHelperText id="filled-weight-helper-text">
                                        CIN
                                    </FormHelperText>
                                </FormControl>


                                <FormControl className="w-100 m-2">
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                       Username
                                    </InputLabel>
                                    <Input
                                        id="username"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        }
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                    />
                                </FormControl>
                            </FormGroup>


                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined">
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            fullWidth
                                            id="firstname"
                                            label="First Name"
                                            value={formik.values.firstname}
                                            onChange={formik.handleChange}
                                        />
                                    </Grid>
                                </Grid>
                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined">
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            fullWidth
                                            id="lastname"
                                            label="Last name"
                                            value={formik.values.lastname}
                                            onChange={formik.handleChange}
                                        />
                                    </Grid>
                                </Grid>
                            </FormControl>



                            <FormGroup>
                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined">
                                <TextField
                                    fullWidth
                                    className="m-2"
                                    id="email"
                                    label="Email"
                                    placeholder="test.test@gmail.com"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    multiline
                                />
                            </FormControl>


                                <FormControl
                                    className={clsx(
                                        classes.margin,
                                        classes.withoutLabel,
                                        classes.textField
                                    )}>
                                    <Input
                                        id="phoneNumber"
                                        value={formik.values.phoneNumber}
                                        onChange={formik.handleChange}

                                        aria-describedby="standard-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'phoneNumber'
                                        }}
                                    />
                                    <FormHelperText id="standard-weight-helper-text">
                                        Phone Number
                                    </FormHelperText>
                                </FormControl>
                            </FormGroup>


                            <p></p>
                            <InputLabel>Address</InputLabel>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined">
                                <OutlinedInput
                                    id="street"
                                    value={formik.values.street}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'street'
                                    }}
                                    labelWidth={0}
                                    onChange={formik.handleChange}

                                />
                                <FormHelperText id="outlined-weight-helper-text">
                                    Street
                                </FormHelperText>
                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined">
                                <OutlinedInput
                                    id="city"
                                    value={formik.values.city}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'city'
                                    }}
                                    labelWidth={0}
                                    onChange={formik.handleChange}

                                />
                                <FormHelperText id="outlined-weight-helper-text">
                                    City
                                </FormHelperText>
                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined">
                                <OutlinedInput
                                    id="zipCode"
                                    value={formik.values.zipCode}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'zipCode'
                                    }}
                                    labelWidth={0}
                                    onChange={formik.handleChange}
                                />
                                <FormHelperText id="outlined-weight-helper-text">
                                    Zip Code
                                </FormHelperText>
                            </FormControl>
                            <p></p>
                            <Button className="m-2" variant="contained" color="primary" type="submit">
                                Update
                            </Button>
                            <Button className="m-2" variant="contained" color="secondary" onClick={Reset}>
                                Reset
                            </Button>

                        </form>

                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    );
};


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    margin: {
        margin: theme.spacing(1)
    },
    withoutLabel: {
        marginTop: theme.spacing(3)
    },
    textField: {
        width: 200
    }
}));


export default UpdateCustomerForm;
