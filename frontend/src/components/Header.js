import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    <>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">devPort</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Projects</Nav.Link>
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light"><i class="bi bi-search"></i></Button>
          </Form>
          <Nav>
          <Nav.Link href="#action1">Sign Up</Nav.Link>
          <Nav.Link href="#action2">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section className="py-5 text-center m-0">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light text-white-50">devPort</h1>
            <p className="lead text-white-50">Discover, Connect, Collaborate</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;