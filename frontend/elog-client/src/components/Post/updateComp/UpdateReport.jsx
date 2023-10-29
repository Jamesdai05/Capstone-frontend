import { useFormik, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import "./api.js";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { baseURL } from "../../../utils/baseUrl.js";

const formSchema = Yup.object().shape({
  title: Yup.string().required("title is required!"),
  description: Yup.string().required("Description is required!"),
  //category: Yup.string().required("User is required!"),
});

export default function UpdateReport() {
  const { id } = useParams();
  // console.log(id);

  const [report, setReport] = useState({});

  const formik = useFormik({
    initialValues: {
      title: report.title,
      description: report.description,
      category: "",
    },
    validationSchema: formSchema,

    onSubmit: (values) => {
      console.log(values);
      // setReport(values);
    },
  });

  useEffect(() => {
    const makeApiCall = (req, res) => {
      fetch(`${baseURL}/api/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          formik.setFieldValue("title", data.title);
          formik.setFieldValue("description", data.description);
          setReport(data);
          // console.log(report.title);
        });
    };
    makeApiCall();
    // report?.title ? console.log(report.title) : console.log("null");
  }, []);

  const handleSubmit = (values) => {
    // Submit the form data to the server.
    fetch(`${baseURL}/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  // console.log(id);

  return (
    <>
      <div>
        <h1>Report Update</h1>
      </div>
      <div>
        <Formik initialValues={report}>
          <form id="createReport" onSubmit={formik.handleSubmit}>
            <div className="cat">
              <label htmlFor="Category">Category:</label>
              <br></br>
              {/* <Form.Select>
              <option>Default select</option>
              <option>Common Engineering</option>
              <option>Metrology & Measurement</option>
              <option>Equipment</option>
              <option>FA</option>
              <option>Product Development</option>
              <option>Process Related</option>
            </Form.Select> */}
              <input
                value={formik.values.category}
                onChange={formik.handleChange("category")}
                onBlur={formik.handleBlur("category")}
                className="createReport"
                type="text"
                placeholder="Enter the category here"
                id="category"
                name="category"
                autoComplete="category"
              />
              {/* <Selection /> */}
            </div>
            <div className="create-title">
              <label htmlFor="title">Title:</label>
              <br></br>
              {/* will be set to the selection bar later on */}
              <input
                // value={formik.values.title}
                onChange={formik.handleChange("title")}
                onBlur={formik.handleBlur("title")}
                className="createReport"
                type="text"
                // placeholder="Enter the title here"
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
              <Button variant="primary" onSubmit={handleSubmit} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Formik>
      </div>
    </>
  );
}
