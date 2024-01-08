import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getfollowUser,
  getunfollowUser,
  getUserDetails,
} from "../Redux/User/UserAction";
import { getUserfromLocalStorage } from "../Utils/Utils";
import {useParams, useNavigate} from "react-router-dom"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Banner from "../components/Banner";


function UserProfile() {
  const dispatch = useDispatch();
  const currentUser = getUserfromLocalStorage;
  const { userid } = useParams();
  const [showFollow, setShowFollow] = useState(
    currentUser && currentUser.following.includes(userid) ? false : true
  );

  const userProfileState = useSelector((state) => state.user);
  const { userProfile, isSuccess, userProjects } = userProfileState;

  // console.log("usr",userProfileState);

  useEffect(() => {
    async function fetchData() {
      await dispatch(getUserDetails(userid));
    }

    fetchData();
  }, [userid, isSuccess]);

  const followUser = async () => {
    await dispatch(getfollowUser(userid));
    await setShowFollow(false);
  };

  const unFollowUser = async () => {
    await dispatch(getunfollowUser(userid));
    await setShowFollow(true);
  };

  return (
    <>
      {userProfile.user ? (
        <>
          <Banner />
          <Container className="main main-raised">
            <Row>
              <Col md={6} className="ms-auto me-auto">
                <div className="text-center">
                  <Image
                    className="img-raised profile-img"
                    src={userProfile.user.picture}
                    roundedCircle
                  />
                  <div style={{ marginTop: "-60px" }}>
                    <h3 className="title">{userProfile.user.name}</h3>
                    <h6>{userProfile.user.title}</h6>
                    <p className="mb-4">
                      {showFollow ? ( //if true
                        <Button
                          variant="primary"
                          size="sm"
                          className="px-5"
                          style={{ borderRadius: "15px" }}
                          onClick={() => followUser()}
                        >
                          Follow
                        </Button>
                      ) : (
                        <Button
                          variant="primary"
                          size="sm"
                          className="px-5"
                          style={{ borderRadius: "15px" }}
                          onClick={() => unFollowUser()}
                        >
                          Unfollow
                        </Button>
                      )}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="ms-auto me-auto" style={{ maxWidth: "600px" }}>
              <Col md={4}>
                <small>Projects</small>
                <h4 className="font-light">{userProfile.projects.length}</h4>
              </Col>
              <Col md={4}>
                <small>Followers</small>
                <h4 className="font-light">{userProfile.user.followers.length}</h4>
              </Col>
              <Col md={4}>
                <small>Following</small>
                <h4 className="font-light">{userProfile.user.following.length}</h4>
              </Col>
            </Row>
            <Row className="description ms-auto me-auto">
              <div>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto reprehenderit placeat rerum, nemo quia dolorem quas
                  sequi. Hic, provident eius veritatis aliquam ratione
                  exercitationem, delectus beatae sequi non obcaecati eos!
                </p>
                <a href="/" className="icon">
                  <i className="bi bi-github" style={{ color: "#333333" }}></i>
                </a>
                <a href="/" className="icon">
                  <i
                    className="bi bi-linkedin"
                    style={{ color: "#0082CA" }}
                  ></i>
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
              </div>{" "}
            </Row>
            <div className="mt-3 py-5 bg-body-tertiary">
              <Row xs={1} md={3} className="g-3 mx-auto">
                {userProjects && userProjects.projects.length > 0 ? (
                  userProjects.map((item, index) => (
                    <Col key={index}>
                      <Card className="shadow-sm h-100">
                        <Card.Img variant="top img-fit" src={item.image} />
                        <Card.Body className="text-start">
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>{item.description}</Card.Text>
                          <div className="text-end">
                            <a href="#" className="btn btn-outline-primary">
                              View Details
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <h4>No projects yet</h4>
                )}
              </Row>
            </div>
          </Container>
        </>
      ) : (
        <h5>Loading</h5>
      )}
    </>
  );
}


export default UserProfile;
