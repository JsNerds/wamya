import React, {Fragment, useState} from 'react';
import * as Yup from "yup";


import {
    Grid,
    Card,
    FormHelperText,
    Divider,
    FormGroup,
    Button

} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import {useFormik} from "formik";
import {queryServerApi} from "../../utils/queryServerApi";
import MuiAlert from "@material-ui/lab/Alert";
import {useHistory} from "react-router";


const DisableAccountCompany = (props) => {
    const history = useHistory();
    const [error,setError] = useState({visible: false,message: ""});
    const [success,setSuccess] = useState(false);

    const Logout = () => {
        setTimeout(() => {
            localStorage.clear();
            history.go(0);
            }, 3000);

    };

    const formik = useFormik({
        initialValues:{
            passwordD: "",
        },validationSchema:YupSchema,
        onSubmit: async (values) =>{
            console.log(values);
            const [res,err] = await queryServerApi("entreprises/DisableAccount/"+props.id, values,"PUT",false);
            if (res === "WrongPassword"){
                setError({
                    visible: true,
                    message: "Wrong Password",
                });
            }
            else if (res === "Deleted"){
                setSuccess(true);
                Logout();
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
                        <div className="font-size-lg font-weight-bold">Disable Account</div>
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
                                    <label className="f_p text_c f_400">Password</label>
                                    <input type="password" placeholder="******"
                                           id="passwordD"
                                           value={formik.values.passwordD}
                                           onChange={formik.handleChange}
                                    />
                                    {formik.errors.passwordD && formik.touched.passwordD && (
                                        <FormHelperText error={formik.errors.passwordD}>{formik.errors.passwordD}</FormHelperText>
                                    )}
                                </div>

                            </FormGroup>

                            <p/>
                            <Button className="m-2" variant="contained" color="primary" type="submit">
                                Disable
                            </Button>


                        </form>
                            ):
                            (
                                <MuiAlert className="mb-4" severity="success">
                                    <div className="d-flex align-items-center align-content-center">
                                             <span>
                                                <strong className="d-block">Done!</strong> Account Disabled!
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
    passwordD: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),

});

export default DisableAccountCompany;
