import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUserAction } from "../../../redux/slices/users/usersSlices";

const formSchema = Yup.object().shape({
  // username: Yup.string().required("username is required!"),
  email: Yup.string().required("Email is required!"),
  password: Yup.string().required("password is required!"),
});

export default function Login() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginUserAction(values));
      console.log(values);
    },
    validationSchema: formSchema,
  });

  //redirct the user after login
  const store = useSelector((state) => state?.users);
  console.log(store);
  const { usersAuth, loading, serverErr, appErr } = store;
  if (usersAuth) return <Navigate to="/profile" />;

  return (
    <Container id="main-container" className="mb-3 auth-wrapper">
      <form id="login" onSubmit={formik.handleSubmit}>
        <h1 className="mb-2 fs-3 fw-normal">Login</h1>
        {appErr || serverErr ? (
          <p className="text-danger">
            {serverErr}-{appErr}
          </p>
        ) : null}
        {/* <div className="mb-2">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            value={formik.values.username}
            onChange={formik.handleChange("username")}
            onBlur={formik.handleBlur("username")}
            type="text"
            id="username"
            placeholder="Username"
            autoComplete="username"
          />
          <p className="text-danger">
            {formik.touched.username && formik.errors.username}
          </p>
        </div> */}
        <div className="mb-2">
          <Form.Label htmlFor="Email">Email</Form.Label>
          <Form.Control
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            type="text"
            id="email"
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
            aria-describedby="passwordHelpBlock"
            placeholder="Password"
            autoComplete="password"
          />
          <p className="text-danger">
            {formik.touched.password && formik.errors.password}
          </p>
        </div>
        <div>
          <Form.Check // prettier-ignore
            type="checkbox"
            id="checkbox"
            label="Remember me"
          ></Form.Check>
        </div>
        <div className="d-grid w-100">
          <Button variant="primary" size="lg" type="submit">
            Log In
          </Button>
        </div>
        <p className="forgot-password text-left">
          Forgot <a href="abc">password?</a>
        </p>
      </form>
    </Container>
  );
}
