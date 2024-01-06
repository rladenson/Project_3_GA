// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import Carousel from "react-bootstrap/Carousel";

// const profileData = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Mark Markey",
//     title: "Full Stack Software Developer",
//   },
// ];
// const allProjects = [
//   {
//     id: 1,
//     user: "X",
//     img: [
//       "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?q=80&w=2816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1566241477600-ac026ad43874?q=80&w=2892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1528588641076-3fe42e01df36?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],
//   },
// ];

// function ShowProject(props) {
//   return (
//     <Container className="mb-4">
//       <Row className="d-flex justify-content-center" style={{ marginTop: "8em" }}>
//         <Col md={4}>
//           <div className="profile-sideview">
//             <Image
//               className="img-raised profile-img"
//               src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               roundedCircle
//             />
//             <div style={{ marginTop: "-60px" }}>
//               <h3 className="title">Mark Markey</h3>
//               <h6>Full Stack Software Developer</h6>
//               <p className="mb-2 mt-3">
//                 <Button
//                   variant="primary"
//                   size="sm"
//                   className="px-5"
//                   style={{ borderRadius: "15px" }}
//                 >
//                   View Profile
//                 </Button>
//               </p>
//               <p className="mb-4">
//                 <Button
//                   variant="primary"
//                   size="sm"
//                   className="px-5"
//                   style={{ borderRadius: "15px" }}
//                 >
//                   Follow
//                 </Button>
//               </p>
//             </div>

//             <a href="/" className="icon">
//               <i className="bi bi-github" style={{ color: "#333333" }}></i>
//             </a>
//             <a href="/" className="icon">
//               <i className="bi bi-linkedin" style={{ color: "#0082CA" }}></i>
//             </a>
//             <a href="/" className="icon">
//               <i
//                 className="bi bi-stack-overflow"
//                 style={{ color: "#FFAC44" }}
//               ></i>
//             </a>
//             <a href="/" className="icon">
//               <i className="bi bi-twitter" style={{ color: "#55ACEE" }}></i>
//             </a>
//           </div>
//         </Col>
//         <Col md={6}>
//           <Card className="shadow-sm h-100">
//             {/* <Card.Img
//               variant="top img-fit"
//               src="https://images.unsplash.com/photo-1685478237496-d4e545f1e317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             /> */}


//             <Carousel>
//               {allProjects.map((project) =>
//                 project.img.map((imgURL, index) => (
//                   <Carousel.Item key={index}>
//                     <Image src={imgURL} style={{ width: '100%', height: '300px', objectFit: 'cover' }}/>
//                     <Carousel.Caption>
//                       <h3>
//                         Project {project.id} - Image {index + 1}
//                       </h3>
//                       <p>
//                         Nulla vitae elit libero, a pharetra augue mollis
//                         interdum.
//                       </p>
//                     </Carousel.Caption>
//                   </Carousel.Item>
//                 ))
//               )}
//             </Carousel>

//             <Card.Body className="text-start">
//               <Card.Title className="d-md-flex justify-content-between">
//                 <div>Project Name</div>
//                 <small>
//                   <a style={{ textDecoration: "none" }} href="/" class="icon">
//                     <i class="bi bi-github"> GitHub Repository</i>
//                   </a>{" "}
//                   <a style={{ textDecoration: "none" }} href="/" class="icon">
//                     <i class="bi bi-browser-chrome"> Deployed Project</i>
//                   </a>
//                 </small>
//               </Card.Title>
//               <div className="d-flex flex-wrap mt-3">
//                 <p className="me-3">
//                   <i class="bi bi-check-circle"></i> React
//                 </p>
//                 <p className="me-3">
//                   <i className="bi bi-check-circle"></i> Javascript
//                 </p>
//               </div>
//               <Card.Text>
//                 {" "}
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel
//                 reiciendis obcaecati omnis! Dignissimos commodi qui deserunt ut
//                 corrupti ipsum explicabo, optio dicta culpa fugit. Debitis
//                 tenetur porro quibusdam alias.
//               </Card.Text>
//               <ListGroup className="list-group-flush">
//                 <ListGroup.Item>
//                   Tags: web-development, mobile-app, data-science
//                 </ListGroup.Item>
//                 <ListGroup.Item>Created by authorName</ListGroup.Item>
//               </ListGroup>
//               <div className="text-end">
//                 <a className="card-link btn btn-info" href="/">
//                   Edit
//                 </a>
//                 <a className="card-link btn btn-danger" href="/">
//                   Delete
//                 </a>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ShowProject;
