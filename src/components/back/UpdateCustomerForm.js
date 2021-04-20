import React, {Fragment, useEffect, useState} from 'react';
import * as Yup from "yup";

import clsx from 'clsx';

import {
    Grid,
    Input,
    Card,
    FormControl,
    FormHelperText,
    Divider,
    InputLabel,
    FormGroup,
    InputAdornment,
    TextField,
    Button

} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {useFormik} from "formik";
import {useHistory} from "react-router";
import {queryServerApi} from "../../utils/queryServerApi";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FilledInput from "@material-ui/core/FilledInput";
import MuiAlert from "@material-ui/lab/Alert";


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
        validationSchema:YupSchema,
        onSubmit: async (values) =>{
            console.log(values);
            const [,err] = await queryServerApi("customers/update/" +props.id, values,"PUT",true);
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
                                {error.visible && <span>{error.message}</span>}

                                {!formik.isValid &&
                                <MuiAlert className="mb-4" severity="error">
                                    <div className="d-flex align-items-center align-content-center">
                                         <span>
                                         <strong className="d-block">Danger!</strong> Check out the form again
                                         </span>
                                    </div>
                                </MuiAlert>}

                            </FormGroup>

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


                                <FormControl className="w-100 m-2"
                                             error={formik.errors.username && formik.touched.username} component="fieldset">
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
                                    {formik.errors.username && formik.touched.username && (
                                        <FormHelperText>{formik.errors.username}</FormHelperText>
                                    )}
                                </FormControl>

                            </FormGroup>


                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                 error={formik.errors.firstname && formik.touched.firstname} component="fieldset">
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
                                {formik.errors.firstname && formik.touched.firstname && (
                                    <FormHelperText>{formik.errors.firstname}</FormHelperText>
                                )}

                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.lastname && formik.touched.lastname} component="fieldset">

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
                                {formik.errors.lastname && formik.touched.lastname && (
                                    <FormHelperText>{formik.errors.lastname}</FormHelperText>
                                )}
                            </FormControl>



                            <FormGroup>
                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.email && formik.touched.email} component="fieldset">

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
                                {formik.errors.email && formik.touched.email && (
                                    <FormHelperText>{formik.errors.email}</FormHelperText>
                                )}
                            </FormControl>


                                <FormControl
                                    className={clsx(
                                        classes.margin,
                                        classes.withoutLabel,
                                        classes.textField
                                    )}
                                    error={formik.errors.phoneNumber && formik.touched.phoneNumber} component="fieldset">
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Phone Number
                                    </InputLabel>
                                    <Input
                                        id="phoneNumber"
                                        value={formik.values.phoneNumber}
                                        onChange={formik.handleChange}

                                        aria-describedby="standard-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'phoneNumber'
                                        }}
                                    />
                                    {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                        <FormHelperText>{formik.errors.phoneNumber}</FormHelperText>
                                    )}
                                </FormControl>
                            </FormGroup>


                            <div className="form-group text_box">
                                <label className="f_p text_c f_400"> <strong>Upload your Profile picture : </strong></label><br/>

                                <Input
                                    id="fileinput"
                                    type="file"
                                    name="img"
                                    onChange={(event) => {
                                        formik.setFieldValue("img", event.target.files[0]);
                                    }}/>
                                {formik.errors.image && formik.touched.image && (
                                    <FormHelperText error={formik.errors.image}>{formik.errors.image}</FormHelperText>
                                )}
                            </div>


                            <p></p>
                            <InputLabel>Address</InputLabel>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.street && formik.touched.street} component="fieldset">

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
                                {formik.errors.street && formik.touched.street && (
                                    <FormHelperText>{formik.errors.street}</FormHelperText>
                                )}
                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.city && formik.touched.city} component="fieldset">

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
                                {formik.errors.city && formik.touched.city && (
                                    <FormHelperText>{formik.errors.city}</FormHelperText>
                                )}
                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.zipCode && formik.touched.zipCode} component="fieldset">

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
                                {formik.errors.zipCode && formik.touched.zipCode && (
                                    <FormHelperText>{formik.errors.zipCode}</FormHelperText>
                                )}
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

const YupSchema = Yup.object ({
    firstname: Yup.string()
        .required("First Name is Required"),
    username: Yup.string()
        .required("Username is Required"),
    lastname: Yup.string()
        .required("Last Name is Required"),
    email: Yup.string()
        .email("No valid Email ")
        .required("email is Required"),
    phoneNumber: Yup.number("Phone Number should be a number")
        .positive("Phone Number should be Positive")
        .required("phone number is Required"),
    street: Yup.string()
        .required("street is required"),
    city: Yup.string()
        .required("city is required"),
    zipCode: Yup.number("Zip Code should be a number")
        .positive("Zip Code should be Positive")
        .required("Zip Code is Required")
});

export default UpdateCustomerForm;
