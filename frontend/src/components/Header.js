import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logout } from "../Redux/User/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { getUserfromLocalStorage } from "../Utils/Utils";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const currentUser = getUserfromLocalStorage;

  const userState = useSelector((state) => state.user);
  const { userSearch, isSearchSuccess } = userState;

  const [userDetails, setUserDetails] = useState([]);

  // const fetchUsers = async(query)=>{
  //   await setSearch(capitalizeTxt(query))
  //   await dispatch(searchUser(query))
  //   if(isSearchSuccess){
  //     await setUserDetails(userSearch)
  //   }
  // }

  const Logout = () => {
    return (
      <Nav>
        <Nav.Link
          type="submit"
          href="#action2"
          onClick={async () => {
            await dispatch(logout());
            await navigate("/");
            await window.location.reload(true);
          }}
        >
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
        <Nav.Link href="/createProject">Add Project</Nav.Link>
        <Nav.Link href="/profile">My Profile</Nav.Link>
      </>
    );
  };
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/Home">devPort</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              {currentUser ? <AuthedLinks /> : ""}
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
            {currentUser ? <Logout /> : <Login />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
