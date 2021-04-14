import React, {useEffect, useState} from 'react';
import Reveal from "react-reveal/Reveal";
import {CardElement, useStripe, useElements, CardNumberElement} from '@stripe/react-stripe-js';
import MuiAlert from "@material-ui/lab/Alert";
import {FormHelperText} from "@material-ui/core";



const CustomerSignUpForm =(props)=>{


    const stripe= useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState('');
    const [billingDetails, setBillingDetails] = useState({
        email: "",
        phone: "",
        name: ""
    });



    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
        console.log("ELEMENT",cardElement)

        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setError(error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }


    }
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
                                <form className="login-form sign-in-form" onSubmit={handleSubmit}>

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


                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Name </label>
                                        <input type="text" placeholder="Name"/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input type="text" name="email" id="email" placeholder="saasland@gmail.com"/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400"> Phone Number</label>
                                        <input
                                            id="PhoneNumber"
                                            type="number"
                                            className="form-control"
                                            aria-label="Dollar amount (with dot and two decimal places)"
                                        />
                                    </div>

                                    <label>Credit Card </label>
                                    <hr/><br/>
                                    <CardElement/>


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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CustomerSignUpForm;