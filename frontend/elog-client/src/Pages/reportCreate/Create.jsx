import React from "react";
import classes from "./report.module.css";

export default function CreateReport() {
  return (
    <div>
      <h1>Report creation</h1>
      <form action="">
        <label htmlFor="Title">Title</label>
        <input type="text" />
        <label htmlFor="description">Description</label>
        <textarea type="text" row="30" column="10" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
