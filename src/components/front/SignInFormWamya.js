import React, {useState} from 'react';
import {queryServerApi} from "../../utils/queryServerApi";
import {useFormik} from "formik";
import * as Yup from "yup";
import MuiAlert from "@material-ui/lab/Alert";
import {useHistory} from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import SignInWithFace from "./SignInWithFace";
import {FormHelperText} from "@material-ui/core";






const SignInFromWamya =()=>{
    const [error,setError] = useState({visible: false,message: "",subscription:false,id:"",severity:""});
    const history = useHistory();
    const [loginWithFace,setloginWithFace] = useState(false);

    const UpgradeSubscription = () => {
        history.push("/Pricing/"+error.id);
    }



    const formik = useFormik({
        initialValues:{
            username: "",
            password: "",
        },validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("Values",values);
            const [user, err] = await queryServerApi("users?username="+formik.values.username+"&password="+formik.values.password, null, "GET", false);
            if(user === "UserNotFound"){
                setError({
                    visible: true,
                    message:`Username or Email doesn't exist  if you registred recently please activate your account`,
                    severity: "error"
                });
            }
            else if (user === "WrongPassword"){
                setError({
                    visible: true,
                    message: "Incorrect Password",
                    severity: "error"
                });

            }
            else {

                if(user[0].Role === "Admin")
                {
                    localStorage.setItem('username', user[0].Username);
                    localStorage.setItem('role', user[0].Role);
                    localStorage.setItem('id', user[0].Id);
                    history.push("/AdminDashborad");
                    history.go(0);
                }
                else if (user[0].Role === "Company")
                {
                    const [company, err] = await queryServerApi("entreprises/"+user[0].Id, null, "GET", false);
                    if(company.Subscribed){
                        localStorage.setItem('username', user[0].Username);
                        localStorage.setItem('role', user[0].Role);
                        localStorage.setItem('id', user[0].Id);
                        localStorage.setItem('img', user[0].img);
                        history.push("/");
                    }
                    else
                    {
                        setError({
                            visible: true,
                            message: "You are not Subscribed Please Update your subscription",
                            subscription: true,
                            id:user[0].Id,
                            severity: 'warning'

                        });

                    }
                }
                else {
                    localStorage.setItem('username', user[0].Username);
                    localStorage.setItem('role', user[0].Role);
                    localStorage.setItem('id', user[0].Id);
                    localStorage.setItem('img', user[0].img);

                    history.push("/");

                }
            }


        },
    });


    const responseGoogle = async (response) => {
            console.log(response);
            const [user, err] = await queryServerApi("users/loginWithGoogle?tokenId="+response.tokenId, null, "GET", false);
        if(user === "UserNotFound"){
            setError({
                visible: true,
                message:`You need to sing Up with this Google Account First !`,
                severity: 'info'

            });
        }
        else {
            console.log(user[0].img);

            if(user[0].Role === "Admin")
            {
                localStorage.setItem('username', user[0].Username);
                localStorage.setItem('role', user[0].Role);
                localStorage.setItem('id', user[0].Id);
                history.push("/AdminDashborad");
                history.go(0);
            }
            else if (user[0].Role === "Company")
            {
                const [company, err] = await queryServerApi("entreprises/"+user[0].Id, null, "GET", false);
                if(company.Subscribed){
                    localStorage.setItem('username', user[0].Username);
                    localStorage.setItem('role', user[0].Role);
                    localStorage.setItem('id', user[0].Id);
                    localStorage.setItem('img', user[0].img);
                    history.push("/");
                }
                else
                {
                    setError({
                        visible: true,
                        message: "You are not Subscribed Please Update your subscription",
                        subscription: true,
                        id:user[0].Id,
                        severity: 'warning'
                    });

                }
            }
            else {
                localStorage.setItem('username', user[0].Username);
                localStorage.setItem('role', user[0].Role);
                localStorage.setItem('id', user[0].Id);
                localStorage.setItem('img', user[0].img);
                history.push("/");

            }
        }


    }


    const responseErrorGoogle = (response) => {
        setError({
            visible: true,
            message: "Something wrong",
        });
    }


    const responseFacebook = async (response) => {
        console.log(response);
        const [user, err] = await queryServerApi("users/loginWithFacebook?accessToken="+response.accessToken+"&userID="+response.userID, null, "GET", false);
        if(user === "UserNotFound"){
            setError({
                visible: true,
                message:`You need to sing Up with this Facebook Account First !`,
                severity: 'info'
            });
        }
        else {

            if(user[0].Role === "Admin")
            {
                localStorage.setItem('username', user[0].Username);
                localStorage.setItem('role', user[0].Role);
                localStorage.setItem('id', user[0].Id);
                history.push("/AdminDashborad");
                history.go(0);
            }
            else if (user[0].Role === "Company")
            {
                const [company, err] = await queryServerApi("entreprises/"+user[0].Id, null, "GET", false);
                if(company.Subscribed){
                    localStorage.setItem('username', user[0].Username);
                    localStorage.setItem('role', user[0].Role);
                    localStorage.setItem('id', user[0].Id);
                    localStorage.setItem('img', user[0].img);
                    history.push("/");
                }
                else
                {
                    setError({
                        visible: true,
                        message: "You are not Subscribed Please Update your subscription",
                        subscription: true,
                        id:user[0].Id,
                        severity: 'warning'
                    });

                }
            }
            else {
                localStorage.setItem('username', user[0].Username);
                localStorage.setItem('role', user[0].Role);
                localStorage.setItem('id', user[0].Id);
                localStorage.setItem('img', user[0].img);
                history.push("/");

            }
        }

    }

    const LoginWithFaceRecognition = () => {
        setloginWithFace(!loginWithFace);
    }

    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">

                <div className="sign_info" >
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">First time here? <br/>
                                    <button className="btn_three">
                                        Sign Up
                                    </button>
                                </h3>

                                <h2 className="f_p f_400 f_size_30 mb-30">You are a customer?<br/> <span className="f_700">Use your face to sign in</span> , it's an easy and fast way! <br/> Sign in with
                                <br/>
                                    <button className="btn_three sign_btn_transparent" onClick={LoginWithFaceRecognition} >
                                        Face Recognition
                                    </button>
                                </h2>

                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign In</h2>

                                {
                                    !loginWithFace ? (
                                        <>

                                        <form onSubmit={formik.handleSubmit}>

                                                {error.visible &&
                                                <MuiAlert className="mb-4" severity={error.severity}>
                                                    <div className="d-flex align-items-center align-content-center">
                                         <span>
                                         <strong className="d-block">Danger!</strong> {error.message}
                                         </span>
                                                    </div>
                                                </MuiAlert>}
                                                {error.subscription && (
                                                    <button  onClick={UpgradeSubscription} className="btn_three">Subscribe or Upgrade your subcsription</button>
                                                )}


                                                <div className="form-group text_box">
                                                    <label className="f_p text_c f_400">Email or Username</label>
                                                    <input  id="username" type="text" placeholder="saasland@gmail.com"
                                                            value={formik.values.username}
                                                            onChange={formik.handleChange}/>
                                                    {formik.errors.username && formik.touched.username && (
                                                        <FormHelperText error={formik.errors.username}>{formik.errors.username}</FormHelperText>
                                                    )}
                                                </div>


                                                <div className="form-group text_box">
                                                    <label className="f_p text_c f_400">Password</label>
                                                    <input id="password" type="password" placeholder="******"
                                                           value={formik.values.password}
                                                           onChange={formik.handleChange}/>
                                                    {formik.errors.password && formik.touched.password && (
                                                        <FormHelperText error={formik.errors.password}>{formik.errors.password}</FormHelperText>
                                                    )}
                                                </div>

                                                <div className="extra mb_20">
                                                    <div className="checkbox remember">
                                                        <label>
                                                            <input type="checkbox"/> Keep me Signed in
                                                        </label>
                                                    </div>

                                                    <div className="forgotten-password">
                                                        <a href="/ResetPassword">Forgot Password?</a>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <button type="submit" className="btn_three">Sign in</button>
                                                    <div className="social_text d-flex ">
                                                        <div className="lead-text"> Sign in with </div>
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
                                            </form>
                                        </>
                                    ):
                                        (
                                            <SignInWithFace/>                                        )
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
    password: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),
    username: Yup.string()
        .required("username is Required"),

});
export default SignInFromWamya;