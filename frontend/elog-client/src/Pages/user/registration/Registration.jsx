import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./registration.css";

export default function Registration() {
  return (
    <Container id="main-container" className="mb-3">
      <div id="registration">
        <h1 className="mb-2 fs-3 fw-normal">Sign Up</h1>
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
        <div className="mb-2">
          <Form.Label htmlFor="password">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            id="confirm password"
            aria-describedby="passwordHelpBlock"
            placeholder="Confirm Password"
          />
        </div>
        <Button className="ml-3" size="lg" type="submit">
          Sign Up
        </Button>
      </div>
    </Container>
  );
}
