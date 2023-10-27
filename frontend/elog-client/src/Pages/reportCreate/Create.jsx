import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./report.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import Selection from "../../components/Dropdown/Dropdown";

import { createPostAction } from "../../redux/slices/reports/postSlices";

//form validation
const formSchema = Yup.object().shape({
  title: Yup.string().required("title is required!"),
  description: Yup.string().required("Description is required!"),
});

export default function CreateReport() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      // category: "",
      description: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      dispatch(createPostAction(values));
    },
    validationSchema: formSchema,
  });
  return (
    <>
      <div>
        <h1>Report creation</h1>
      </div>
      <div>
        <form id="createReport" onSubmit={formik.handleSubmit}>
          <div id="selection">
            <Selection />
          </div>
          <div className="creat-title">
            <label htmlFor="Title">Title:</label>
            <br></br>
            {/* will be set to the selection bar later on */}
            <input
              value={formik.values.title}
              onChange={formik.handleChange("title")}
              onBlur={formik.handleBlur("title")}
              className="createReport"
              type="text"
              placeholder="Enter the title here"
              id="title"
              name="title"
              autoComplete="title"
            />
            <p className="text-danger">{formik?.touched?.title}</p>
          </div>

          <div className="form">
            <label htmlFor="description">Description:</label>
            <br></br>
            <textarea
              value={formik.values.description}
              onChange={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
              id="description"
              name="description"
              className="createReport"
              type="text"
              rows="18"
              cols="20"
              placeholder="Enter the content here"
            />
            <p className="text-danger">{formik?.touched?.description}</p>
          </div>
          <div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
