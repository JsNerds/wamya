import React, {Fragment, useEffect, useState} from 'react';
import Reveal from "react-reveal/Reveal";
import {CardElement, useStripe, useElements, CardNumberElement} from '@stripe/react-stripe-js';
import MuiAlert from "@material-ui/lab/Alert";
import {FormHelperText} from "@material-ui/core";
import axios from "axios";
import {useFormik} from "formik";
import {queryServerApi} from "../../utils/queryServerApi";
import * as Yup from "yup";
import {useHistory, useLocation, useParams} from "react-router";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const PaymentForm =(props)=>{

    const query = useQuery();
    const amount= query.get("amount");
    const idUser= query.get("id");
    const userType = query.get("userType");
    const stripe= useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success,setSuccess] = useState(false);
    //const [clientSecret, setClientSecret] = useState('');
    const history = useHistory();


    const formik = useFormik({
        initialValues:{
            PaymentMethod: "",
            NameOnCard: " ",
            creditCard: "",
            CardType: "",
            SecurityCode: "",
            ExpirationDate: "",
            Country: "",
            Email:"",
            PhoneNumber:''
        },validationSchema:YupSchema,
        onSubmit: async (values) =>{

            if (!stripe || !elements) {
                return;
            }

            const cardElement = elements.getElement(CardElement);
            console.log(cardElement);

            const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {
                    email: formik.values.Email,
                    phone: formik.values.PhoneNumber,
                    name: formik.values.NameOnCard
                }
            });

            if (error) {
                console.log('[error]', error);
                setError(error);
            } else {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:3000/payments/stripePayment",{
                    amount,
                    id
                });
                if(response.data.success){
                    const newVal={
                        PaymentMethod: paymentMethod.type,
                        NameOnCard: formik.values.NameOnCard,
                        creditCard: "",
                        CardType: paymentMethod.card.brand,
                        ExpirationDate: new Date(paymentMethod.card.exp_year + "/" + paymentMethod.card.exp_month+ "/" + 1),
                        Country: paymentMethod.card.country,
                        Email:formik.values.Email,
                        PhoneNumber:formik.values.PhoneNumber
                    };
                    if(userType==="Company"){
                        const [res,err] = await queryServerApi("payments/addPaymentEntrep/"+idUser, newVal,"POST",false);
                        console.log(res);
                        if(err){
                            setError({
                                visible: true,
                                message: JSON.stringify(err.errors, null, 2),
                            });
                        }
                        else setSuccess(true);
                    } else if (userType==="Customer"){
                        const [res,err] = await queryServerApi("payments/addPaymentCust/"+idUser, newVal,"POST",false);
                        console.log(res);
                        if(err){
                            setError({
                                visible: true,
                                message: JSON.stringify(err.errors, null, 2),
                            });
                        }
                        else setSuccess(true);
                    }

                }
                console.log("id = ",id);
                console.log('[PaymentMethod] = ', paymentMethod);
            }
        }
    });

    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="payment_featured_img img_two">
                                    <img src={require('../../img/home9/featured_img_two.png')} alt="" width="466" height="1200"/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Checkout</h2>

                                {!success ? (
                                    <form className="login-form sign-in-form" onSubmit={formik.handleSubmit}>

                                        {error &&
                                        <>
                                            <MuiAlert className="mb-4" severity="error">
                                                <div className="d-flex align-items-center align-content-center">
                                         <span>
                                         <strong className="d-block">Danger!</strong> {error.message}
                                         </span>
                                                </div>

                                            </MuiAlert>
                                            <br/>
                                            <br/>
                                        </>
                                        }

                                        {!formik.isValid &&
                                        <MuiAlert className="mb-4" severity="error">
                                            <div className="d-flex align-items-center align-content-center">
                                         <span>
                                         <strong className="d-block">Danger!</strong> Check out the form again
                                         </span>
                                            </div>
                                        </MuiAlert>}


                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">Name </label>
                                            <input id="NameOnCard"
                                                   type="text" placeholder="Name"
                                                   value={formik.values.NameOnCard}
                                                   onChange={formik.handleChange}
                                            />
                                            {formik.errors.NameOnCard && formik.touched.NameOnCard && (
                                                <FormHelperText error={formik.errors.NameOnCard}>{formik.errors.NameOnCard}</FormHelperText>
                                            )}
                                        </div>

                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">Email Address</label>
                                            <input
                                                   type="text"  id="Email" placeholder="saasland@gmail.com"
                                                   value={formik.values.Email}
                                                   onChange={formik.handleChange}
                                            />
                                            {formik.errors.Email && formik.touched.Email && (
                                                <FormHelperText error={formik.errors.Email}>{formik.errors.Email}</FormHelperText>
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

                                        <label>Credit Card </label>
                                        <hr/><br/>
                                        <CardElement options={cardOptions}/>


                                        <p></p>
                                        <br/>
                                        <br/>

                                        <div className="d-flex justify-content-between align-items-center">

                                            <button type="submit" className="btn_three" > Pay Now</button>
                                            <div className="social_text d-flex ">
                                                <div className="lead-text">Or Sign up Using</div>
                                                <ul className="list-unstyled social_tag mb-0">
                                                    <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                                    <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                                    <li><a href="/#"><i className="ti-google"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                ) :
                                    <MuiAlert className="mb-4" severity="success">
                                        <div className="d-flex align-items-center align-content-center">
                                             <span>
                                                <strong className="d-block">Success!</strong> Your payment was successful!
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

const cardOptions = {
    style: {
        base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
                color: '#5490cd',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
};

const YupSchema = Yup.object ({
    NameOnCard: Yup.string()
        .required("Name is required"),
    Email: Yup.string()
        .email("No valid Email ")
        .required("email is Required"),
    PhoneNumber: Yup.number("Phone Number should be a number")
        .positive("Phone Number should be Positive")
        .required("phone number is Required"),
});
export default PaymentForm;