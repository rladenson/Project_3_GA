import React from "react";
import { useNavigate } from 'react-router-dom'
import  {useDispatch, useSelector} from 'react-redux'
import * as yup from 'yup'
import {useFormik} from 'formik'
import { login } from '../Redux/Auth/AuthAction'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";


//validation
let schema = yup.object().shape({
  email:yup.string()
  .email("Email should be valid").required("Email is required"),
  password:yup.string().required("Password is required")
})

function LogIn() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const authState = useSelector(state=>state.auth)

  const {user,isError,isLoading,isLoginSuccess} = authState

  const formik = useFormik({
      initialValues:{
          email:"",
          password:""
      },
      validationSchema:schema,
      onSubmit:async (values)=>{
          await dispatch(login(values)) 
          window.location.reload(true)
      }
  })
  useEffect(() => {
      if (isLoginSuccess) {
          navigate("/home");
      }
      else {
          navigate("/");
      }
  }, [isLoginSuccess]);


  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
  return (
    <Container className="d-flex justify-content-center">
      <Row style={{ width: "25rem" }}>
        <Col>
          <Card className="mt-5 mb-5 shadow">
            <Card.Body>
              <Card.Title>Log In</Card.Title>
              <Form onSubmit={formik.handleSubmit}>
              <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom0"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="email" placeholder="Email Address" value={formik.values.email} onChange={formik.handleChange("email")}/>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                {/* <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom01"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control required type="text" placeholder="Username" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group> */}

                <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom02"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    value={formik.values.password} onChange={formik.handleChange("password")}/>
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
