import React, { useEffect } from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { getProjects } from '../../Redux/Post/PostAction'
// import { getUserfromLocalStorage } from '../../Utils/Utils'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Banner from '../components/Banner';

const projectData = [
    {
      id: 1,
      title: "Project 1",
      description: "Description for Project 1",
      image: "https://example.com/project1.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for Project 2",
      image: "https://example.com/project2.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for Project 3",
      image: "https://example.com/project3.jpg",
    },
    // Add more projects as needed
  ];

function Home() {
    return(
        <>
        <Banner/>
              <div className="mt-3 py-5 bg-body-tertiary">
        <Row xs={1} md={3} className="g-3 mx-auto">
          {projectData.map((project) => (
            <Col key={project.id}>
              <Card className="shadow-sm h-100">
                <Card.Img variant="top img-fit" src={project.image} />
                <Card.Body className="text-start">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="text-end">
                    <a
                      href={`/projects/${project.id}`}
                      className="btn btn-outline-primary"
                    >
                      {" "}
                      View Details{" "}
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      </>
    )
}

export default Home;

// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Image from 'react-bootstrap/Image';

// const profileImg = {
//   image:
//     "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// };

// function Home({ home }) {
//   const homeArr = home.map(function (Home, index) {
//     return (
//       <Col md={3} key={index}>
//         <div className="Card row row-cols-1 row-cols-md-3 g-4 width 18em"> 
//         <div className="holder">
//           <Card className="mb-3" style={{width: '18em'}}>
//             <Card.Img variant="top" src={Home.image} />
//             <Card.Body>
//               <h3 className="home-name">{Home.name}</h3>
//               <a href="#" className="btn btn-primary">
//                 Visit Portfolio
//               </a>
//             </Card.Body>
//           </Card>
//         </div>
//         </div>
//       </Col>
//     )
   
//   });
//   return (
//     <section id="homepage" className="block home-block">
//       <Container>
//         <Row xl={3}>
//          <Col md={1} className="ms-auto me-auto">
//          <Image src={profileImg.image} roundedCircle height="150px" />
//          </Col>
//          {homeArr}
//         </Row>
//       </Container>
//     </section>
    
//   );
// }

// export default Home;

