import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  useTheme,
  Switch,
} from "@mui/material";
//

//
const register = async () => {};
const login = async () => {};
const logout = async () => {};
const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email je obavezno polje, unesite email")
    .email("Email format nije dobar"),

  password: yup
    .string()
    .required("Sifra je obavezno polje, unesite sifru")
    .min(6, "Sifra mora da ima najmanje 6 karaktera")
    .max(50, "Sifra mora da ima najvise 50 karaktera"),
});
function Login() {
  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const submitForm = () => {};
  return (
    <div>
      <NavigationBar />
      <div className="login-wrapper">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            submitForm(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div>
              <Typography variant="h4" color="primary" gutterBottom>
                Login page
              </Typography>
              <Box my={1}>
                <TextField
                  variant="outlined"
                  label="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Typography variant="body1" color="error">
                  {errors.email && touched.email && errors.email}
                </Typography>
              </Box>
              <Box my={1}>
                <TextField
                  variant="outlined"
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Typography variant="body1" color="error">
                  {errors.password && touched.password && errors.password}
                </Typography>
              </Box>
              <Button onClick={handleSubmit} type="button" variant="contained">
                Submit
              </Button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
