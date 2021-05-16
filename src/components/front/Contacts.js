import React, {Component} from 'react';

class Contacts extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)

    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){

        return(
            <section className="contact_info_area sec_pad bg_color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a href="tel:20566666">(+216) 20 566 666</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a href="wamyatn11@gmail.com
">wamyatn11@gmail.com
                                </a></p>
                            </div>
                        </div>
                        <div className="contact_form col-lg-9">
                            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Leave a Message</h2>
                            <form onSubmit={this.submitForm} className="contact_form_box" method="post" id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" id="name" name="name" placeholder="Your Name" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" name="email" id="email" placeholder="Your Email" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <input type="text" id="subject" name="subject" placeholder="Subject" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <textarea onChange={this.handleChange} name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message . . ."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn_three">Send Message</button>
                            </form>
                            {/* {emailStatus ? emailStatus : null} */}
                            <div id="success">Your message succesfully sent!</div>
                            <div id="error">Opps! There is something wrong. Please try again</div>
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Contacts;

// import React, {Component, useState} from 'react';
// import axios from "axios";

//         const handleClick = (e) => {
//             e.preventDefault();

//             if(e.target.id === 'name'){
//                 setName(e.target.value)
//             }else{
//                 setEmail(e.target.value)
//             }
//         }

//         const handleSubmit = (e) => {
//             e.preventDefault();

//             const dataToSubmit = {
//                 name, 
//                 email
//             }
            
//             axios.post("api/sedMail",dataToSubmit )

//         }

// class Contacts extends Component {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     render(){
        
//         return(
//             <section className="contact_info_area sec_pad bg_color">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <div className="contact_info_item">
//                                 <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Office Address</h6>
//                                 <p className="f_400 f_size_15">Melbourne’s GPO 434 Bourke St. Dhaka VIC 3074, Australia</p>
//                             </div>
//                             <div className="contact_info_item">
//                                 <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
//                                 <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a href="tel:3024437488">(+096) 302 443 7488</a></p>
//                                 <p className="f_400 f_size_15"><span className="f_400 t_color3">Fax:</span> <a href="tel:3024437488">(+096) 204 353 6684</a></p>
//                                 <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a href="mailto:saasland@gmail.com">saasland@gmail.com</a></p>
//                             </div>
//                         </div>
//                         <div className="contact_form col-lg-9">
//                             <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Leave a Message</h2>
//                             <form onSubmit={handleSubmit} className="contact_form_box" method="post" id="contactForm">
//                                 <div className="row">
//                                     <div className="col-lg-6">
//                                         <div className="form-group text_box">
//                                             <input type="text" value={name} id="name" name="name" placeholder="Your Name" onClick={handleClick}/>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6">
//                                         <div className="form-group text_box">
//                                             <input type="text" value={email} name="email" id="email" placeholder="Your Email" onClick={handleClick}/>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                         <div className="form-group text_box">
//                                             <input type="text"  id="subject" name="subject" placeholder="Subject" onClick={handleClick}/>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12">
//                                         <div className="form-group text_box">
//                                             <textarea onClick={handleClick} name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message . . ."></textarea>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button type="submit" className="btn_three" onClick={handleSubmit}>Send Message</button>
//                             </form>
//                             {/* {emailStatus ? emailStatus : null} */}
//                             <div id="success">Your message succesfully sent!</div>
//                             <div id="error">Opps! There is something wrong. Please try again</div>
//                         </div>
//                     </div>
                    
//                 </div>
//             </section>
//         )
//     }
// }

// export default Contacts;