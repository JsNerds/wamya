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


const EditProfileCompanyForm = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [error,setError] = useState({visible: false,message: ""});
    const [success,setSuccess] = useState(false);


    const formik = useFormik({
        initialValues:{
            ResponsibleCin: "",
            ResponsibleName: "",
            CreationYear: "",
            CommercialName: "",
            Activity: "",
            Street: "",
            City: "",
            ZipCode: "",
            RegisterStatus: "",
            RegionalOffice: "",
            Denomination: "",
            TaxSituation: "",
            Email: "",
            PhoneNumber: ""
        },validationSchema:YupSchema,
        onSubmit: async (values) =>{
            console.log(values);
            const [,err] = await queryServerApi("entreprises/update/" +props.id, values,"PUT",true);
            if(err){
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            }
            else setSuccess(true);
        }
    });

    const Reset= ()=>{
        async function fetchDataForm() {
            const [res, err] = await queryServerApi("entreprises/"+ props.id);
            setError({
                visible: true,
                message: JSON.stringify(err?.errors, null, 2),
            });
            formik.setValues({
                ResponsibleCin: res.ResponsibleCin,
                ResponsibleName: res.ResponsibleName,
                CreationYear: res.CreationYear,
                CommercialName: res.CommercialName,
                Activity: res.Activity,
                Street: res.HeadquartersAddress.Street,
                City: res.HeadquartersAddress.City,
                ZipCode: res.HeadquartersAddress.ZipCode,
                RegisterStatus: res.RegisterStatus,
                RegionalOffice: res.RegionalOffice,
                Denomination: res.Denomination,
                TaxSituation: res.TaxSituation,
                Email: res.Email,
                PhoneNumber: res.PhoneNumber
            });
        }
        fetchDataForm();
    }

    useEffect(()=>{
        console.log("id child",props.id)
        async function fetchDataForm() {
            const [res, err] = await queryServerApi("entreprises/"+ props.id);
            setError({
                visible: true,
                message: JSON.stringify(err?.errors, null, 2),
            });
            formik.setValues({
                ResponsibleCin: res.ResponsibleCin,
                ResponsibleName: res.ResponsibleName,
                CreationYear: res.CreationYear,
                CommercialName: res.CommercialName,
                Activity: res.Activity,
                Street: res.HeadquartersAddress.Street,
                City: res.HeadquartersAddress.City,
                ZipCode: res.HeadquartersAddress.ZipCode,
                RegisterStatus: res.RegisterStatus,
                RegionalOffice: res.RegionalOffice,
                Denomination: res.Denomination,
                TaxSituation: res.TaxSituation,
                Email: res.Email,
                PhoneNumber: res.PhoneNumber
            });
        }
        fetchDataForm();
        // eslint-disable-next-line
    },[props.id]);


    return (
        <Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={12}>
                    <Card className="p-4 mb-4">
                        <div className="font-size-lg font-weight-bold">Company</div>
                        <Divider className="my-4" />


                        {!success ? (
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
                                        id="ResponsibleCin"
                                        value={formik.values.ResponsibleCin}
                                        onChange={formik.handleChange}
                                        aria-describedby="filled-weight-helper-text"
                                        type="number"
                                        inputProps={{
                                            'aria-label': 'cin'
                                        }}
                                    />
                                    <FormHelperText id="filled-weight-helper-text">
                                        Responsible CIN
                                    </FormHelperText>
                                </FormControl>


                                <FormControl className="w-100 m-2"
                                             error={formik.errors.ResponsibleName && formik.touched.ResponsibleName} component="fieldset">
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Responsible Name
                                    </InputLabel>
                                    <Input
                                        id="ResponsibleName"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        }
                                        value={formik.values.ResponsibleName}
                                        onChange={formik.handleChange}
                                        error={formik.errors.ResponsibleName && formik.touched.ResponsibleName}
                                    />
                                    {formik.errors.ResponsibleName && formik.touched.ResponsibleName && (
                                        <FormHelperText>{formik.errors.ResponsibleNames}</FormHelperText>
                                    )}
                                </FormControl>

                            </FormGroup>


                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                 error={formik.errors.Denomination && formik.touched.Denomination} component="fieldset">
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            fullWidth
                                            id="Denomination"
                                            label="Denomination"
                                            value={formik.values.Denomination}
                                            onChange={formik.handleChange}
                                        />
                                    </Grid>
                                </Grid>
                                {formik.errors.Denomination && formik.touched.Denomination && (
                                    <FormHelperText>{formik.errors.Denomination}</FormHelperText>
                                )}

                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.CommercialName && formik.touched.CommercialName} component="fieldset">

                            <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            fullWidth
                                            id="CommercialName"
                                            label="Commercial Name"
                                            value={formik.values.CommercialName}
                                            onChange={formik.handleChange}
                                        />
                                    </Grid>
                                </Grid>
                                {formik.errors.CommercialName && formik.touched.CommercialName && (
                                    <FormHelperText>{formik.errors.CommercialName}</FormHelperText>
                                )}
                            </FormControl>



                            <FormGroup>
                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.Email && formik.touched.Email} component="fieldset">

                            <TextField
                                    fullWidth
                                    className="m-2"
                                    id="Email"
                                    label="Email"
                                    placeholder="test.test@gmail.com"
                                    value={formik.values.Email}
                                    onChange={formik.handleChange}
                                    multiline
                                />
                                {formik.errors.Email && formik.touched.Email && (
                                    <FormHelperText>{formik.errors.Email}</FormHelperText>
                                )}
                            </FormControl>


                                <FormControl
                                    className={clsx(
                                        classes.margin,
                                        classes.withoutLabel,
                                        classes.textField
                                    )}
                                    error={formik.errors.PhoneNumber && formik.touched.PhoneNumber} component="fieldset">
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Phone Number
                                    </InputLabel>
                                    <Input
                                        id="PhoneNumber"
                                        value={formik.values.PhoneNumber}
                                        onChange={formik.handleChange}

                                        aria-describedby="standard-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'PhoneNumber'
                                        }}
                                    />
                                    {formik.errors.PhoneNumber && formik.touched.PhoneNumber && (
                                        <FormHelperText>{formik.errors.PhoneNumber}</FormHelperText>
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
                            <InputLabel>Other Details</InputLabel>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.CreationYear && formik.touched.CreationYear} component="fieldset">

                                <input
                                    id="street"
                                    type="date"
                                    aria-describedby="outlined-weight-helper-text"
                                    onChange={formik.handleChange}

                                />
                                <FormHelperText id="outlined-weight-helper-text">
                                    Creation year
                                </FormHelperText>
                                {formik.errors.CreationYear && formik.touched.CreationYear && (
                                    <FormHelperText>{formik.errors.CreationYear}</FormHelperText>
                                )}
                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.Activity && formik.touched.Activity} component="fieldset">

                                <OutlinedInput
                                    id="city"
                                    value={formik.values.Activity}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'Activity'
                                    }}
                                    labelWidth={0}
                                    onChange={formik.handleChange}

                                />
                                <FormHelperText id="outlined-weight-helper-text">
                                    Activity
                                </FormHelperText>
                                {formik.errors.Activity && formik.touched.Activity && (
                                    <FormHelperText>{formik.errors.Activity}</FormHelperText>
                                )}
                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.TaxSituation && formik.touched.TaxSituation} component="fieldset">

                                <OutlinedInput
                                    id="TaxSituation"
                                    value={formik.values.TaxSituation}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'TaxSituation'
                                    }}
                                    labelWidth={0}
                                    onChange={formik.handleChange}
                                />
                                <FormHelperText id="outlined-weight-helper-text">
                                    Tax Situation
                                </FormHelperText>
                                {formik.errors.TaxSituation && formik.touched.TaxSituation && (
                                    <FormHelperText>{formik.errors.RegionalOffice}</FormHelperText>
                                )}
                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.RegisterStatus && formik.touched.RegisterStatus} component="fieldset">

                                <OutlinedInput
                                    id="RegisterStatus"
                                    value={formik.values.RegisterStatus}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'RegisterStatus'
                                    }}
                                    labelWidth={0}
                                    onChange={formik.handleChange}
                                />
                                <FormHelperText id="outlined-weight-helper-text">
                                    Register Status
                                </FormHelperText>
                                {formik.errors.RegisterStatus && formik.touched.RegisterStatus && (
                                    <FormHelperText>{formik.errors.RegisterStatus}</FormHelperText>
                                )}
                            </FormControl>


                            <p></p>
                            <InputLabel>Address</InputLabel>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.Street && formik.touched.Street} component="fieldset">

                            <OutlinedInput
                                    id="Street"
                                    value={formik.values.Street}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'Street'
                                    }}
                                    labelWidth={0}
                                    onChange={formik.handleChange}

                                />
                                <FormHelperText id="outlined-weight-helper-text">
                                    Street
                                </FormHelperText>
                                {formik.errors.Street && formik.touched.Street && (
                                    <FormHelperText>{formik.errors.street}</FormHelperText>
                                )}
                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.City && formik.touched.City} component="fieldset">

                            <OutlinedInput
                                    id="City"
                                    value={formik.values.City}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'City'
                                    }}
                                    labelWidth={0}
                                    onChange={formik.handleChange}

                                />
                                <FormHelperText id="outlined-weight-helper-text">
                                    City
                                </FormHelperText>
                                {formik.errors.City && formik.touched.City && (
                                    <FormHelperText>{formik.errors.City}</FormHelperText>
                                )}
                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.RegionalOffice && formik.touched.RegionalOffice} component="fieldset">

                            <OutlinedInput
                                    id="RegionalOffice"
                                    value={formik.values.RegionalOffice}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'zipCode'
                                    }}
                                    labelWidth={0}
                                    onChange={formik.handleChange}
                                />
                                <FormHelperText id="outlined-weight-helper-text">
                                    Regional Office
                                </FormHelperText>
                                {formik.errors.RegionalOffice && formik.touched.RegionalOffice && (
                                    <FormHelperText>{formik.errors.RegionalOffice}</FormHelperText>
                                )}
                            </FormControl>

                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                error={formik.errors.ZipCode && formik.touched.ZipCode} component="fieldset">

                            <OutlinedInput
                                    id="ZipCode"
                                    value={formik.values.ZipCode}
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
                                {formik.errors.ZipCode && formik.touched.ZipCode && (
                                    <FormHelperText>{formik.errors.ZipCode}</FormHelperText>
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
                            ):
                            (
                                <MuiAlert className="mb-4" severity="success">
                                    <div className="d-flex align-items-center align-content-center">
                                             <span>
                                                <strong className="d-block">Done!</strong> We have updated your information now!
                                             </span>
                                    </div>
                                </MuiAlert>
                            )

                        }

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
    Street: Yup.string()
        .required("street is required"),
    City: Yup.string()
        .required("city is required"),
    ZipCode: Yup.number("Zip Code should be a number")
        .positive("Zip Code should be Positive")
        .required("Zip Code is Required"),
    ResponsibleCin: Yup.number("ResponsibleCin should be a number")
    .positive("ResponsibleCin should be Positive")
    .required("ResponsibleCin is Required"),
    ResponsibleName: Yup.string()
        .required("Responsibl eName is required"),
    CommercialName: Yup.string()
        .required("Commercial Name is required"),
    RegionalOffice: Yup.string()
        .required("Regional Office is required"),
    Denomination: Yup.string()
        .required("Denomination is required"),

    Email: Yup.string()
        .email("No valid Email ")
        .required("email is Required"),
    PhoneNumber: Yup.number("Phone Number should be a number")
        .positive("Phone Number should be Positive")
        .required("phone number is Required"),
});

export default EditProfileCompanyForm;
