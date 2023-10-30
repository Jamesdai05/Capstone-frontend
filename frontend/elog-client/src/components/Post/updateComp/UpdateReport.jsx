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
  // console.log(props);
  const { id } = useParams();
  console.log(id);

  const [report, setReport] = useState({});

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      title: report.title,
      description: report.description,
      category: report.category,
      // user: JSON.parse(localStorage.getItem("userInfo")).user,
    },
    validationSchema: formSchema,

    onSubmit: async (values) => {
      try {
        // Submit the form data to the server.
        console.log("1");
        const response = await fetch(`${baseURL}/api/posts/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        console.log("2");
        console.log(values);
        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
        console.log("Form submitted successfully");
      } catch (error) {
        console.log("Error submitting form:", error);
      }
      // console.log(values);
      //     setReport(values);
      //     // console.log(report);
      //   },
      // });
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
          formik.setFieldValue("category", data.category);
          // setReport(data);
        });
    };
    makeApiCall();
    // report?.title ? console.log(report.title) : console.log("null");
  }, [id,formik]);

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
                value={formik.values.title}
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
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Formik>
      </div>
    </>
  );
}
