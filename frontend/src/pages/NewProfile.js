import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Axios from "axios";

function NewProfile(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle Submit function
  const handleSubmit = async (event) => {
    event.preventDefault();
    const image = await uploadImage();
    const data = new FormData(event.target);
    data.set("img", image);
    data.append("name", data.get("firstname") + " " + data.get("lastname"));
    props.createUser(data);
  };

  const uploadImage = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", "efd7rebz");

      const res = await Axios.post(
        "https://api.cloudinary.com/v1_1/drhvmsq7q/image/upload",
        formData
      );
      return res.data.secure_url;
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className="mt-5">
      <h4 className="mb-3">Create Profile</h4>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col md={3}>
            {selectedImage ? (
              <Image
                className="profile-pic mb-3"
                src={selectedImage}
                roundedCircle
              />
            ) : (
              <Image
                className="profile-pic mb-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                rounded
              />
            )}
            <Form.Control
              type="file"
              className="mb-3"
              name="img"
              onChange={handleImageChange}
            />
          </Col>
          <Col md={5}>
            <Row>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingUsername"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingFirstname"
                  label="First name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    name="firstname"
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingLastname"
                  label="Last name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    name="lastname"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel
              controlId="floatingjobTitle"
              label="Job title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Job title"
                name="jobtitle"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingLinkedIn"
              label="LinkedIn"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="LinkedIn"
                name="linkedIn_link"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingGitHub"
              label="GitHub"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="GitHub"
                name="gitHub_link"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingStackOverflow"
              label="Stack Overflow"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Stack Overflow"
                name="stackOverFlow_link"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingTwitter"
              label="Twitter"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Twitter"
                name="twitter_link"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingFacebook"
              label="Facebook"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Facebook"
                name="faceBook_link"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              type="submit"
              variant="success"
              className="mb-3"
            >
              Save Profile
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default NewProfile;
