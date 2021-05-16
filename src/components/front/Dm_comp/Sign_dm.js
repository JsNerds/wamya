import React, { Component, useState, useEffect, setState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Form from "../form_deliveryman/Form";
import Test from "../form_deliveryman/Test";
import Join_form from "../../../componentsFront/Join_form";
import { queryServerApi } from "../../../utils/queryServerApi";
import axios from "axios";

export default function Sign_dm(props) {
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const history = useHistory();
  const [baseImage, setBaseImage] = useState("");
  const base64 = "";

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  let valeurs;
  const custom_file_upload_url = `http://localhost:3000/deliveryman/add`;

  async function handleSubmitFile(values) {
    console.log(valeurs);

    let formData = new FormData();
    formData.append("img", valeurs.img);
    const wow = await getBase64(valeurs.pdp);
    //console.log("testing" + wow);
    console.log("plan" + valeurs.plan);
    formData.append("username", valeurs.username);
    formData.append("fullname", valeurs.fullname);
    formData.append("phone", valeurs.phone);
    formData.append("address", valeurs.address);
    formData.append("mail", valeurs.mail);
    formData.append("date", valeurs.date);
    formData.append("pass", valeurs.pass);
    formData.append("gender", valeurs.gender);
    formData.append("pdp", wow);
    formData.append("status", "1");
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
        history.push("/SignInWamya");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-4">
              <div className="sign_info_content">
                <h2 className="f_p f_400 f_size_30 mb-30">
                  Follow the steps carefully
                  <br /> try to upload <br />
                  <span className="f_700">clear</span> image content
                </h2>
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="ti-check"></i> as soon as your're accepted
                    your profile will be activated
                  </li>
                  <li>
                    <i className="ti-check"></i> contact us on email for more
                    information
                  </li>
                  <li>
                    <i className="ti-check"></i> you're only allowed to have 1
                    account
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
