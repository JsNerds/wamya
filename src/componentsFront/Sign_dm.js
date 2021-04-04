import React from 'react';
import styled from "styled-components";

import Join_form from './Join_form';


const Sign_dm =()=>{
    return(
            
             <section className="sign_in_area bg_color sec_pad">
             <div className="container">
                 <div className="sign_info">
                     <div className="row">
                         <div className="col-lg-4">
                             <div className="sign_info_content">
                                 <h3 className="f_p f_600 f_size_24 t_color3 mb_40">Allready have an account?</h3>
                                 <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br/> starting using our <br/><span className="f_700">amazing</span> products</h2>
                                 <ul className="list-unstyled mb-0">
                                     <li><i className="ti-check"></i> Premium Access to all Products</li>
                                     <li><i className="ti-check"></i> Free Testing Tools</li>
                                     <li><i className="ti-check"></i> Unlimited User Accounts</li>
                                 </ul>
                                 <button type="submit" className="btn_three sign_btn_transparent">Sign In</button>
                             </div>
                         </div>
                         <div className="col-lg-7">
                             <div className="login_info">
                                 <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                                 <Join_form/>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
                   
      
  
    )
}

const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
export default Sign_dm;