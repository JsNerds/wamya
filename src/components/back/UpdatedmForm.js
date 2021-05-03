import React, { Fragment, useEffect, useState } from "react";
import * as Yup from "yup";

import clsx from "clsx";

import {
  Grid,
  Input,
  Card,
  FormControl,
  FormHelperText,
  Divider,
  InputLabel,
  FormGroup,
  InputAdornment,
  TextField,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import { queryServerApi } from "../../utils/queryServerApi";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FilledInput from "@material-ui/core/FilledInput";
import MuiAlert from "@material-ui/lab/Alert";

const UpdatedmForm = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = useState({ visible: false, message: "" });

  const formik = useFormik({
    initialValues: {
      Cin: 0,
      Phone: 0,
      FullName: "",
      address: "",
      Username: "",
      Email: "",
    },
    validationSchema: YupSchema,
    onSubmit: async (values) => {
      console.log(values);
      const [, err] = await queryServerApi(
        "deliveryman/updatedm/" + props.id,
        values,
        "PUT",
        true
      );
      if (err) {
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else history.push("/Deliverymanview");
    },
  });

  const Reset = () => {
    async function fetchDataForm() {
      const [res, err] = await queryServerApi("deliveryman/getdev/" + props.id);
      setError({
        visible: true,
        message: JSON.stringify(err?.errors, null, 2),
      });
      formik.setValues({
        FullName: res.FullName,
        Username: res.Username,
        Email: res.Email,
        Phone: res.Phone,
        address: res.address,
      });
    }
    fetchDataForm();
  };

  useEffect(() => {
    console.log("id child", props.id);
    async function fetchDataForm() {
      const [res, err] = await queryServerApi("deliveryman/getdev/" + props.id);
      setError({
        visible: true,
        message: JSON.stringify(err?.errors, null, 2),
      });
      formik.setValues({
        FullName: res.FullName,
        Username: res.Username,
        address: res.address,
        Email: res.Email,
        Phone: res.Phone,
      });
    }
    fetchDataForm();
    // eslint-disable-next-line
  }, [props.id]);

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="p-4 mb-4">
            <div className="font-size-lg font-weight-bold">Delivery man</div>
            <Divider className="my-4" />

            <form onSubmit={formik.handleSubmit}>
              <FormGroup>
                {error.visible && <span>{error.message}</span>}

                {!formik.isValid && (
                  <MuiAlert className="mb-4" severity="error">
                    <div className="d-flex align-items-center align-content-center">
                      <span>
                        <strong className="d-block">Danger!</strong> Check out
                        the form again
                      </span>
                    </div>
                  </MuiAlert>
                )}
              </FormGroup>

              <FormGroup>
                <InputLabel>Informations</InputLabel>

                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="filled"
                >
                  <FilledInput
                    id="cin"
                    value={formik.values.cin}
                    onChange={formik.handleChange}
                    aria-describedby="filled-weight-helper-text"
                    type="number"
                    disabled="true"
                    inputProps={{
                      "aria-label": "cin",
                    }}
                  />
                  <FormHelperText id="filled-weight-helper-text">
                    Username
                  </FormHelperText>
                </FormControl>

                <FormControl
                  className="w-100 m-2"
                  error={formik.errors.Username && formik.touched.Username}
                  component="fieldset"
                >
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Username
                  </InputLabel>
                  <Input
                    id="Username"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                    value={formik.values.Username}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.Username && formik.touched.Username && (
                    <FormHelperText>{formik.errors.Username}</FormHelperText>
                  )}
                </FormControl>
              </FormGroup>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                error={formik.errors.FullName && formik.touched.FullName}
                component="fieldset"
              >
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      id="FullName"
                      label="FullName"
                      value={formik.values.FullName}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid>
                {formik.errors.FullName && formik.touched.FullName && (
                  <FormHelperText>{formik.errors.FullName}</FormHelperText>
                )}
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                error={formik.errors.address && formik.touched.address}
                component="fieldset"
              >
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      id="address"
                      label="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid>
                {formik.errors.address && formik.touched.address && (
                  <FormHelperText>{formik.errors.address}</FormHelperText>
                )}
              </FormControl>

              <FormGroup>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  error={formik.errors.Email && formik.touched.Email}
                  component="fieldset"
                >
                  <TextField
                    fullWidth
                    className="m-2"
                    id="Email"
                    label="Email"
                    placeholder="test.test@gmail.com"
                    value={formik.values.Email}
                    onChange={formik.handleChange}
                    multiline
                  />
                  {formik.errors.Email && formik.touched.Email && (
                    <FormHelperText>{formik.errors.Email}</FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  className={clsx(
                    classes.margin,
                    classes.withoutLabel,
                    classes.textField
                  )}
                  error={formik.errors.Phone && formik.touched.Phone}
                  component="fieldset"
                >
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Phone Number
                  </InputLabel>
                  <Input
                    id="Phone"
                    value={formik.values.Phone}
                    onChange={formik.handleChange}
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                      "aria-label": "Phone",
                    }}
                  />
                  {formik.errors.Phone && formik.touched.Phone && (
                    <FormHelperText>{formik.errors.Phone}</FormHelperText>
                  )}
                </FormControl>
              </FormGroup>

              <div className="form-group text_box">
                <label className="f_p text_c f_400">
                  {" "}
                  <strong>Upload your Profile picture : </strong>
                </label>
                <br />

                <Input
                  id="fileinput"
                  type="file"
                  name="img"
                  onChange={(event) => {
                    formik.setFieldValue("img", event.target.files[0]);
                  }}
                />
                {formik.errors.image && formik.touched.image && (
                  <FormHelperText error={formik.errors.image}>
                    {formik.errors.image}
                  </FormHelperText>
                )}
              </div>

              <Button
                className="m-2"
                variant="contained"
                color="primary"
                type="submit"
              >
                Update
              </Button>
              <Button
                className="m-2"
                variant="contained"
                color="secondary"
                onClick={Reset}
              >
                Reset
              </Button>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
  },
}));

const YupSchema = Yup.object({
  FullName: Yup.string().required("FullName Name is Required"),
  Username: Yup.string().required("Username is Required"),
  address: Yup.string().required("Address is Required"),
  Email: Yup.string()
    .email("No valid Email ")
    .required("email is Required"),
  Phone: Yup.number("Phone Number should be a number")
    .positive("Phone Number should be Positive")
    .required("phone number is Required"),
});

export default UpdatedmForm;
