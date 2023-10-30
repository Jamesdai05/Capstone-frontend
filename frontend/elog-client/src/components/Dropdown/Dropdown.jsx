import React from "react";
import { Form } from "react-bootstrap";

export default function Dropdown() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Select a category</option>
      <option value="1">Metrology</option>
      <option value="2">QA Related</option>
      <option value="3">Common Enginnering</option>
      <option value="4">Production Enginnering</option>
      <option value="5">Product Development</option>
      <option value="6">Equipment</option>
    </Form.Select>
  );
}

