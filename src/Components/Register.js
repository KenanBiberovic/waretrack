import React, { useState } from "react";
import { Formik } from "formik";
import "../Components/UI/Register.css";
import { TextField, Button, Box, Typography } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase-config";

const initialValues = {
  email: "",
  password: "",
};

const Register = () => {
  const registration = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  //
  const submitForm = (values) => {};
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return (
    <div className="register-wrapper">
      <NavigationBar />
      <Box>
        <Typography variant="h3" color="primary">
          Register for full environment
        </Typography>
      </Box>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit = registration,
        }) => (
          <div>
            <div>
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                name="email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
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
