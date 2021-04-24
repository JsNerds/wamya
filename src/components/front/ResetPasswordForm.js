import React, {Component, useState} from 'react';
import {useFormik} from "formik";
import {queryServerApi} from "../../utils/queryServerApi";
import {useHistory} from "react-router-dom";
import * as Yup from "yup";
import MuiAlert from "@material-ui/lab/Alert";

function ResetPasswordForm () {
    const [error,setError] = useState({visible: false,message: ""});
    const [success,setSuccess] = useState(false);
    const formik = useFormik({
        initialValues:{
            Email: "",
        },validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("EMAIL",values);
            const [res, err] = await queryServerApi("users/resetPassword", values, "POST", false);

            if(res === "UserNotExist"){
                setError({
                    visible: true,
                    message: "User donsen't exist",
                });
            }
            else if (res === "EmailAlreadySent"){
                setError({
                    visible: true,
                    message: "Email to reset password was already sent! CHECK YOUR EMAIL AGAIN",
                });
            }
            else if(res === "EmailSended"){
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
                            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Enter your Email </h2>


                            {!success ? (
                            <form onSubmit={formik.handleSubmit} >
                                {error.visible && <MuiAlert className="mb-4" severity="error">
                                    <div className="d-flex align-items-center align-content-center">
                                         <span>
                                         <strong className="d-block">Danger!</strong> {error.message}
                                         </span>
                                    </div>
                                </MuiAlert>}
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text"  id="Email" placeholder="Your Email"
                                                   value={formik.values.Email}
                                                   onChange={formik.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn_three">Reset</button>
                            </form>
                                ) :
                                <MuiAlert className="mb-4" severity="success">
                                    <div className="d-flex align-items-center align-content-center">
                                             <span>
                                                <strong className="d-block">Done!</strong> Please check your email in order to reset your password!
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
});

export default ResetPasswordForm;

