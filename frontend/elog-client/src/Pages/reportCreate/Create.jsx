import React from "react";
import { Button } from "react-bootstrap";
import "./report.css";

export default function CreateReport() {
  return (
    <>
      <div>
        <h1>Report creation</h1>
      </div>
      <div>
        <form action="">
          <div className="creat-title">
            <label htmlFor="Title">Title:</label>
            <br></br>
            <input
              className="createReport"
              type="text"
              placeholder="Enter the title here"
            />
          </div>
          <div>
            <label htmlFor="cat">Category:</label>
            <br></br>
            <input
              type="text"
              className="createReport"
              placeholder="category"
            />
          </div>
          <div className="form">
            <label htmlFor="description">Description:</label>
            <br></br>
            <textarea
              className="createReport"
              type="text"
              rows="15"
              cols="15"
              placeholder="Enter the content here"
            />
          </div>
          <div>
            <Button variant="primary">Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}
