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
// import Modal from "react-modal";
// import { useDispatch } from "react-redux";
// import { updateUserProfile } from "../../Redux/Profile/ProfileAction";
// import { getUserfromLocalStorage } from "../../Utils/Utils";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import FloatingLabel from "react-bootstrap/FloatingLabel"; // Import FloatingLabel from the correct location
// export default function ShowEditModal({ showEditmodal, setEditModal }) {
//   const dispatch = useDispatch();

//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [picture, setPicture] = useState("");
//   const [title, setTitle] = useState("");
//   const [linkedin, setLinkedin] = useState("");
//   const [github, setGithub] = useState("");
//   const [twitter, setTwitter] = useState("");
//   const [stack, setStack] = useState("");
//   const [about, setAbout] = useState("");

//   const currentUser = getUserfromLocalStorage;

//   const editProfile = async (e) => {
//     e.preventDefault();
//     const userData = {
//       name,
//       email,
//       password,
//       picture,
//       title,
//       linkedin,
//       github,
//       twitter,
//       stack,
//       about,
//     };
//     await dispatch(updateUserProfile(userData));

//     //await setName('')
//     await setPassword("");
//     //await setEmail('')
//     await setEditModal(false);
//     await window.location.reload(true);
//   };

//   return (
//     <Modal
//       isOpen={showEditmodal}
//       ariaHideApp={false}
//       contentLabel="Edit Profile"
//       className="EditModal"
//       style={{zIndex:4}}
//     >
//       <Form onSubmit={editProfile}>
//           <Row className="justify-content-center">
//             <h4 className="mb-3">Edit Profile</h4>
//             <Col md={5}>
//               <Row>
//                 <Col md={6}>
//                   <FloatingLabel
//                     controlId="floatingImage"
//                     label="Image"
//                     className="mb-3"
//                   >
//                     <Form.Control
//                       type="text"
//                       placeholder="Image"
//                       value={
//                         picture ? picture : currentUser && currentUser.picture
//                       }
//                       onChange={(e) => setPicture(e.target.value)}
//                     />
//                   </FloatingLabel>
//                 </Col>
//                 <Col md={6}>
//                   <FloatingLabel
//                     controlId="floatingEmail"
//                     label="Email Address"
//                     className="mb-3"
//                   >
//                     <Form.Control
//                       type="email"
//                       placeholder="Email Address"
//                       value={email ? email : currentUser && currentUser.email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </FloatingLabel>
//                 </Col>
//                 <Col md={6}>
//                   <FloatingLabel
//                     controlId="floatingName"
//                     label="Full Name"
//                     className="mb-3"
//                   >
//                     <Form.Control
//                       type="text"
//                       placeholder="Full name"
//                       value={name ? name : currentUser && currentUser.name}
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                   </FloatingLabel>
//                 </Col>
//                 <Col md={6}>
//                   <FloatingLabel
//                     controlId="floatingPassword"
//                     label="Password"
//                     className="mb-3"
//                   >
//                     <Form.Control
//                       type="text"
//                       placeholder="Password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </FloatingLabel>
//                 </Col>
//                 <Col md={6}>
//                   <FloatingLabel
//                     controlId="floatingAbout"
//                     label="About"
//                     className="mb-3"
//                   >
//                     <Form.Control
//                       type="text"
//                       placeholder="About"
//                       value={about ? about : currentUser && currentUser.about}
//                       onChange={(e) => setAbout(e.target.value)}
//                     />
//                   </FloatingLabel>
//                 </Col>
//               </Row>
//               <FloatingLabel
//                 controlId="floatingjobTitle"
//                 label="Job title"
//                 className="mb-3"
//               >
//                 <Form.Control
//                   type="text"
//                   placeholder="Job title"
//                   value={title ? title : currentUser && currentUser.title}
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               </FloatingLabel>
//               <FloatingLabel
//                 controlId="floatingLinkedIn"
//                 label="LinkedIn"
//                 className="mb-3"
//               >
//                 <Form.Control
//                   type="text"
//                   placeholder="LinkedIn"
//                   value={
//                     linkedin ? linkedin : currentUser && currentUser.linkedin
//                   }
//                   onChange={(e) => setLinkedin(e.target.value)}
//                 />
//               </FloatingLabel>
//               <FloatingLabel
//                 controlId="floatingGitHub"
//                 label="GitHub"
//                 className="mb-3"
//               >
//                 <Form.Control
//                   type="text"
//                   placeholder="GitHub"
//                   value={github ? github : currentUser && currentUser.github}
//                   onChange={(e) => setGithub(e.target.value)}
//                 />
//               </FloatingLabel>
//               <FloatingLabel
//                 controlId="floatingStackOverflow"
//                 label="Stack Overflow"
//                 className="mb-3"
//               >
//                 <Form.Control
//                   type="text"
//                   placeholder="Stack Overflow"
//                   value={stack ? stack : currentUser && currentUser.stack}
//                   onChange={(e) => setStack(e.target.value)}
//                 />
//               </FloatingLabel>

//               <FloatingLabel
//                 controlId="floatingTwitter"
//                 label="Twitter"
//                 className="mb-3"
//               >
//                 <Form.Control
//                   type="text"
//                   placeholder="Twitter"
//                   value={twitter ? twitter : currentUser && currentUser.twitter}
//                   onChange={(e) => setTwitter(e.target.value)}
//                 />
//               </FloatingLabel>
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <Button
//                 className="btn btn-success mb-3"
//                 type="submit"
//               >
//                 Save Profile
//               </Button>
//               <Button
//                 className="btn btn-success mb-3"
//                 onClick={() => setEditModal(false)}
//               >
//                 Close
//               </Button>
//             </Col>
//           </Row>
//       </Form>
//     </Modal>
//   );
// }
