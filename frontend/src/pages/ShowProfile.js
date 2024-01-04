import { useState } from "react";
import {useParams, useNavigate} from "react-router-dom"
//It (ueParams) retrieves the value of parameters specified in the root URL.
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Banner from "../components/Banner";


// const profileData = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Mark Markey",
//     title: "Full Stack Software Developer",
//   },
// ];
// const projectData = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1685478237496-d4e545f1e317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Project 1",
//     description: "Description for Project 1",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1685478237496-d4e545f1e317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Project 2",
//     description: "Description for Project 2",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1685478237496-d4e545f1e317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Project 3",
//     description: "Description for Project 3",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1685478237496-d4e545f1e317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Project 4",
//     description: "Description for Project 4",
//   },
//   {
//     id: 5,
//     image:
//       "https://images.unsplash.com/photo-1685478237496-d4e545f1e317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Project 5",
//     description: "Description for Project 5",
//   },
//   {
//     id: 6,
//     image:
//       "https://images.unsplash.com/photo-1685478237496-d4e545f1e317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Project 6",
//     description: "Description for Project 6",
//   },
// ];

// function ShowProfile(props) {
//  
//   return (
//     <>
//     <Banner/>
//     <Container className="main main-raised">
//       <Row>
//         {profileData.map((profile) => (
//           <Col key={profile.id} md={6} className="ms-auto me-auto">
//             <div className="text-center">
//               <Image
//                 className="img-raised profile-img"
//                 src={profile.image}
//                 roundedCircle
//               />
//               <div style={{ marginTop: "-60px" }}>
//                 <h3 className="title">{profile.name}</h3>
//                 <h6>{profile.title}</h6>
//                 <p className="mb-4">
//                   <Button
//                     variant="primary"
//                     size="sm"
//                     className="px-5"
//                     style={{ borderRadius: "15px" }}
//                   >
//                     Follow
//                   </Button>
//                 </p>
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>
//       <Row className="ms-auto me-auto" style={{ maxWidth: "600px" }}>
//         <Col md={4}>
//           <small>Projects</small>
//           <h4 className="font-light">3</h4>
//         </Col>
//         <Col md={4}>
//           <small>Followers</small>
//           <h4 className="font-light">400</h4>
//         </Col>
//         <Col md={4}>
//           <small>Following</small>
//           <h4 className="font-light">500</h4>
//         </Col>
//       </Row>
//       <Row className="description ms-auto me-auto">
//         <div>
//           <hr />
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
//             reprehenderit placeat rerum, nemo quia dolorem quas sequi. Hic,
//             provident eius veritatis aliquam ratione exercitationem, delectus
//             beatae sequi non obcaecati eos!
//           </p>
//           <a href="/" className="icon">
//             <i className="bi bi-github" style={{ color: "#333333" }}></i>
//           </a>
//           <a href="/" className="icon">
//             <i className="bi bi-linkedin" style={{ color: "#0082CA" }}></i>
//           </a>
//           <a href="/" className="icon">
//             <i
//               className="bi bi-stack-overflow"
//               style={{ color: "#FFAC44" }}
//             ></i>
//           </a>
//           <a href="/" className="icon">
//             <i className="bi bi-twitter" style={{ color: "#55ACEE" }}></i>
//           </a>
//         </div>
//       </Row>
//       <div className="mt-3 py-5 bg-body-tertiary">
//         <Row xs={1} md={3} className="g-3 mx-auto">
//           {projectData.map((project) => (
//             <Col key={project.id}>
//               <Card className="shadow-sm h-100">
//                 <Card.Img variant="top img-fit" src={project.image} />
//                 <Card.Body className="text-start">
//                   <Card.Title>{project.title}</Card.Title>
//                   <Card.Text>{project.description}</Card.Text>
//                   <div className="text-end">
//                     <a
//                       href={`/projects/${project.id}`}
//                       className="btn btn-outline-primary"
//                     >
//                       {" "}
//                       View Details{" "}
//                     </a>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </Container>
//     </>
//   );
// }

function ShowProfile(props) {
  return <></>
 
  // return (
  //   <>
  //   <Banner/>
  //   <Container className="main main-raised">
  //     <Row>
  //         <Col key={specificUser.id} md={6} className="ms-auto me-auto">
  //           <div className="text-center">
  //             <Image
  //               className="img-raised profile-img"
  //               src={specificUser.img}
  //               roundedCircle
  //             />
  //             <div style={{ marginTop: "-60px" }}>
  //               <h3 className="title">{specificUser.name}</h3>
  //               <h6>{specificUser.jobtitle}</h6>
  //               <p className="mb-4">
  //                 <Button
  //                   variant="primary"
  //                   size="sm"
  //                   className="px-5"
  //                   style={{ borderRadius: "15px" }}
  //                 >
  //                   {specificUser.id === userCtrl.id ? "" : "Follow"}
  //                 </Button>
  //               </p>
  //             </div>
  //           </div>
  //         </Col>
      
  //     </Row>
  //     <Row className="ms-auto me-auto" style={{ maxWidth: "600px" }}>
  //       <Col md={4}>
  //         <small>Projects</small>
  //         <h4 className="font-light">{specificUser.projects}</h4>
  //       </Col>
  //       <Col md={4}>
  //         <small>Followers</small>
  //         <h4 className="font-light">{specificUser.followers}</h4>
  //       </Col>
  //       <Col md={4}>
  //         <small>Following</small>
  //         <h4 className="font-light">{specificUser.following}</h4>
  //       </Col>
  //     </Row>
  //     <Row className="description ms-auto me-auto">
  //       <div>
  //         <hr />
  //         <p>
  //           {specificUser.about}
  //         </p>
  //         <a href={specificUser.github} className="icon">
  //           <i className="bi bi-github" style={{ color: "#333333" }}></i>
  //         </a>
  //         <a href={specificUser.linkedin}className="icon">
  //           <i className="bi bi-linkedin" style={{ color: "#0082CA" }}></i>
  //         </a>
  //         <a href={specificUser.stack} className="icon">
  //           <i
  //             className="bi bi-stack-overflow"
  //             style={{ color: "#FFAC44" }}
  //           ></i>
  //         </a>
  //         <a href={specificUser.twitter} className="icon">
  //           <i className="bi bi-twitter" style={{ color: "#55ACEE" }}></i>
  //         </a>
  //       </div>
  //     </Row>
  //     <div className="mt-3 py-5 bg-body-tertiary">
  //       <Row xs={1} md={3} className="g-3 mx-auto">
  //         {specificUser.projects.map((project) => (
  //           <Col key={project.id}>
  //             <Card className="shadow-sm h-100">
  //               <Card.Img variant="top img-fit" src={project.image} />
  //               <Card.Body className="text-start">
  //                 <Card.Title>{project.title}</Card.Title>
  //                 <Card.Text>{project.description}</Card.Text>
  //                 <div className="text-end">
  //                   <a
  //                     href={`/projects/${project.id}`}
  //                     className="btn btn-outline-primary"
  //                   >
  //                     {" "}
  //                     View Details{" "}
  //                   </a>
  //                 </div>
  //               </Card.Body>
  //             </Card>
  //           </Col>
  //         ))}
  //       </Row>
  //     </div>
  //   </Container>
  //   </>
  // );
}

export default ShowProfile;
