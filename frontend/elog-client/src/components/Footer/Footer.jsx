import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className="footer-copyright text-center py-3">
      <Container fluid>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://www.google.com"> JamesDAI@hotmail.com </a>
      </Container>
    </div>
  );
};
