import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  {useDispatch, useSelector} from 'react-redux'
import * as yup from 'yup'
import {useFormik} from 'formik'
import { register } from '../../Redux/Auth/AuthAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { useState } from "react";
import React from "react";
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
    password:yup.string().required("Password is required"),
    name:yup.string().required("Name is required")
})

function SignUp() {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const authState = useSelector(state=>state.auth)

  const {isRegisterSuccess,message} = authState

  const formik = useFormik({
      initialValues:{
          email:"",
          password:"",
          name:""
      },
      validationSchema:schema,
      onSubmit:(values)=>{
          //console.log(values);
          dispatch(register(values))
      }
  })

  useEffect(()=>{
      if(isRegisterSuccess){
          toast.success(message)
          navigate("/")// to login
      }
      else{
          navigate("/register")
      }
  },[navigate,isRegisterSuccess])

  return (
    <Container className="d-flex justify-content-center">
      <Row style={{ width: "25rem" }}>
        <Col>
          <Card className="mt-5 mb-5 shadow">
          <Card.Img variant="top img-fit" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
              <Card.Title>Register A New User</Card.Title>
              <Form onSubmit={formik.handleSubmit}>
              <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom0"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="email" placeholder="Email Address" value={formik.values.email} onChange={formik.handleChange("email")}/>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3 text-start" controlId="validationCustom01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control required type="text" placeholder="Name" value={formik.values.name} onChange={formik.handleChange("name")} />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="validationCustom02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    value={formik.values.password} onChange={formik.handleChange("password")}/>
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
