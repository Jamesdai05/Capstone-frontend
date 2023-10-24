import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./registration.css";

//form validation
const formSchema = Yup.object().shape({
  username: Yup.string().required("username is required!"),
  email: Yup.string().required("Email is required!"),
  password: Yup.string().required("password is required!"),
  confirmPassword: Yup.string().required("confirmPassword is required!"),
});

export default function Registration() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: formSchema,
  });
  return (
    <Container id="main-container" className="mb-3">
      <form id="registration" onSubmit={formik.handleSubmit}>
        <h1 className="mb-2 fs-3 fw-normal">Sign Up</h1>
        <div className="mb-2">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            value={formik.values.username}
            onChange={formik.handleChange("username")}
            onBlur={formik.handleBlur("username")}
            type="text"
            id="username"
            placeholder="Username"
          />
          {formik.touched.username && formik.errors.username}
        </div>
        <div className="mb-2">
          <Form.Label htmlFor="Email">Email</Form.Label>
          <Form.Control
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            type="text"
            id="email"
            placeholder="Email"
          />
          {formik.touched.email && formik.errors.email}
        </div>
        <div className="mb-2">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            type="password"
            id="password"
            aria-describedby="passwordHelpBlock"
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password}
        </div>
        <div className="mb-2">
          <Form.Label htmlFor="password">Confirm Password</Form.Label>
          <Form.Control
            value={formik.values.confirmPassword}
            onChange={formik.handleChange("confirmPassword")}
            onBlur={formik.handleBlur("confirmPassword")}
            type="password"
            id="confirm password"
            aria-describedby="passwordHelpBlock"
            placeholder="Confirm Password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword}
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
