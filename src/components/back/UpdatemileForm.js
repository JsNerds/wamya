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

const UpdatemileForm = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = useState({ visible: false, message: "" });
  const [id, setid] = useState();

  const formik = useFormik({
    initialValues: {
      delivs: "",
      profit: "",
      stage: "",
      rating: "",
      badges: "",
    },
    validationSchema: YupSchema,
    onSubmit: async (values) => {
      console.log(values);
      const [, err] = await queryServerApi(
        "deliveryman/updatemile/" + props.id,
        values,
        "put",
        false
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
      const [res, err] = await queryServerApi(
        "deliveryman/getmileid/" + props.id
      );
      setError({
        visible: true,
        message: JSON.stringify(err?.errors, null, 2),
      });
      formik.setValues({
        delivs: res.delivs,
        profit: res.profit,
        stage: res.stage,
        rating: res.rating,
        badges: res.badges,
      });
    }
    fetchDataForm();
  };

  useEffect(() => {
    console.log("id child", props.id);
    async function fetchDataForm() {
      const [res, err] = await queryServerApi(
        "deliveryman/getmileid/" + props.id
      );
      setid(res.Id);
      setError({
        visible: true,
        message: JSON.stringify(err?.errors, null, 2),
      });
      formik.setValues({
        delivs: res.delivs,
        profit: res.profit,
        stage: res.stage,
        rating: res.rating,
        badges: res.badges,
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
            <div className="font-size-lg font-weight-bold">Milestones</div>
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
                    id="delivs"
                    value={formik.values.delivs}
                    onChange={formik.handleChange}
                    aria-describedby="filled-weight-helper-text"
                    type="string"
                    disabled="true"
                    inputProps={{
                      "aria-label": "deliveries",
                    }}
                  />
                  <FormHelperText id="filled-weight-helper-text">
                    Number of deliveries
                  </FormHelperText>
                </FormControl>

                <FormControl
                  className="w-100 m-2"
                  error={formik.errors.profit && formik.touched.profit}
                  component="fieldset"
                >
                  <InputLabel htmlFor="input-with-icon-adornment">
                    profit
                  </InputLabel>
                  <Input
                    id="profit"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                    value={formik.values.profit}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.profit && formik.touched.profit && (
                    <FormHelperText>{formik.errors.profit}</FormHelperText>
                  )}
                </FormControl>
              </FormGroup>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                error={formik.errors.stage && formik.touched.stage}
                component="fieldset"
              >
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      id="stage"
                      label="stage"
                      value={formik.values.stage}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid>
                {formik.errors.stage && formik.touched.stage && (
                  <FormHelperText>{formik.errors.stage}</FormHelperText>
                )}
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                error={formik.errors.rating && formik.touched.rating}
                component="fieldset"
              >
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      id="rating"
                      label="rating"
                      value={formik.values.rating}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid>
                {formik.errors.rating && formik.touched.rating && (
                  <FormHelperText>{formik.errors.rating}</FormHelperText>
                )}
              </FormControl>

              <FormGroup>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  error={formik.errors.badges && formik.touched.badges}
                  component="fieldset"
                >
                  <TextField
                    fullWidth
                    className="m-2"
                    id="badges"
                    label="badges"
                    placeholder="badges"
                    value={formik.values.badges}
                    onChange={formik.handleChange}
                    multiline
                  />
                  {formik.errors.badges && formik.touched.badges && (
                    <FormHelperText>{formik.errors.badges}</FormHelperText>
                  )}
                </FormControl>
              </FormGroup>

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
  delivs: Yup.string().required("deliveries is Required"),
  profit: Yup.string().required("profit is Required"),
  stage: Yup.string().required("stage is Required"),
  rating: Yup.string("rating should be a number"),
  badges: Yup.string().required("street is required"),
});

export default UpdatemileForm;
