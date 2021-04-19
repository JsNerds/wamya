import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Form from "../components/front/form_deliveryman/Form";
import Test from "../components/front/form_deliveryman/Test";
import Join_form from "./Join_form";
import { queryServerApi } from "../utils/queryServerApi";
import axios from "axios";

export default function Sign_dm(props) {
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const history = useHistory();
  let valeurs;
  const custom_file_upload_url = `http://localhost:3000/deliveryman/add`;

  const handleSubmitFile = (values) => {
    console.log(valeurs);
    let formData = new FormData();
    formData.append("img", valeurs.img);
    formData.append("username", valeurs.username);
    formData.append("mail", valeurs.mail);
    formData.append("date", valeurs.date);
    formData.append("pass", valeurs.pass);
    formData.append("gender", valeurs.gender);
    var reg = JSON.stringify(valeurs.region);

    formData.append("region", reg);
    console.log(reg);

    // the image field name should be similar to your api endpoint field name
    // in my case here the field name is customFile

    axios
      .post(custom_file_upload_url, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(reg);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-4">
              <div className="sign_info_content">
                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">
                  Allready have an account?
                </h3>
                <h2 className="f_p f_400 f_size_30 mb-30">
                  Login now and
                  <br /> starting using our <br />
                  <span className="f_700">amazing</span> products
                </h2>
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="ti-check"></i> Premium Access to all Products
                  </li>
                  <li>
                    <i className="ti-check"></i> Free Testing Tools
                  </li>
                  <li>
                    <i className="ti-check"></i> Unlimited User Accounts
                  </li>
                </ul>
                <button
                  type="submit"
                  className="btn_three sign_btn_transparent"
                >
                  Sign In
                </button>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="login_info">
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                <Form
                  onSubmit={async (values) => {
                    valeurs = values;
                    handleSubmitFile(values);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
