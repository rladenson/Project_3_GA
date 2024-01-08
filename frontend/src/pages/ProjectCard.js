// ProjectCard.js
import React, { useState } from 'react'
import { timeSince } from '../Utils/Utils'
import { useDispatch } from 'react-redux'
import { deletePost} from '../Redux/Project/ProjectAction'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";

const ProjectCard = ({ project, currentUser }) => {

  const dispatch = useDispatch()

  return (
    <Card className="shadow-sm h-100">
      <Card.Img variant="top img-fit" src={project.image} />
      <Card.Body className="text-start">
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <div className="text-end">
        <Link
            to={`/project/${project._id}`}
            className="btn btn-outline-primary"
          >
            {' '}
            View Details{' '}
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
