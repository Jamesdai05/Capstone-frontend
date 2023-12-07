import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import image from "./img600.jpg";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Postdetail from "./Postdetails/Postdetail";
// import { useDispatch } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

function Post({ description, title, id }) {
  // const dispatch = useDispatch();
  // const post = useSelector((state) => state?.post);
  // const  {loading, appErr,serverErr} = post
  // console.log(post);

  // console.log(props);
  // select post details from store
  return (
    <Card style={{ width: "20rem", height: "18rem" }} className="card">
      {/* <Card.Img variant="top" src={image} /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text">{description}</Card.Text>
        <div className="viewmore">
          <Nav.Link as={Link} to={`posts/${id}`} element={<Postdetail />}>
            <Button variant="primary" className="text right">
              view more
            </Button>
          </Nav.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Post;
