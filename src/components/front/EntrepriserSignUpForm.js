import React, {useState} from 'react';
import {useHistory} from "react-router";
import {useFormik} from "formik";
import {queryServerApi} from "../../utils/queryServerApi";
import * as Yup from "yup";
import MuiAlert from "@material-ui/lab/Alert";
import {FormHelperText} from "@material-ui/core";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';




const EntrepriseSignUpForm =()=>{
    const history = useHistory();
    const [showTerms,setShowTerms] = useState(false);
    const [error,setError] = useState({
        visible: false,
        message: "",
        CinErr: false,
        DenominationErr: false,
        UserNameErr:false,
        EmailExist:false
    });
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
            Password:"",
            passwordConfirmation: "",
            PhoneNumber: "",
            acceptTerms: false
        },validationSchema:YupSchema,
        onSubmit: async (values) =>{
            console.log(values);
            const [res,err] = await queryServerApi("entreprises/addCompany", values,"POST",true);
            console.log(res);
            if(res === "DenominationExist"){
                setError({
                    visible: true,
                    message: "this company is already registred",
                    DenominationErr: true
                });
            }
           else if(res === "UserNameExist" ){
                setError({
                    visible: true,
                    message: "Respnsible Name already exist",
                    UserNameErr: true
                });
            }
            else if (res === "CinExist"){
                setError({
                    visible: true,
                    message: "Responsible Cin  already exist",
                    CinErr: true
                });
            }
            else if (res === "EmailExist"){
                setError({
                    visible: true,
                    message: "This email address is already registered. If it belongs to you, \n" +
                        "log in above or visit our account recovery page to get access to this account.",
                    EmailExist: true
                });
            }
            else if(err){
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            }
            else history.push("/Pricing/"+res)
        }
    });


    const Reset= ()=>{
        formik.setValues({
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
            Password:"",
            passwordConfirmation: "",
            PhoneNumber: ""
        });
    }

    const responseGoogle = (response) => {
        console.log(response);
        formik.setValues({
            ResponsibleCin: "",
            ResponsibleName: response.profileObj.familyName+response.profileObj.givenName,
            CreationYear: "",
            CommercialName: response.profileObj.name,
            Activity: "",
            Street: "",
            City: "",
            ZipCode: "",
            RegisterStatus: "",
            RegionalOffice: "",
            Denomination: "",
            TaxSituation: "",
            Email: response.profileObj.email,
            Password:"",
            passwordConfirmation: "",
            PhoneNumber: ""
        });

    }

    const responseErrorGoogle = (response) => {
        setError({
            visible: true,
            message: "Something wrong",
        });
    }

    const responseFacebook = (response) => {
        console.log(response);
        formik.setValues({
            ResponsibleCin: "",
            ResponsibleName: response.name,
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
            Email: response.email,
            Password:"",
            passwordConfirmation: "",
            PhoneNumber: ""
        });
    }

    const showTemrss = () => {
        setShowTerms(!showTerms);
    }

    const  nextPath = (path) => {
        history.push(path);
    }


    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">Allready have an account?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br/> starting using our <br/><span className="f_700">amazing</span> services</h2>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Subscribe and Send unlimit packages</li>
                                    <li><i className="ti-check"></i> Track your package</li>
                                    <li><i className="ti-check"></i> Notification of delivery time </li>

                                </ul>
                                <button onClick={() => nextPath("/SignInWamya")} className="btn_three sign_btn_transparent">Sign In</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="social_text d-flex ">
                                        <div className="lead-text">Sign up Using</div>
                                        <ul className="list-unstyled social_tag mb-0">
                                            <li>
                                                <GoogleLogin
                                                    clientId="991500253592-o6bt8lpeuisqg2fseal9uqhfqvft68k5.apps.googleusercontent.com"
                                                    buttonText="Google"
                                                    onSuccess={responseGoogle}
                                                    onFailure={responseErrorGoogle}
                                                    cookiePolicy={'single_host_origin'}
                                                /></li>
                                            <li>
                                                <FacebookLogin
                                                    size="Small"
                                                    appId="2762210330731766"
                                                    autoLoad={false}
                                                    fields="name,email,picture"
                                                    cssClass="btnFacebook"
                                                    icon="fa-facebook"
                                                    textButton="acebook"
                                                    callback={responseFacebook}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p></p>

                                <form  className="login-form sign-in-form" onSubmit={formik.handleSubmit}>

                                    <div>
                                        {error.visible && <MuiAlert className="mb-4" severity="error">
                                            <div className="d-flex align-items-center align-content-center">
                                         <span>
                                         <strong className="d-block">Danger!</strong> {error.message}
                                         </span>
                                            </div>
                                        </MuiAlert>}

                                        {!formik.isValid &&
                                        <MuiAlert className="mb-4" severity="error">
                                            <div className="d-flex align-items-center align-content-center">
                                         <span>
                                         <strong className="d-block">Danger!</strong> Check out the form again
                                         </span>
                                            </div>
                                        </MuiAlert>}

                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400"> Responsible (CIN)</label>
                                        <input
                                            id="ResponsibleCin"
                                            type="number"
                                            className="form-control"
                                            aria-label="Dollar amount (with dot and two decimal places)"
                                            value={formik.values.ResponsibleCin}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.ResponsibleCin && formik.touched.ResponsibleCin && (
                                            <FormHelperText error={formik.errors.ResponsibleCin}>{formik.errors.ResponsibleCin}</FormHelperText>
                                        )}
                                        {error.visible && error.CinErr && (
                                            <FormHelperText error={error.CinErr}>{error.message}</FormHelperText>
                                        )}

                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Responsible Name</label>
                                        <input
                                            id="ResponsibleName"
                                            type="text"
                                            placeholder="Responsible Name"
                                            value={formik.values.ResponsibleName}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.ResponsibleName && formik.touched.ResponsibleName && (
                                            <FormHelperText error={formik.errors.ResponsibleName}>{formik.errors.ResponsibleName}</FormHelperText>
                                        )}

                                        {error.visible && error.UserNameErr && (
                                            <FormHelperText error={error.UserNameErr}>{error.message}</FormHelperText>
                                        )}
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Commercial Name</label>
                                        <input
                                            id="CommercialName"
                                            type="text"
                                            placeholder="Commercial Name"
                                            value={formik.values.CommercialName}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.CommercialName && formik.touched.CommercialName && (
                                            <FormHelperText error={formik.errors.CommercialName}>{formik.errors.CommercialName}</FormHelperText>
                                        )}
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Denomination</label>
                                        <input
                                            id="Denomination"
                                            type="text"
                                            placeholder="Denomination"
                                            value={formik.values.Denomination}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.Denomination && formik.touched.Denomination && (
                                            <FormHelperText error={formik.errors.Denomination}>{formik.errors.Denomination}</FormHelperText>
                                        )}

                                        {error.visible && error.DenominationErr && (
                                            <FormHelperText error={error.DenominationErr}>{error.message}</FormHelperText>
                                        )}

                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400"> <strong>Upload your Logo : </strong></label><br/>

                                        <input
                                            id="fileinput"
                                            type="file"
                                            name="img"
                                            onChange={(event) => {
                                                formik.setFieldValue("img", event.target.files[0]);
                                            }}/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400"> Creation Date</label>
                                        <input
                                            id="CreationYear"
                                            type="date"
                                            className="form-control"
                                            aria-label="Dollar amount (with dot and two decimal places)"
                                            value={formik.values.CreationYear}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.CreationYear && formik.touched.CreationYear && (
                                            <FormHelperText error={formik.errors.CreationYear}>{formik.errors.CreationYear}</FormHelperText>
                                        )}
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Activity</label>
                                        <input
                                            id="Activity"
                                            type="text"
                                            value={formik.values.Activity}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.Activity && formik.touched.Activity && (
                                            <FormHelperText error={formik.errors.Activity}>{formik.errors.Activity}</FormHelperText>
                                        )}
                                    </div>


                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Headquarters Address</label>
                                        <hr/>

                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">Street </label>
                                            <input id="Street"
                                                   type="text"
                                                   value={formik.values.Street}
                                                   onChange={formik.handleChange}
                                            />
                                            {formik.errors.Street && formik.touched.Street && (
                                                <FormHelperText error={formik.errors.Street}>{formik.errors.Street}</FormHelperText>
                                            )}
                                        </div>


                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">City </label>
                                            <input id="City"
                                                   type="text"
                                                   value={formik.values.City}
                                                   onChange={formik.handleChange}
                                            />
                                            {formik.errors.City && formik.touched.City && (
                                                <FormHelperText error={formik.errors.City}>{formik.errors.City}</FormHelperText>
                                            )}
                                        </div>

                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">ZipCode</label>
                                            <input id="ZipCode"
                                                   type="number"
                                                   className="form-control"
                                                   aria-label="Dollar amount (with dot and two decimal places)"
                                                   value={formik.values.ZipCode}
                                                   onChange={formik.handleChange}
                                            />
                                            {formik.errors.ZipCode && formik.touched.ZipCode && (
                                                <FormHelperText error={formik.errors.ZipCode}>{formik.errors.ZipCode}</FormHelperText>
                                            )}
                                        </div>

                                        <hr/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Register Status</label>
                                        <input id="RegisterStatus"
                                               type="text"
                                               value={formik.values.RegisterStatus}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.RegisterStatus && formik.touched.RegisterStatus && (
                                            <FormHelperText error={formik.errors.RegisterStatus}>{formik.errors.RegisterStatus}</FormHelperText>
                                        )}
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Regional Office</label>
                                        <input id="RegionalOffice"
                                               type="text"
                                               value={formik.values.RegionalOffice}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.RegionalOffice && formik.touched.RegionalOffice && (
                                            <FormHelperText error={formik.errors.RegionalOffice}>{formik.errors.RegionalOffice}</FormHelperText>
                                        )}
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Tax Situation</label>
                                        <input id="TaxSituation"
                                               type="text"
                                               value={formik.values.TaxSituation}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.TaxSituation && formik.touched.TaxSituation && (
                                            <FormHelperText error={formik.errors.TaxSituation}>{formik.errors.TaxSituation}</FormHelperText>
                                        )}
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email</label>
                                        <input id="Email"
                                               type="text"
                                               value={formik.values.Email}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.Email && formik.touched.Email && (
                                            <FormHelperText error={formik.errors.Email}>{formik.errors.Email}</FormHelperText>
                                        )}

                                        {error.visible && error.EmailExist && (
                                            <FormHelperText error={error.EmailExist}>{error.message}</FormHelperText>
                                        )}
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400"> Phone Number</label>
                                        <input
                                            id="PhoneNumber"
                                            type="number"
                                            className="form-control"
                                            aria-label="Dollar amount (with dot and two decimal places)"
                                            value={formik.values.PhoneNumber}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.PhoneNumber && formik.touched.PhoneNumber && (
                                            <FormHelperText error={formik.errors.PhoneNumber}>{formik.errors.PhoneNumber}</FormHelperText>
                                        )}
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input id="Password"
                                               type="password"
                                               placeholder="******"
                                               value={formik.values.Password}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.Password && formik.touched.Password && (
                                            <FormHelperText error={formik.errors.Password}>{formik.errors.Password}</FormHelperText>
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


                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label onClick={showTemrss}>Show terms</label><br/>
                                            {showTerms && (
                                                <p>
                                                    Purpose of these terms of use
                                                    Although you may be tempted not to read these Terms of Service, it is important that you know what to expect from us when using the <strong>Wamya services</strong>, and vice versa.

                                                </p>
                                            )}
                                            <label>
                                                <input type="checkbox" id="acceptTerms" onChange={(e)=> formik.setFieldValue("acceptTerms",!formik.values.acceptTerms)}/> I agree to terms and conditions of this website
                                            </label>

                                            {formik.errors.acceptTerms && formik.touched.acceptTerms && (
                                                <FormHelperText error={formik.errors.acceptTerms}>{formik.errors.acceptTerms}</FormHelperText>
                                            )}
                                        </div>

                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex ">
                                            <div className="lead-text">
                                                <button type="submit" className={(formik.values.acceptTerms ? 'btn-primary' : 'btn-outline-primary')} disabled={!formik.values.acceptTerms}>Sign Up</button>
                                            </div>
                                            <button className="btn-outline-danger" onClick={Reset}>Reset</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const today = new Date();
today.setHours(0, 0, 0, 0)
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
    CreationYear: Yup.date()
        .required("Creation Date is required")
        .max(today,"you can't choose a future date"),
    Password: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('Password'), null], 'Passwords must match')
});

export default EntrepriseSignUpForm;