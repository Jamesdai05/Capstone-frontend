import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image from "./img600.jpg";

function Post() {
  return (
    <Card style={{ width: "20rem" }} className="card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla
          est minus animi accusamus quis deleniti sequi nihil facilis commodi!
        </Card.Text>
        <Button variant="primary" className="text right" type="submit">
          View more
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
