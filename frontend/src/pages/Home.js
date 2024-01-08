import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../Redux/Project/ProjectAction";
import { getUserfromLocalStorage } from "../Utils/Utils";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../components/Banner";
import ProjectCard from "./ProjectCard";

function Home() {
  const dispatch = useDispatch();

  const projectState = useSelector((state) => state.project);
  const { projects, isError, isProjectSuccess, message } = projectState;
  const currentUser = getUserfromLocalStorage;

  useEffect(() => {
    async function fetchData() {
      await dispatch(getProjects());
    }
    fetchData();
  }, []);

  return (
    <>
      <Banner />
      <div className="mt-3 py-5 bg-body-tertiary mx-auto my-auto" style={{maxWidth: "90vw"}}>
        {projects && projects.length > 0 ? (
          <Row xs={1} md={3} className="g-3 mx-auto">
            {projects.map((project, index) => (
              <Col key={index}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </>
  );
}

export default Home;

