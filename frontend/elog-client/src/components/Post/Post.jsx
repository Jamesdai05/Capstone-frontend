import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import image from "./img600.jpg";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Postdetail from "./Postdetails/Postdetail";

function Post(props) {
  return (
    <Card style={{ width: "20rem", height: "18rem" }} className="card">
      {/* <Card.Img variant="top" src={image} /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="text">{props.description}</Card.Text>
        <Nav.Link as={Link} to={"/show"} element={<Postdetail />}>
          <Button variant="primary" className="text right">
            view more
          </Button>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
}

export default Post;
