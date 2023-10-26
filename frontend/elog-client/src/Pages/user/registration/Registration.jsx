import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./registration.css";
import { Navigate } from "react-router-dom";
import { registrationAction } from "../../../redux/slices/users/usersSlices";

//form validation
const formSchema = Yup.object().shape({
  username: Yup.string().required("username is required!"),
  email: Yup.string().required("Email is required!"),
  password: Yup.string().required("password is required!"),
  confirmPassword: Yup.string().required("confirmPassword is required!"),
});

export default function Registration() {
  //dispatch action
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      dispatch(registrationAction(values));
      // console.log(values);
    },
    validationSchema: formSchema,
  });

  const storeData = useSelector((store) => store?.users);
  console.log(storeData);
  const { loading, appErr, serverErr, registered } = storeData;
  // console.log(appErr, serverErr);
  // console.log(registered);

  if (registered) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Container id="main-container" className="mb-3">
      <form id="registration" onSubmit={formik.handleSubmit}>
        <h1 className="mb-2">Sign Up</h1>
        {appErr || serverErr ? (
          <p className="text-danger">
            {serverErr} - {appErr}
          </p>
        ) : null}
        <div className="mb-2">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            value={formik.values.username}
            onChange={formik.handleChange("username")}
            onBlur={formik.handleBlur("username")}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            autoComplete="username"
          />
          <p className="text-danger">
            {formik.touched.username && formik.errors.username}
          </p>
        </div>
        <div className="mb-2">
          <Form.Label htmlFor="Email">Email</Form.Label>
          <Form.Control
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
          />
          <p className="text-danger">
            {formik.touched.email && formik.errors.email}
          </p>
        </div>
        <div className="mb-2">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            type="password"
            id="password"
            name="password"
            aria-describedby="passwordHelpBlock"
            placeholder="Password"
            autoComplete="password"
          />
          <p className="text-danger">
            {formik.touched.password && formik.errors.password}
          </p>
        </div>
        <div className="mb-2">
          <Form.Label htmlFor="password">Confirm Password</Form.Label>
          <Form.Control
            value={formik.values.confirmPassword}
            onChange={formik.handleChange("confirmPassword")}
            onBlur={formik.handleBlur("confirmPassword")}
            type="password"
            id="confirm password"
            name="confirm password"
            aria-describedby="passwordHelpBlock"
            placeholder="Confirm Password"
            autoComplete="confirm-password"
          />
          <p className="text-danger">
            {formik.touched.confirmPassword && formik.errors.confirmPassword}
          </p>
        </div>
        <div className="d-grid">
          <Button className="ml-3" size="lg" type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </Container>
  );
}
