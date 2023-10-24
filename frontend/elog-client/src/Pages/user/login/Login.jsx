import React from "react";
import { Container, Form, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

export default function Login() {
  return (
    <Container id="main-container" className="mb-3 auth-wrapper">
      <div id="login">
        <h1 className="mb-2 fs-3 fw-normal">Login</h1>
        <div className="mb-2">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control type="text" id="username" placeholder="Username" />
        </div>
        <div className="mb-2">
          <Form.Label htmlFor="Email">Email</Form.Label>
          <Form.Control type="text" id="email" placeholder="Email" />
        </div>
        <div className="mb-2">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            aria-describedby="passwordHelpBlock"
            placeholder="Password"
          />
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
      </div>
    </Container>
  );
}
