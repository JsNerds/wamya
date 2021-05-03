import React from "react";
import EntrepriseStats from "./EntrepriseStats";
import EntrepriseDrivers from "./EntrepriseDrivers";
import CompanyOperationsPayments from "./CompanyOperationsPayments";
import CompanyPackageForm from "./CompanyPackageForm";
import EditProfileCompanyForm from "./EditProfileCompanyForm";
import ChangePasswordCompany from "./ChangePasswordCompany";
import MyPackages from "../../pages/front/MyPackages";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DisableAccountCompany from "./DisableAccountCompanyr";


const FaqSection = (props) => {
  return (
    <section className="faq_area bg_color sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 pr_50">
            <div className="faq_tab">
              <h4 className="f_p t_color3 f_600 f_size_22 mb_40">
                Quick Navigation
              </h4>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="purchas-tab"
                    data-toggle="tab"
                    href="#Analytics"
                    role="tab"
                    aria-controls="purchas"
                    aria-selected="true"
                  >
                    <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xl"
                    />
                    <br/>
                    Analytics
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="returns-tab"
                    data-toggle="tab"
                    href="#Drivers"
                    role="tab"
                    aria-controls="returns"
                    aria-selected="false"
                  >
                    <FontAwesomeIcon
                        icon={['fas', 'car']}
                        className="font-size-xl"
                    />
                    <br/>
                    My Drivers
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="price-tab"
                    data-toggle="tab"
                    href="#Packages"
                    role="tab"
                    aria-controls="price"
                    aria-selected="false"
                  >
                    <FontAwesomeIcon
                        icon={['fas', 'box']}
                        className="font-size-xl"
                    />
                    <br/>
                    My Packages
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="price-tab"
                    data-toggle="tab"
                    href="#Payments"
                    role="tab"
                    aria-controls="price"
                    aria-selected="false"
                  >
                    <FontAwesomeIcon
                        icon={['fa', 'credit-card']}
                        className="font-size-xl"
                    />
                    <br/>
                    My Payments</a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="price-tab"
                    data-toggle="tab"
                    href="#PackageDetail"
                    role="tab"
                    aria-controls="price"
                    aria-selected="false"
                  >
                    <FontAwesomeIcon
                        icon={['fa', 'paper-plane']}
                        className="font-size-xl"
                    />
                    <br/>
                    Send Packages </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="price-tab"
                    data-toggle="tab"
                    href="#Profile"
                    role="tab"
                    aria-controls="price"
                    aria-selected="false"
                  >
                    <FontAwesomeIcon
                        icon={['fa', 'user-edit']}
                        className="font-size-xl"
                    />
                    <br/>
                    Edit Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="price-tab"
                    data-toggle="tab"
                    href="#Security"
                    role="tab"
                    aria-controls="price"
                    aria-selected="false"
                  >
                    <FontAwesomeIcon
                        icon={['fa', 'user-secret']}
                        className="font-size-xl"
                    />
                    <br/>
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content faq_content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="Analytics"
                role="tabpanel"
                aria-labelledby="purchas-tab"
              >
                <EntrepriseStats company={props.company} />
              </div>

              <div
                className="tab-pane fade"
                id="Drivers"
                role="tabpanel"
                aria-labelledby="returns-tab"
              >
                <EntrepriseDrivers />
              </div>

              <div
                className="tab-pane fade"
                id="Packages"
                role="tabpanel"
                aria-labelledby="price-tab"
              >
                <MyPackages customer={props.company} />
              </div>
              <div
                className="tab-pane fade"
                id="Payments"
                role="tabpanel"
                aria-labelledby="price-tab"
              >
                <CompanyOperationsPayments payments={props.company.payments} />
              </div>
              <div
                className="tab-pane fade"
                id="PackageDetail"
                role="tabpanel"
                aria-labelledby="price-tab"
                style={{ backgroundColor: "#F7F7F7" }}
              >
                <CompanyPackageForm />
              </div>
              <div
                className="tab-pane fade"
                id="Profile"
                role="tabpanel"
                aria-labelledby="price-tab"
              >
                <EditProfileCompanyForm id={props.company._id} />
              </div>

              <div
                className="tab-pane fade"
                id="Security"
                role="tabpanel"
                aria-labelledby="price-tab"
              >
                <ChangePasswordCompany id={props.company._id} />
                <DisableAccountCompany id={props.company._id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
