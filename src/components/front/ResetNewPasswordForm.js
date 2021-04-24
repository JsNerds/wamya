import React, {Component, useState} from 'react';
import {useFormik} from "formik";
import {queryServerApi} from "../../utils/queryServerApi";
import * as Yup from "yup";
import MuiAlert from "@material-ui/lab/Alert";
import {FormHelperText} from "@material-ui/core";
import {useParams} from "react-router";


function ResetPasswordForm () {
    const [error,setError] = useState({visible: false,message: ""});
    const [success,setSuccess] = useState(false);
    const {id} = useParams();
    const formik = useFormik({
        initialValues:{
            Code:"",
            id:id,
            password: "",
            passwordConfirmation: "",
        },validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("VAL",values);
            const [res, err] = await queryServerApi("users/resetPassword/confirmation", values, "POST", false);
            if (res === "WrongCode"){
                setError({
                    visible: true,
                    message: "Wrong Code",
                });
            }
            else if (res === "SendAgain"){
                setError({
                    visible: true,
                    message: "something wrong Try Again",
                });
            }
            else if(res === "PasswordUpdated"){
                setSuccess(true);
            }
            else {
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors),
                });
            }
        },
    });


        return(
            <section className="contact_info_area sec_pad bg_color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Chek your Email</h6>
                                <p className="f_400 f_size_15">Melbourne’s GPO 434 Bourke St. Dhaka VIC 3074, Australia</p>
                            </div>
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a href="tel:3024437488">(+096) 302 443 7488</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Fax:</span> <a href="tel:3024437488">(+096) 204 353 6684</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a href="mailto:saasland@gmail.com">saasland@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="contact_form col-lg-9">
                            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Enter your Code and your new password </h2>


                            {!success ? (
                            <form onSubmit={formik.handleSubmit} >


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
                                    <br/>
                                    <br/>
                                </MuiAlert>}

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text"  id="Code" placeholder="Your Code"
                                                   value={formik.values.Code}
                                                   onChange={formik.handleChange}
                                            />
                                            {formik.errors.Code && formik.touched.Code && (
                                                <FormHelperText error={formik.errors.Code}>{formik.errors.Code}</FormHelperText>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group text_box">
                                    <label className="f_p text_c f_400">Password</label>
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
                                <button type="submit" className="btn_three">Reset</button>
                            </form>
                                ) :
                                <MuiAlert className="mb-4" severity="success">
                                    <div className="d-flex align-items-center align-content-center">
                                             <span>
                                                <strong className="d-block">Congrats!</strong> Password Updated successfully!
                                             </span>
                                    </div>
                                </MuiAlert>

                            }
                        </div>
                    </div>
                    
                </div>
            </section>
        )

}

const YupSchema = Yup.object ({
    Code: Yup.string()
        .min(4 | " your code should be 4 characters")
        .max(4 | "your code should be 4 characters")
        .required("the code is required"),
    password: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default ResetPasswordForm;

