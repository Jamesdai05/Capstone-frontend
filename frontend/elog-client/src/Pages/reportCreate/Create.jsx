// import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./report.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dropzone from "react-dropzone"
// import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import Selection from "../../components/Dropdown/Dropdown";
import { createPostAction } from "../../redux/slices/reports/postSlices";
import { useNavigate } from "react-router-dom";
// import ImgUpload from "../../components/test/ImgUpload";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../utils/baseUrl";
import styled from "styled-components";


//form validation
const formSchema = Yup.object().shape({
  title: Yup.string().required("title is required!"),
  description: Yup.string().required("Description is required!"),
  user: Yup.string().required("User is required!"),
  category:Yup.string().required("Cateogry is required!")
});


// }
// useEffect(() => {
  //   const temp = JSON.parse(localStorage.getItem("userInfo"));
  //   console.log(temp);
  //   // setUserInfo(temp);
  //   setUserInfo(temp.user);
  //   console.log(temp.user);
  // }, []);
  // const userId = userInfo.user

//css for dropzone

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
border-color:'red'
  transition: border 0.24s ease-in-out;
`;



export default function CreateReport() {
  // const [file,setFile] = useState()
  // const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  // const [userInfo, setUserInfo] = useState("");
  //

  // async function postImage({ image, description }) {
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   // formData.append("description", description);

  //   const result = await axios.post(
  //     `${baseURL}/api/posts/imageupload`,
  //     formData,
  //     { headers: { "Content-Type": "multipart/form-data" } }
  //   );
  //   return result.data;
  // }

  // const submit = async (event) => {
  //   event.preventDefault();
  //   const result = await postImage({ image: file});
  //   setImages([result.image, ...images]);

  // };

  // const fileSelected = (event) => {
  //   const file = event.target.files[0];
  //   setFile(file);
  // };



  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
      photo:"",
      user: JSON.parse(localStorage.getItem("userInfo")).user,
    },
    onSubmit: (values) => {
      console.log(values);

      // const result = postImage({ image: file});
      // setImages([result.image, ...images]);
      // console.log(images)
      // console.log(file);

      dispatch(createPostAction(values));
      // console.log(values)
      navigate("/");
    },
    validationSchema: formSchema,
  });

  // const handleClick=()=>{
  //   return navigate("/");
  // }

  return (
    <>
      <div>
        <h1>Report creation</h1>
      </div>
      <div>
        <form id="createReport" onSubmit={formik.handleSubmit}>

          {/* <Selection /> */}
          {/* </div> */}
          <div>
            <label htmlFor="category">Category:</label>
            <select name="category" id="category"
            onBlur={formik.handleBlur("category")}
            onChange={formik.handleChange("category")}
            value={formik.values.category}>

              <option>Please select an category</option>
              <option value="Metrology">Metrology</option>
              <option value="QA Related<">QA Related</option>
              <option value="Common Enginnering">Common Enginnering</option>
              <option value="Production Enginnering">
                Production Enginnering
              </option>
              <option value="Product Development">Product Development</option>
              <option value="Equipment">Equipment</option>
            </select>
          </div>
          <div className="imageUpload">
            {/* <label htmlFor="file">File:</label>
            <input
              // value={formik.values.file}
              // onChange ={formik.handleChange("file")}
              onChange={(event) => {
                fileSelected(event);
                formik.setFieldValue("file", event.currentTarget.files[0]);
              }}
              onBlur={formik.handleBlur("file")}
              // onChange={fileSelected}
              type="file"
              id="file"
              accept="image/*"
            ></input> */}
            {/* <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            ></input> */}
            {/* <Dropzone onDrop={(acceptFiles)=>{formik.setFieldValue("photo",acceptFiles[0])}}
              accept="image/jpeg, image/png" onChange={formik.handleChange("photo")}></Dropzone>
              {({getRootProps,getInputProps})=>(
                <div className="fileContainer">
                  <div {...getRootProps({className:"dropzone",onDrop:event=>event.stopPropagation(),})}>
                  <input {...getInputProps()} />
                  <p className="text-gray-300 text-lg cursor-pointer ">Click here to select an image</p>
                  </div>
                </div>
              )} */}
            {/* <Container className="container bg-gray-700">
              <Dropzone
                onBlur={formik.handleBlur("image")}
                accept="image/jpeg, image/png"
                onDrop={(acceptedFiles) => {
                  formik.setFieldValue("image", acceptedFiles[0]);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div className="container">
                    <div
                      {...getRootProps({
                        className: "dropzone",
                        onDrop: (event) => event.stopPropagation(),
                      })}
                    >
                      <input {...getInputProps()} />
                      <p className="text-gray-300 text-lg cursor-pointer hover:text-gray-500">
                        Click here to select image
                      </p>
                    </div>
                  </div>
                )}
              </Dropzone>
            </Container> */}
          </div>
          <div className="create-title">
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
          <div className="fileupload">
            <Container className="container bg-gray-700">
              <Dropzone
                onBlur={formik.handleBlur("photo")}
                accept="image/jpeg, image/png"
                onDrop={(acceptedFiles) => {
                  formik.setFieldValue("photo", acceptedFiles[0]);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div className="container">
                    <div
                      {...getRootProps({
                        className: "dropzone",
                        onDrop: (event) => event.stopPropagation(),
                      })}
                    >
                      <input {...getInputProps()} />
                      <p className="text-gray-600 text-lg cursor-pointer hover:text-gray-500">
                        Click here to select image
                      </p>
                    </div>
                  </div>
                )}
              </Dropzone>
            </Container>
          </div>
          <div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
        <div>
          {/* <img
            src="https://capstonbucket.s3.ap-southeast-1.amazonaws.com/b1d12603016f281593a748ce21f6c546"
            alt="img-test"
          /> */}
        </div>
      </div>
    </>
  );
}
