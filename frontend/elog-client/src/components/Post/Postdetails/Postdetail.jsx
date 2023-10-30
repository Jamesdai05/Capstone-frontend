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
      <div className="showreportTitle">
        <h1 className="reportTitle">{report.title}</h1>
      </div>
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere aut
            libero fugiat unde, repudiandae suscipit labore sapiente, magni,
            harum accusantium consequatur? Atque fugit non ipsam magni quasi!
            Iusto sapiente voluptas vero? Illum quasi omnis minus, commodi,
            architecto doloribus voluptatum beatae quibusdam sequi a deserunt
            voluptatem debitis porro eos eum expedita animi dicta? Voluptatem
            assumenda minima cupiditate corrupti cum, reprehenderit labore
            adipisci recusandae perspiciatis autem! Tempore quae veritatis
            quidem veniam quaerat. Optio earum sint error nostrum dolore
            dignissimos, laborum cumque. Iure, debitis aspernatur eligendi
            mollitia vitae magni aliquid? Blanditiis eveniet aliquam vel
            necessitatibus dolore ipsum debitis consequuntur, animi modi
            laboriosam laudantium nulla non eos iste perspiciatis corporis
            fugiat exercitationem deserunt officia. Eum, temporibus natus. In
            similique placeat quam tempore harum consectetur officiis quis
            deserunt facere? Id hic, reiciendis ex velit suscipit deserunt quia
            ipsam quis atque quo aliquid magnam excepturi, dolor, ea dolores
            quidem delectus. Doloribus blanditiis, laudantium voluptate unde
            optio quaerat! Quo voluptates tenetur praesentium maxime, facilis
            optio corporis animi rem unde molestias voluptatibus id earum
            maiores laborum nesciunt iure minus, perspiciatis iusto tempora
            itaque ipsum vitae? Similique numquam ratione nesciunt tenetur
            nostrum. Earum adipisci nisi asperiores quibusdam ex autem ipsum
            optio reiciendis in vitae! Praesentium facilis debitis laudantium
            doloremque sapiente suscipit tenetur nobis, natus expedita adipisci
            impedit rem dolorum corrupti corporis, saepe ipsum porro molestias!
            Esse modi vitae dignissimos maiores recusandae inventore nam iste,
            voluptatibus dolor consectetur officiis doloribus, nostrum quis
            porro est laborum debitis nesciunt id eum pariatur, aspernatur
            commodi eaque nobis dicta? Voluptatum cupiditate facilis quae
            exercitationem, iure distinctio iusto pariatur deleniti harum est
            velit voluptas expedita quibusdam voluptatibus laudantium. Amet
            numquam laborum rem ipsum praesentium repudiandae earum dolores
            facilis libero tempora veritatis, ipsa, error est quam sit minima
            expedita non iusto soluta quibusdam eius voluptatem. Illo aperiam
            ullam dolore possimus facere magni ipsa neque aliquid suscipit.
          </p>
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
