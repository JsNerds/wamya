import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "../../../validation/validation";
import FormInput from "../FormInput";
import { salary, captialize, age } from "../../../validation/normalize";
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const NomineeDetailsForm = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row className="my-0">
              <div>
                <h6>
                  You shall comply with all laws, regulations, rules, policies
                  and guidelines as well as this Code and any further guidelines
                  that may be issued by the Company from time to time. The
                  Company will conduct random checks on delivery man as well as
                  merchants. You are required to co-operate courteously and
                  comply with the reasonable requests from the Company. You are
                  prohibited from taking part in any illegal demonstrations
                  against the Company, being a member of an unregistered
                  association, incite other delivery partners not to use the
                  Byte application, boycott or threaten to boycott the Byte
                  application or any other acts that may be construed to be
                  against the interests of the Company.
                </h6>
                <div className="checkbox remember">
                  <label>
                    <input type="checkbox" /> I agree to terms and conditions of
                    this website
                  </label>
                </div>
              </div>
            </FormGroup>
            <br />
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button
              color="primary"
              className="btn-pill pull-left"
              onClick={previousPage}
              style={{ marginLeft: "20px" }}
            >
              <i className="fa fa-chevron-left" />
              &nbsp; Previous
            </Button>
            <Button
              color="primary"
              className="btn-pill pull-right"
              type="submit"
              style={{ marginRight: "20px" }}
              disabled={pristine || submitting}
            >
              Save &nbsp;
              <i className="fa fa-check" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

NomineeDetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(NomineeDetailsForm);
