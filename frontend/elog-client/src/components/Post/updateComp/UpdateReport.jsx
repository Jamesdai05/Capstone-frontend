import { useFormik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  // category: Yup.object().required("Category is required"),
});

export default function UpdateReport(props) {
  const formik = useFormik({
    intialValues: {
      title: " ",
      description: " ",
      category: " ",
    },

    onSubmit: (values) => {
      // console.log(values)
    },
  });

  return (
    <>
      <div>
        <h1>Report Update</h1>
      </div>
      <div>
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
              // value={formik.values.category}
              // onChange={formik.handleChange("category")}
              // onBlur={formik.handleBlur("category")}
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
              // value={formik.values.description}
              // onChange={formik.handleChange("description")}
              // onBlur={formik.handleBlur("description")}
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
      </div>
    </>
  );
}
