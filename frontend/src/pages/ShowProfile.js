import React, { useEffect, useState } from 'react'
import { getProfile } from '../Redux/Profile/ProfileAction'
import {useParams, useNavigate} from "react-router-dom"
//It (ueParams) retrieves the value of parameters specified in the root URL.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Banner from "../components/Banner";
import { getUserfromLocalStorage } from '../Utils/Utils';
import  {useDispatch, useSelector} from 'react-redux'
import ShowEditModal from '../components/Modals/ShowEditModal';


function ShowProfile(props) {
 
  const dispatch = useDispatch()

    const currentUser = getUserfromLocalStorage 

    const profileState = useSelector(state=>state.profile)
    const {profile,isSuccess} = profileState
    // console.log(profileState);

    useEffect(() => {

      async function fetchData(){
        await dispatch(getProfile())
        
      }
      fetchData()

      return () => { }
    }, [currentUser])


    const [showEditmodal,setEditModal] = useState(false)

  return (
    <>
    <Banner/>
    <Container className="main main-raised">
      <Row>
          <Col md={6} className="ms-auto me-auto">
            <div className="text-center">
              <Image
                className="img-raised profile-img profile-pic"
                src={currentUser && currentUser.picture}
                roundedCircle
              />
              <div style={{ marginTop: "-60px" }}>
                <h3 className="title">{currentUser && currentUser.name}</h3>
                <h6>{currentUser && currentUser.title}</h6>
                <p className="mb-4">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="px-5 edit-btn"
                    style={{ borderRadius: "15px" }}
                    onClick={()=>setEditModal(true)}
                  >
                   <i class="bi bi-pencil"></i> Edit Profile
                  </Button>
                </p>
              </div>
            </div>
          </Col>
      </Row>
      <Row className="ms-auto me-auto" style={{ maxWidth: "600px" }}>
        <Col md={4}>
          <small>Projects</small>
          <h4 className="font-light">{profile && profile.length}</h4>
        </Col>
        <Col md={4}>
          <small>Followers</small>
          <h4 className="font-light">{currentUser && currentUser.followers.length}</h4>
        </Col>
        <Col md={4}>
          <small>Following</small>
          <h4 className="font-light">{currentUser && currentUser.following.length}</h4>
        </Col>
      </Row>
      <Row className="description ms-auto me-auto">
        <div>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            reprehenderit placeat rerum, nemo quia dolorem quas sequi. Hic,
            provident eius veritatis aliquam ratione exercitationem, delectus
            beatae sequi non obcaecati eos!
          </p>
          <a href="/" className="icon">
            <i className="bi bi-github" style={{ color: "#333333" }}></i>
          </a>
          <a href="/" className="icon">
            <i className="bi bi-linkedin" style={{ color: "#0082CA" }}></i>
          </a>
          <a href="/" className="icon">
            <i
              className="bi bi-stack-overflow"
              style={{ color: "#FFAC44" }}
            ></i>
          </a>
          <a href="/" className="icon">
            <i className="bi bi-twitter" style={{ color: "#55ACEE" }}></i>
          </a>
        </div>
      </Row>
      <div className="mt-3 py-5 bg-body-tertiary">
  <Row xs={1} md={3} className="g-3 mx-auto">
    {profile && profile.length > 0 ? (
      profile.map((item, index) => (
        <Col key={index}>
          <Card className="shadow-sm h-100">
            <Card.Img variant="top" src={item.image} className="img-fit" />
            <Card.Body className="text-start">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <div className="text-end">
                <a
                  href={`/projects/${item.id}`} 
                  className="btn btn-outline-primary"
                >
                  {" "}
                  View Details{" "}
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))
    ) : (
      <h4>No projects added</h4>
    )}
  </Row>
</div>
<ShowEditModal showEditmodal={showEditmodal} setEditModal ={setEditModal}
      currentUser ={currentUser}/>
    </Container>
    </>
  );
}


// function ShowProfile(props) {
 
//   return (
//     <>
//     <Banner/>
//     <Container className="main main-raised">
//       <Row>
//           <Col key={specificUser.id} md={6} className="ms-auto me-auto">
//             <div className="text-center">
//               <Image
//                 className="img-raised profile-img"
//                 src={specificUser.img}
//                 roundedCircle
//               />
//               <div style={{ marginTop: "-60px" }}>
//                 <h3 className="title">{specificUser.name}</h3>
//                 <h6>{specificUser.jobtitle}</h6>
//                 <p className="mb-4">
//                   <Button
//                     variant="primary"
//                     size="sm"
//                     className="px-5"
//                     style={{ borderRadius: "15px" }}
//                   >
//                     {specificUser.id === userCtrl.id ? "" : "Follow"}
//                   </Button>
//                 </p>
//               </div>
//             </div>
//           </Col>
      
//       </Row>
//       <Row className="ms-auto me-auto" style={{ maxWidth: "600px" }}>
//         <Col md={4}>
//           <small>Projects</small>
//           <h4 className="font-light">{specificUser.projects}</h4>
//         </Col>
//         <Col md={4}>
//           <small>Followers</small>
//           <h4 className="font-light">{specificUser.followers}</h4>
//         </Col>
//         <Col md={4}>
//           <small>Following</small>
//           <h4 className="font-light">{specificUser.following}</h4>
//         </Col>
//       </Row>
//       <Row className="description ms-auto me-auto">
//         <div>
//           <hr />
//           <p>
//             {specificUser.about}
//           </p>
//           <a href={specificUser.github} className="icon">
//             <i className="bi bi-github" style={{ color: "#333333" }}></i>
//           </a>
//           <a href={specificUser.linkedin}className="icon">
//             <i className="bi bi-linkedin" style={{ color: "#0082CA" }}></i>
//           </a>
//           <a href={specificUser.stack} className="icon">
//             <i
//               className="bi bi-stack-overflow"
//               style={{ color: "#FFAC44" }}
//             ></i>
//           </a>
//           <a href={specificUser.twitter} className="icon">
//             <i className="bi bi-twitter" style={{ color: "#55ACEE" }}></i>
//           </a>
//         </div>
//       </Row>
//       <div className="mt-3 py-5 bg-body-tertiary">
//         <Row xs={1} md={3} className="g-3 mx-auto">
//           {specificUser.projects.map((project) => (
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

export default ShowProfile;
