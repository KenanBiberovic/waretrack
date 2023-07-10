import React from "react";
import { Formik } from "formik";
import "../Components/UI/Register.css";
import { TextField, Button, Box, Typography } from "@mui/material";
import NavigationBar from "./NavigationBar";

const initialValues = {
  email: "",
  password: "",
  fullName: "",
};

const Register = () => {
  const submitForm = (values) => {};

  return (
    <div className="register-wrapper">
      <NavigationBar />
      <Box>
        <Typography variant="h3" color="primary" gutterTop>
          Register for full environment
        </Typography>
      </Box>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <div>
            <div>
              <TextField
                variant="outlined"
                label="Full Name"
                type="text"
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />

              <p className="error-message">
                {errors.fullName && touched.fullName && errors.fullName}
              </p>
            </div>
            <div>
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="error-message">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div>
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p className="error-message">
                {errors.password && touched.password && errors.password}
              </p>
            </div>
            <div>
              <p className="error-message">
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </p>
            </div>
            <Button variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
