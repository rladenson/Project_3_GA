import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../Redux/Project/ProjectAction";
import { getUserfromLocalStorage } from "../Utils/Utils";
import Banner from "../components/Banner";
import ProjectCard from "./ProjectCard";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ShowProject() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Access the :id parameter from the URL


  const projectState = useSelector((state) => state.project);
  const { projects, isError, isProjectSuccess, message } = projectState;
  const currentUser = getUserfromLocalStorage;

  useEffect(() => {
    async function fetchData() {
      await dispatch(getProjects());
    }
    fetchData();
  }, []);
  const selectedProject = projects.find((project) => project.id === id);
// console.log(selectedProject)
  return (
    <>
     <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top img-fit"
              src="https://images.unsplash.com/photo-1685478237496-d4e545f1e317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />


            {/* <Carousel>
              {allProjects.map((project) =>
                project.img.map((imgURL, index) => (
                  <Carousel.Item key={index}>
                    <Image src={imgURL} style={{ width: '100%', height: '300px', objectFit: 'cover' }}/>
                    <Carousel.Caption>
                      <h3>
                        Project {project.id} - Image {index + 1}
                      </h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              )}
            </Carousel> */}

            <Card.Body className="text-start">
              <Card.Title className="d-md-flex justify-content-between">
                <div>Project Name</div>
                <small>
                  <a style={{ textDecoration: "none" }} href={selectedProject.repolink}className="icon">
                    <i className="bi bi-github"> GitHub Repository</i>
                  </a>{" "}
                  <a style={{ textDecoration: "none" }} href={selectedProject.deployedlink} className="icon">
                    <i className="bi bi-browser-chrome"> Deployed Project</i>
                  </a>
                </small>
              </Card.Title>
              <div className="d-flex flex-wrap mt-3">
                <p className="me-3">
                  <i className="bi bi-check-circle"></i> React
                </p>
                <p className="me-3">
                  <i className="bi bi-check-circle"></i> Javascript
                </p>
              </div>
              <Card.Text>
                {" "}
                {selectedProject.description}
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Tags: {selectedProject.tags}
                </ListGroup.Item>
                <ListGroup.Item>Created by {selectedProject.createdBy.name}</ListGroup.Item>
              </ListGroup>
              <div className="text-end">
                <a className="card-link btn btn-info" href="/">
                  Edit
                </a>
                <a className="card-link btn btn-danger" href="/">
                  Delete
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
    </>
  );
}

export default ShowProject;







