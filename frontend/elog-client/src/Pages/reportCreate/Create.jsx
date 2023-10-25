import React from "react";
import "./report.css";

export default function CreateReport() {
  return (
    <div>
      <h1>Report creation</h1>
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
          <input type="text" className="createReport" placeholder="category" />
        </div>
        <div className="form">
          <label htmlFor="description">Description:</label>
          <br></br>
          <textarea
            className="createReport"
            type="text"
            row="30"
            column="10"
            placeholder="Enter the content here"
          />
        </div>

        <button type="button" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
