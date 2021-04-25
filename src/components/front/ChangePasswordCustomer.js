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


const ChangePasswordCustomer = (props) => {
    const [error,setError] = useState({visible: false,message: ""});
    const [success,setSuccess] = useState(false);


    const formik = useFormik({
        initialValues:{
            currentPassword: "",
            password: "",
            passwordConfirmation: "",
        },validationSchema:YupSchema,
        onSubmit: async (values) =>{
            console.log(values);
            const [res,err] = await queryServerApi("customers/updatePassword/" +props.id, values,"PUT",false);
            if (res === "WrongPassword"){
                setError({
                    visible: true,
                    message: "Wrong Password",
                });
            }
            else if (res === "PasswordUpdated"){
                setSuccess(true);
            }
            else {
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            }
        }
    });




    return (
        <Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={12}>
                    <Card className="p-4 mb-4">
                        <div className="font-size-lg font-weight-bold">Change Password</div>
                        <Divider className="my-4" />


                        {!success ? (
                        <form onSubmit={formik.handleSubmit}>


                            <FormGroup>
                                {error.visible && <MuiAlert className="mb-4" severity="error">
                                    <div className="d-flex align-items-center align-content-center">
                                         <span>
                                         <strong className="d-block">Danger!</strong> {error.message}
                                         </span>
                                    </div>
                                    <br/>
                                    <br/>
                                </MuiAlert>}

                                {!formik.isValid &&
                                <MuiAlert className="mb-4" severity="error">
                                    <div className="d-flex align-items-center align-content-center">
                                         <span>
                                         <strong className="d-block">Danger!</strong> Check out the form again
                                         </span>
                                    </div>
                                </MuiAlert>}


                                <div className="form-group text_box">
                                    <label className="f_p text_c f_400">Current Password</label>
                                    <input type="password" placeholder="******"
                                           id="currentPassword"
                                           value={formik.values.currentPassword}
                                           onChange={formik.handleChange}
                                    />
                                    {formik.errors.currentPassword && formik.touched.currentPassword && (
                                        <FormHelperText error={formik.errors.currentPassword || error.visible}>{formik.errors.currentPassword}</FormHelperText>
                                    )}
                                </div>


                                <div className="form-group text_box">
                                    <label className="f_p text_c f_400">Current Password</label>
                                    <input type="password" placeholder="******"
                                           id="password"
                                           value={formik.values.password}
                                           onChange={formik.handleChange}
                                    />
                                    {formik.errors.password && formik.touched.password && (
                                        <FormHelperText error={formik.errors.password}>{formik.errors.password}</FormHelperText>
                                    )}
                                </div>

                                <div className="form-group text_box">
                                    <label className="f_p text_c f_400">Confirm Password</label>
                                    <input
                                        type="password"
                                        placeholder="******"
                                        id="passwordConfirmation"
                                        value={formik.values.passwordConfirmation}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && (
                                        <FormHelperText error={formik.errors.passwordConfirmation}>{formik.errors.passwordConfirmation}</FormHelperText>
                                    )}
                                </div>
                            </FormGroup>


                            <p></p>
                            <Button className="m-2" variant="contained" color="primary" type="submit">
                                Change
                            </Button>


                        </form>
                            ):
                            (
                                <MuiAlert className="mb-4" severity="success">
                                    <div className="d-flex align-items-center align-content-center">
                                             <span>
                                                <strong className="d-block">Done!</strong> Password Updated!
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
    currentPassword: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),
    password: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default ChangePasswordCustomer;
