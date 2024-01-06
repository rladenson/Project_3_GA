import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";

function Header() {
  const authState = useSelector((state) => state.auth);
  const { user } = authState;

  const Logout = () => {
    return (
      <Nav>
        <Nav.Link type="submit" href="#action2">
          Log Out
        </Nav.Link>
      </Nav>
    );
  };
  const Login = () => {
    return (
      <Nav>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        <Nav.Link type="submit" href="/">
          Log In
        </Nav.Link>
      </Nav>
    );
  };
  const AuthedLinks = () => {
    return (
      <>
        <Nav.Link href="/project">Projects</Nav.Link>
        <Nav.Link href="/createProject">Add Project</Nav.Link>
        <NavDropdown title="Profile" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>
          <NavDropdown.Item href="/editProfile">Edit Profile</NavDropdown.Item>
        </NavDropdown>
      </>
    );
  };
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">devPort</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              {user ? <AuthedLinks /> : ""}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
            {user ? <Logout /> : <Login />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
