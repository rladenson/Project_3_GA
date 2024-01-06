// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

// function NewProfile() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <h4 className="mb-3">Create Profile</h4>
//       <Row className="justify-content-center">
//         <Col md={3}>
//           {selectedImage ? (
//             <Image className="profile-pic mb-3" src={selectedImage} roundedCircle />
//           ) : (
//             <Image
//               className="profile-pic mb-3"
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
//               rounded
//             />
//           )}
//           <Form.Control
//             type="file"
//             className="mb-3"
//             onChange={handleImageChange}
//           />
//         </Col>
//         <Col md={5}>
//           <Row>
//             <Col md={6}>
//               <FloatingLabel
//                 controlId="floatingFirstname"
//                 label="First name"
//                 className="mb-3"
//               >
//                 <Form.Control type="text" placeholder="First name" />
//               </FloatingLabel>
//             </Col>
//             <Col md={6}>
//               <FloatingLabel
//                 controlId="floatingLastname"
//                 label="Last name"
//                 className="mb-3"
//               >
//                 <Form.Control type="text" placeholder="Last name" />
//               </FloatingLabel>
//             </Col>
//           </Row>
//           <FloatingLabel
//             controlId="floatingjobTitle"
//             label="Job title"
//             className="mb-3"
//           >
//             <Form.Control type="text" placeholder="Job title" />
//           </FloatingLabel>
//           <FloatingLabel
//             controlId="floatingLinkedIn"
//             label="LinkedIn"
//             className="mb-3"
//           >
//             <Form.Control type="text" placeholder="LinkedIn" />
//           </FloatingLabel>
//           <FloatingLabel
//             controlId="floatingGitHub"
//             label="GitHub"
//             className="mb-3"
//           >
//             <Form.Control type="text" placeholder="GitHub" />
//           </FloatingLabel>
//           <FloatingLabel
//             controlId="floatingStackOverflow"
//             label="Stack Overflow"
//             className="mb-3"
//           >
//             <Form.Control type="text" placeholder="Stack Overflow" />
//           </FloatingLabel>
//           <FloatingLabel
//             controlId="floatingInstagram"
//             label="Instagram"
//             className="mb-3"
//           >
//             <Form.Control type="text" placeholder="Instagram" />
//           </FloatingLabel>
//           <FloatingLabel
//             controlId="floatingTwitter"
//             label="Twitter"
//             className="mb-3"
//           >
//             <Form.Control type="text" placeholder="Twitter" />
//           </FloatingLabel>
//           <FloatingLabel
//             controlId="floatingYoutube"
//             label="Youtube"
//             className="mb-3"
//           >
//             <Form.Control type="text" placeholder="Youtube" />
//           </FloatingLabel>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Button className="btn btn-success mb-3">Save Profile</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default NewProfile;