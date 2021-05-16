import React , {useState}  from 'react';
import {queryServerApi} from "../../utils/queryServerApi";
import {useFormik} from "formik";
import * as Yup from "yup";
import MuiAlert from "@material-ui/lab/Alert";

function Contacts () {
    const [error,setError] = useState({visible: false,message: ""});
    const [success,setSuccess] = useState(false);

    const formik = useFormik({
        initialValues:{
            Email: "",
            Username:"",
            Subject:"",
            Message:""
        },validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("EMAIL",values);
            const [res, err] = await queryServerApi("users/contactUs", values, "POST", false);

            if(res === "EmailSended"){
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
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a href="tel:20566666">(+216) 20 566 666</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a href="wamyatn11@gmail.com">wamyatn11@gmail.com</a></p>
                                <a href="https://www.facebook.com/WamyaFlex"> <i className="ti-facebook"/> <strong> @WamyaFlex </strong></a>
                                <p></p>
                                <a href="https://www.instagram.com/wamya_flex/"> <i className="ti-instagram"/> <strong> @wamya_flex

                                </strong></a><br/>
                            </div>
                        </div>
                        <div className="contact_form col-lg-9">
                            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Leave a Message</h2>

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
                                         <div className="row">
                                                <div className="col-lg-6">
                                                     <div className="form-group text_box">
                                                       <input type="text" id="Username" name="Username" placeholder="Your Name"
                                                              value={formik.values.Username}
                                                              onChange={formik.handleChange}
                                                       />
                                                 </div>
                                       </div>

                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input id="Email" type="text"  placeholder="Your Email"
                                                   value={formik.values.Email}
                                                   onChange={formik.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <input type="text" id="Subject" name="Subject" placeholder="Subject"
                                                   value={formik.values.Subject}
                                                   onChange={formik.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <textarea  name="Message" id="Message" cols="30" rows="10" placeholder="Enter Your Message . . ."
                                                       value={formik.values.Message}
                                                       onChange={formik.handleChange}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <button type="submit" className="btn_three">Send Message</button>
                                      </div>
                                        </form>
                                ) :
                                (
                                <MuiAlert className="mb-4" severity="success">
                                <div className="d-flex align-items-center align-content-center">
                                <span>
                                <strong className="d-block">Done!</strong> Your message succesfully sent!
                                </span>
                                </div>
                                </MuiAlert>
                                )}


                        </div>
                    </div>
                    
                </div>
            </section>
        )

}


const YupSchema = Yup.object ({
});

export default Contacts;

