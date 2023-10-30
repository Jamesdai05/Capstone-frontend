import React, { useEffect, useState } from "react";
import "./postdetail.css";
import { Button, Modal, Nav } from "react-bootstrap";
// import { fetchPostDetailsAction } from "../../../redux/slices/reports/postSlices";
// import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../../utils/baseUrl";
import { Link, useNavigate, useParams } from "react-router-dom";
import UpdateReport from "../updateComp/UpdateReport";
// import Home from "../../../Pages/Home/Homepage";
// import   Test from "../updateComp/Test";

export default function Postdetail() {
  const [report, setReport] = useState({});
  const [show, setShow] = useState(false);
  // modal popup for delete button
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const navigate = useNavigate();

  //delete report
  const deleteFormData = async (report) => {
    try {
      const response = await fetch(`${baseURL}/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // if(!response.ok){
      //   throw new Error("Fail to delete form!")
      // }
      // console.log("Document is deleted!")

      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleDelete = async (Data) => {
    const response = await deleteFormData(Data);

    if (response?.status === 200) {
      // The API call was successful.
      console.log("Report has been deleted..");
      navigate("/");
    } else {
      // Handle the error.
      console.log("Report deleted unsuccessful!");
    }
  };

  //show page

  useEffect(() => {
    const makeApiCall = () => {
      fetch(`${baseURL}/api/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setReport(data);
        });
    };
    makeApiCall();
    // axios
    //   .get(`${baseURL}/api/posts/${id}`)
    //   .then((response) => {
    //     setReport(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log(report);
    // console.log(report.title);
    // console.log(report.createdAt);
    // console.log(typeof report.user.username);
    report.user?.username
      ? console.log(report.user?.username)
      : console.log("null");
  }, []);

  return (
    <div className="showContainer">
      <h1 className="reportTitle">{report.title}</h1>
      <div className="show-sub">
        <div>
          <p className="postBy">
            {report.user?.username ? report.user.username : null}
          </p>
        </div>
        <div>
          <p className="post-at">{report.createdAt}</p>
        </div>
      </div>
      <div>
        <div className="show-Main">
          <p>{report.description}</p>
          {/* this the report paragraph. */}
        </div>
        <div id="button">
          <div>
            <Nav.Link
              as={Link}
              to={`/updatepost/${id}`}
              element={<UpdateReport />}
            >
              {/* <Nav.Link href={`/updatepost/${id}`} element={<Test />}> */}
              <Button>Update</Button>
            </Nav.Link>
          </div>
          <div>
            <Button variant="primary" onClick={handleShow}>
              Delete
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              {/* <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header> */}
              <Modal.Body>Are you sure want to delete the report?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  No
                </Button>
                <Button variant="primary" onClick={handleDelete} type="submit">
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
