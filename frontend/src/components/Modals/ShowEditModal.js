import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from 'react-redux'
import { updateUserProfile } from '../../Redux/Profile/ProfileAction'
import { getUserfromLocalStorage } from '../../Utils/Utils'

export default function ShowEditModal({ showEditmodal, setEditModal }) {
const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

      const currentUser  = getUserfromLocalStorage

      const editProfile = async(e)=>{
          e.preventDefault();
          const userData ={
              name,email,password
          }
          await dispatch(updateUserProfile(userData))

          //await setName('')
          await setPassword('')
          //await setEmail('')
          await setEditModal(false)
          await window.location.reload(true)

      }

  return (
    <Modal
      isOpen={showEditmodal}
      ariaHideApp={false}
      contentLabel="Edit Profile"
      className="EditModal"
    >
      <div className="col-12 profileForm">
        <form className="w-100" onSubmit={editProfile}>
          <h2>Edit Profile</h2>

          <div className="input-group">
            <span className="input-group-addon">
              <i className="icofont icofont-email"></i>
            </span>
            <input
              type="email"
              placeholder="Email Address"
              className="form-control"
              autoComplete="off"
              value={email ? email : currentUser && currentUser.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="icofont icofont-name"></i>
            </span>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              autoComplete="off"
              value={name ? name : currentUser && currentUser.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="icofont icofont-password"></i>
            </span>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="m-t-20">
            <button
              className="btn btn-secondary btn-md btn-block m-b-10"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <button className="btn btn-primary" onClick={() => setEditModal(false)}>
        Close
      </button>
    </Modal>
  );
}


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