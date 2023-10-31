import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../../Pages/Home/Homepage";
import Profile from "../../Pages/profile/Profile";
import Admin from "../admin/Admin";
import Registration from "../../Pages/user/registration/Registration";
import Login from "../../Pages/user/login/Login";
import CreateReport from "../../Pages/reportCreate/Create";
import Postdetail from "../Post/Postdetails/Postdetail";
import { useSelector } from "react-redux";

const Navigation = () => {
  // JSON.parse(localStorage.getItem("userInfo")).user === "6540665fd397936ded19a193" ? ;
  const store = useSelector((state) => state?.users);
  const { usersAuth } = store;

  const handleLogOut = ()=>{
    localStorage.removeItem("userInfo");
  }

  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand href="/">E-Log</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"} element={<Home />}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/create"} element={<CreateReport />}>
                Create
              </Nav.Link>
              {/* <Nav.Link as={Link} to={"/show"} element={<Postdetail />}>
                Show
              </Nav.Link> */}
              <Nav.Link as={Link} to={"/profile"} element={<Profile />}>
                Profile
              </Nav.Link>
              {JSON.parse(localStorage.getItem("userInfo"))?.user ===
              "6540665fd397936ded19a193" ? (
                <Nav.Link as={Link} to={"/admin"} element={<Admin />}>
                  Admin
                </Nav.Link>
              ) : null}
            </Nav>
            <Nav>
              {usersAuth ? (
                <Nav.Link
                  as={Link}
                  onClick={handleLogOut}
                  to={"/auth/login"}
                  element={<Login />}
                >
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to={"/auth/login"} element={<Login />}>
                  Login
                </Nav.Link>
              )}
              <Nav.Link
                as={Link}
                to={"/auth/register"}
                element={<Registration />}
              >
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
