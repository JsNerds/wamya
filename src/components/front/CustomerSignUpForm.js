import React, {useState,useRef} from 'react';
import {useHistory} from "react-router";
import {useFormik} from "formik";
import {queryServerApi} from "../../utils/queryServerApi";
import * as Yup from "yup";
import {FormHelperText} from '@material-ui/core';
import MuiAlert from "@material-ui/lab/Alert";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';


const CustomerSignUpForm =()=>{
    const history = useHistory();
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const stripRef = useRef(null);

    const [success,setSuccess] = useState(false);
    const [showCam,setshowCam] = useState(false);
    const [showTerms,setShowTerms] = useState(false);
    const [error,setError] = useState({
        visible: false,
        message: "",
        CinErr: false,
        UserNameErr:false,
        EmailExist:false
    });

    const formik = useFormik({
        initialValues:{
            cin: "",
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            phoneNumber: "",
            street: "",
            city: "",
            zipCode: "",
            acceptTerms: false
        },validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("Values",values);
            const [res, err] = await queryServerApi("customers/addCustomer", values, "POST", true);
            console.log(err);
            console.log('res = ', res)
            if(res === "UserNameExist" ){
                setError({
                    visible: true,
                    message: "Username already exist",
                    UserNameErr: true
                });
            }
            else if (res === "CinExist"){
                setError({
                    visible: true,
                    message: "Cin  already exist",
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
           else if (err) {
                console.log('error',err)
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            } else {
                console.log("add");
                //history.push("/");
                setSuccess(true);
            }
        },
    });


    const Reset= ()=>{
            formik.setValues({
                cin: "",
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                password: "",
                passwordConfirmation: "",
                phoneNumber: "",
                street: "",
                city: "",
                zipCode: ""
            });
        }
    const responseGoogle = (response) => {
        console.log(response);
        formik.setValues({
            cin: "",
            firstname: response.profileObj.familyName,
            lastname:response.profileObj.givenName,
            username: response.profileObj.name,
            email:response.profileObj.email,
            password: "",
            passwordConfirmation: "",
            phoneNumber: "",
            street: "",
            city: "",
            zipCode: ""
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
            cin: "",
            firstname: "",
            lastname:"",
            username: response.name,
            email:response.email,
            password: "",
            passwordConfirmation: "",
            phoneNumber: "",
            street: "",
            city: "",
            zipCode: ""
        });
    }


    const getVideo =  async () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 300 } })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    };



    const paintToCanvas = () => {
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext("2d");

        const width = 320;
        const height = 240;
        photo.width = width;
        photo.height = height;

        return setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);
        }, 200);
    };

    const showCamVideo = ()=> {
        setshowCam(true);
        getVideo();
    }

    const stopVideo = (e) => {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            track.stop();
        }

        videoRef.current.srcObject = null;
    }

    const takePhoto = () => {
        let photo = photoRef.current;
        let strip = stripRef.current;

        const data = photo.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.href = data;
        link.setAttribute("download", "myWebcam");
        link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
        strip.insertBefore(link, strip.firstChild);
        stopVideo();
    };


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
                                    <li><i className="ti-check"></i> Track your package</li>
                                    <li><i className="ti-check"></i> Notification of delivery time </li>
                                    <li><i className="ti-check"></i> Checking for the most qualified driver for the job.</li>
                                </ul>
                                <button onClick={() => nextPath("/SignInWamya")} className="btn_three sign_btn_transparent">Sign In</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>


                                {!success ? (

                                <form onSubmit={formik.handleSubmit}>

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
                                        <label className="f_p text_c f_400">CIN</label>
                                        <input
                                            type="number"
                                            id="cin" className="form-control"
                                            aria-label="Dollar amount (with dot and two decimal places)"
                                            value={formik.values.cin}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.cin && formik.touched.cin && (
                                            <FormHelperText error={formik.errors.cin}>{formik.errors.cin}</FormHelperText>
                                        )}

                                        {error.visible && error.CinErr && (
                                            <FormHelperText error={error.CinErr}>{error.message}</FormHelperText>
                                        )}

                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Username</label>
                                        <input
                                            id="username"
                                            type="text"
                                            placeholder="username"
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.username && formik.touched.username && (
                                            <FormHelperText error={formik.errors.username}>{formik.errors.username}</FormHelperText>
                                        )}
                                        {error.visible && error.UserNameErr && (
                                            <FormHelperText error={error.UserNameErr}>{error.message}</FormHelperText>
                                        )}

                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">First Name</label>
                                        <input type="text" placeholder="First Name"
                                               id="firstname"
                                               value={formik.values.firstname}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.firstname && formik.touched.firstname && (
                                            <FormHelperText error={formik.errors.firstname}>{formik.errors.firstname}</FormHelperText>
                                        )}

                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Last Name</label>
                                        <input type="text" placeholder="First Name"
                                                id="lastname"
                                               value={formik.values.lastname}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.lastname && formik.touched.lastname && (
                                            <FormHelperText error={formik.errors.lastname}>{formik.errors.lastname}</FormHelperText>
                                        )}
                                    </div>


                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input type="text" name="email" id="email" placeholder="test@test.com"
                                               value={formik.values.email}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.email && formik.touched.email && (
                                            <FormHelperText error={formik.errors.email}>{formik.errors.email}</FormHelperText>
                                        )}

                                        {error.visible && error.EmailExist && (
                                            <FormHelperText error={error.EmailExist}>{error.message}</FormHelperText>
                                        )}

                                    </div>


                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Phone Number</label>
                                        <input type="number" className="form-control"
                                               aria-label="Dollar amount (with dot and two decimal places)"
                                               id="phoneNumber"
                                               value={formik.values.phoneNumber}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                            <FormHelperText error={formik.errors.phoneNumber}>{formik.errors.phoneNumber}</FormHelperText>
                                        )}
                                    </div>



                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400"> <strong>Take a picture with camera </strong></label><br/>
                                        {showCam ?
                                            <>
                                            <video
                                                onCanPlay={() => paintToCanvas()}
                                                ref={videoRef}
                                                className="player"/>
                                            <canvas ref={photoRef} className="photo" hidden={true}/>
                                                <br/>
                                                <button className="btn-outline-primary" onClick={takePhoto}>Capture photo</button>
                                                <br/>

                                                <MuiAlert className="mb-4" severity="info">
                                                    <div className="d-flex align-items-center align-content-center">
                                                        <span>
                                                              <strong className="d-block">This is your picturee!</strong> now click on it to download it and upload it below
                                                        </span>
                                                    </div>
                                                </MuiAlert>

                                                <div className="photo-booth">
                                                  <div ref={stripRef} className="strip" />
                                                </div>
                                            </>
                                            :
                                            <button className="btn-outline-primary" onClick={showCamVideo}>Take photo</button>

                                        }
                                        {formik.errors.image && formik.touched.image && (
                                            <FormHelperText error={formik.errors.image}>{formik.errors.image}</FormHelperText>
                                        )}
                                    </div>



                                    <label className="f_p text_c f_400"> <strong>Or </strong></label><br/>



                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400"> <strong>Upload your Profile picture : </strong></label><br/>

                                        <input
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



                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Address</label>
                                        <hr/>

                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">Street </label>
                                            <input type="text"
                                                   id="street"
                                                   value={formik.values.street}
                                                   onChange={formik.handleChange}
                                            />
                                            {formik.errors.street && formik.touched.street && (
                                                <FormHelperText error={formik.errors.street}>{formik.errors.street}</FormHelperText>
                                            )}
                                        </div>
                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">City </label>
                                            <input type="text"
                                                   id="city"
                                                   value={formik.values.city}
                                                   onChange={formik.handleChange}/>
                                            {formik.errors.city && formik.touched.city && (
                                                <FormHelperText error={formik.errors.city}>{formik.errors.city}</FormHelperText>
                                            )}
                                        </div>

                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">ZipCode</label>
                                            <input type="number" className="form-control"
                                                   aria-label="Dollar amount (with dot and two decimal places)"
                                                   id="zipCode"
                                                   value={formik.values.zipCode}
                                                   onChange={formik.handleChange}
                                            />
                                            {formik.errors.zipCode && formik.touched.zipCode && (
                                                <FormHelperText error={formik.errors.zipCode}>{formik.errors.zipCode}</FormHelperText>
                                            )}
                                        </div>

                                        <hr/>
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
                                    ) :
                                    <MuiAlert className="mb-4" severity="success">
                                        <div className="d-flex align-items-center align-content-center">
                                             <span>
                                                <strong className="d-block">Done!</strong> Please check out your Email and active your account to login!
                                             </span>
                                        </div>
                                    </MuiAlert>

                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

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
        .required("Zip Code is Required"),
    cin : Yup.number("CIN Is a Number")
        .positive("CIN should be Positive")
        .required("CIN Code is Required"),
    password: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')




});
export default CustomerSignUpForm;