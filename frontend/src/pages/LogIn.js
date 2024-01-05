import { useState } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function LogIn(props) {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.checkValidity())
    if (form.checkValidity()) {
      const object = {};
      const data = new FormData(form);
      data.forEach((value, key) => object[key] = value);
      const json = JSON.stringify(object);
      const res = await fetch(props.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json
      });
      if(res.status === 200) {
        props.setUser(await res.json());
        navigate("/user/id");
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row style={{ width: "25rem" }}>
        <Col>
          <Card className="mt-5 mb-5 shadow">
            <Card.Body>
              <Card.Title>Log In</Card.Title>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom01"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control required type="text" placeholder="Username" name="username" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom02"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Button className="col-12" type="submit" variant="success">
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LogIn;
