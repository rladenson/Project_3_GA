import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects, deleteProject } from "../Redux/Project/ProjectAction";
import { getUserfromLocalStorage } from "../Utils/Utils";
import Banner from "../components/Banner";
import ProjectCard from "./ProjectCard";
import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from 'react-router-dom'


function ShowProject() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projectid } = useParams(); // Access the :projectid parameter from the URL

  const projectState = useSelector((state) => state.project);
  const { projects, isLoading, isError, isProjectSuccess, isDeleteSuccess, message } = projectState;
  const currentUser = getUserfromLocalStorage;

  useEffect(() => {
    async function fetchData() {
      dispatch(getProjects());
    }
    fetchData();
  }, []);

  const deleteThisProject = async () => {
    dispatch(deleteProject(projectid));
  }

  const goHome = () => {
    setTimeout(() => {
      navigate("/home");
    }, 100)
    return <></>;
  }

  const selectedProject = projects.find((project) => project._id === projectid);
// console.log(selectedProject)
if(selectedProject)
  return (
    <>
     <Col  className="mx-auto my-auto" md={6} style={{maxWidth: "800px"}}>
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top img-fit"
              src={selectedProject.image}
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
                <div>{selectedProject.name}</div>
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
                {selectedProject.techused.map((item, i) => {
                  return (
                    <p className="me-3" key={i}>
                      <i className="bi bi-check-circle"></i> {item}
                    </p>
                  )
                })}
              </div>
              <Card.Text>
                {" "}
                {selectedProject.description}
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Tags: {selectedProject.tags}
                </ListGroup.Item>
                <ListGroup.Item>Created by   <Link to={`/profile/${selectedProject.createdBy._id}`}>
          {selectedProject.createdBy.name}
        </Link></ListGroup.Item>
              </ListGroup>
              <div className="text-end">
                <a className="card-link btn btn-info" href={`/project/${projectid}/edit`}>
                  Edit
                </a>
                <button className="card-link btn btn-danger" onClick={deleteThisProject}>
                  Delete
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {isDeleteSuccess && !isLoading ? goHome() : ""}
    </>
  )
  else return <></>
}

export default ShowProject;







