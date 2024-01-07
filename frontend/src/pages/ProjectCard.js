// ProjectCard.js

import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ project }) => {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img variant="top img-fit" src={project.image} />
      <Card.Body className="text-start">
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <div className="text-end">
          <a href="#" className="btn btn-outline-primary">
            {" "}
            View Details{" "}
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
