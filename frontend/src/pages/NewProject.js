import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function NewProject() {
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
    <Container className="d-flex justify-content-center mt-5 mb-5">
    <Row>
      <h1>New Project</h1>
      <Col>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          
        >
          <Form.Group
            className="mb-3 text-start"
            controlId="validationCustom01"
          >
            <Form.Label>Project Name</Form.Label>
            <Form.Control required type="text" placeholder="Project Name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className="mb-3 text-start"
            controlId="validationCustom02"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control required as="textarea" placeholder="Description" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3 text-start"
            controlId="validationCustom02"
          >
            <Form.Label>Tech Stack</Form.Label>
            <Form.Control required type="text" placeholder="Tech Stack" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3 text-start"
            controlId="validationCustom02"
          >
            <Form.Label>Tags</Form.Label>
            <Form.Control type="text" placeholder="Description" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3 text-start"
            controlId="validationCustom02"
          >
            <Form.Label>GitHub Link</Form.Label>
            <Form.Control required type="text" placeholder="GitHub Link" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3 text-start"
            controlId="validationCustom02"
          >
            <Form.Label>Deployed Link</Form.Label>
            <Form.Control required type="text" placeholder="Deployed Project" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3 text-start"
            controlId="validationCustom02"
          >
            <Form.Label>Images</Form.Label>
            <Form.Control required type="file" placeholder="Images" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="success">
            Add Project
          </Button>
        </Form>
      </Col>
    </Row>
    </Container>
  );
}

export default NewProject;
