import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects, updateProject } from "../Redux/Project/ProjectAction";
import { getUserfromLocalStorage } from "../Utils/Utils";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function EditProject() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [repolink, setRepolink] = useState("");
  const [deployedlink, setDeployedlink] = useState("");
  const [tags, setTags] = useState("");
  const [techused, setTechused] = useState("");

  const { projectid } = useParams();

  //getting projects
  const projectState = useSelector((state) => state.project);
  const { projects, isError, isProjectSuccess, message } = projectState;
  useEffect(() => {
    async function fetchData() {
      await dispatch(getProjects());
    }
    fetchData();
  }, []);
  const selectedProject = projects.find((project) => project._id === projectid);

  const editProject = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataobj = {};
    data.forEach(function(value, key){
        dataobj[key] = value;
    });
    dataobj.id = projectid;
    await dispatch(updateProject(dataobj));

    //await setName('')
    // await setPassword('')
    //await setEmail('')
    navigate(`/project/${projectid}`);
  };

  // console.log(selectedProject)
  return (
    <div>
      <Container className="d-flex justify-content-center mt-5 mb-5">
        <Row>
          <h1>Edit Project</h1>
          <Col>
            {selectedProject ? (
              <Form onSubmit={editProject}>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom01"
                >
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    defaultValue={selectedProject.name}
                    required
                    type="text"
                    placeholder="Project Name"
                    name="name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom02"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    defaultValue={selectedProject.description}
                    required
                    as="textarea"
                    placeholder="Description"
                    name="description"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom03"
                >
                  <Form.Label>Tech Stack</Form.Label>
                  <Form.Control
                    defaultValue={selectedProject.techused}
                    required
                    type="text"
                    placeholder="Tech Stack"
                    name="techused"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom04"
                >
                  <Form.Label>Tags</Form.Label>
                  <Form.Control
                    defaultValue={selectedProject.tags}
                    type="text"
                    placeholder="Tags"
                    name="tags"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom05"
                >
                  <Form.Label>GitHub Link</Form.Label>
                  <Form.Control
                    defaultValue={selectedProject.repolink}
                    required
                    type="text"
                    placeholder="GitHub Link"
                    name="repolink"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="validationCustom06"
                >
                  <Form.Label>Deployed Link</Form.Label>
                  <Form.Control
                    defaultValue={selectedProject.deployedlink}
                    required
                    type="text"
                    placeholder="Deployed Project"
                    name="deployedlink"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                {/* <Form.Group
                        className="mb-3 text-start"
                        controlId="validationCustom02"
                    >
                        <Form.Label>Images</Form.Label>
                        <Form.Control value={selectedProject.image} required type="file" placeholder="Images" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group> */}
                <Button type="submit" variant="success">
                  Update Project
                </Button>
              </Form>
            ) : (
              <p>Loading...</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EditProject;
