import React, {useState} from 'react';
import {queryServerApi} from "../../utils/queryServerApi";
import {useFormik} from "formik";
import * as Yup from "yup";
import MuiAlert from "@material-ui/lab/Alert";
import {useHistory} from "react-router-dom";





const SignInFromWamya =()=>{
    const [error,setError] = useState({visible: false,message: ""});
    const history = useHistory();



    const formik = useFormik({
        initialValues:{
            username: "",
            password: "",
        },validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("Values",values);
            const [user, err] = await queryServerApi("users?username="+formik.values.username, null, "GET", false);
            if(user.length===0){
                setError({
                    visible: true,
                    message: JSON.stringify("Username or Email doesn't exist"),
                });
            }
            else if (user[0].Password === formik.values.password ){
                localStorage.setItem('username', user[0].Username);
                localStorage.setItem('role', user[0].Role);
                localStorage.setItem('id', user[0].Id);
                if(user[0].Role === "Admin")
                {
                    history.push("/AdminDashborad");
                    history.go(0);
                }
                else {
                    history.push("/");

                }

            }
            else {
                setError({
                    visible: true,
                    message: JSON.stringify("Incorrect Password"),
                });
            }


        },
    });

    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">

                <div className="sign_info" >
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">First time here?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Join now and get<br/> <span className="f_700">20% OFF</span> for all <br/> products</h2>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Premium Access to all Products</li>
                                    <li><i className="ti-check"></i> Free Testing Tools</li>
                                    <li><i className="ti-check"></i> Unlimited User Accounts</li>
                                </ul>
                                <button type="submit" className="btn_three sign_btn_transparent">Sign Up</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign In</h2>
                                <form onSubmit={formik.handleSubmit}>

                                    {error.visible &&
                                    <MuiAlert className="mb-4" severity="error">
                                        <div className="d-flex align-items-center align-content-center">
                                         <span>
                                         <strong className="d-block">Danger!</strong> {error.message}
                                         </span>
                                        </div>
                                    </MuiAlert>}


                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email or Username</label>
                                        <input  id="username" type="text" placeholder="saasland@gmail.com"
                                                value={formik.values.username}
                                                onChange={formik.handleChange}/>
                                    </div>


                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input id="password" type="password" placeholder="******"
                                               value={formik.values.password}
                                               onChange={formik.handleChange}/>
                                    </div>

                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox"/> Keep me Signed in
                                            </label>
                                        </div>
                                       
                                        <div className="forgotten-password">
                                            <a href="/#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn_three">Sign in</button>
                                        <div className="social_text d-flex ">
                                            <div className="lead-text">Don't have an account?</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="/#"><i className="ti-google"></i></a></li>
                                            </ul>
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



const YupSchema = Yup.object ({
});
export default SignInFromWamya;