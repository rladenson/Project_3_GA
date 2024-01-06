import { useState } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function SignUp() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row style={{ width: "25rem" }}>
        <Col>
          <Card className="mt-5 mb-5 shadow">
          <Card.Img variant="top img-fit" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
              <Card.Title>Register A New User</Card.Title>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom0"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="email" placeholder="Email Address" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3 text-start" controlId="validationCustom01">
                  <Form.Label>Username</Form.Label>
                  <Form.Control required type="text" placeholder="Username" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="validationCustom02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Button className="col-12" type="submit" variant="success">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
