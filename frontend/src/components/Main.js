import { useEffect, useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import ShowProfile from "../pages/ShowProfile";
import ShowProject from "../pages/ShowProject";
import NewProfile from "../pages/NewProfile";
import LogIn from "../pages/LogIn";
import NewProject from "../pages/NewProject";

//Mock data
// const mockProfileData = {
//   id: 1,
//   username: "john_doe",
//   email: "john@example.com",
//   // ... other profile data
//   projects: [
//     {
//       name: "Project 1",
//       description: "Description for Project 1",
//       images: ["image1.jpg", "image2.jpg"],
//       technologies: ["React", "Node.js", "Express"],
//       tags: ["Web Development", "Responsive Design"],
//     },
//     {
//       name: "Project 2",
//       description: "Description for Project 2",
//       images: ["image3.jpg", "image4.jpg"],
//       technologies: ["Angular", "Java", "Spring Boot"],
//       tags: ["Full Stack", "REST API"],
//     },
//     {
//       name: "Project 3",
//       description: "Description for Project 3",
//       images: ["image5.jpg", "image6.jpg"],
//       technologies: ["Vue.js", "Django", "Python"],
//       tags: ["Frontend", "Backend"],
//     },
//   ],
// };

function Main(props) {
  const [project, setProject] = useState(null);
  const URL = "http://localhost:4000/project/";

  const URL2 = "http://localhost:4000/user/";

  const URL3 = "http://localhost:4000/session/";

  //PROJECT
  //FUNCTION FOR GETTING PROJECTS
  const getProject = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProject(data.data);
  };

  //CREATE PROJECT FUNCTION
  const createProject = async (proj) => {
    // make a post request to create project
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proj),
    });
    // update the list of projects
    getProject();
  };

  // UPDATE PROJECT
  const updateProject = async (proj, id) => {
    // create post request to create project
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proj),
    });
    //update list of projects
    getProject();
  };

  // DELETE PROJECT
  const deleteProject = async (id) => {
    // make post request to create people
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update list of projects
    getProject();
  };

  useEffect(() => {
    getProject();
  }, []);

  //USER
  //FUNCTION FOR GETTING USERS
  const getUser = async () => {
    const response = await fetch(URL2);
    const data = await response.json();
    setProject(data.data);
  };

  //CREATE PROJECT FUNCTION
  const createUser = async (us) => {
    const object = {};
    us.forEach((value, key) => object[key] = value);
    const json = JSON.stringify(object);
    // make a post request to create project
    console.log(await fetch(URL2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    }));
    // update the list of projects
    //getUser();
  };

  // UPDATE PROJECT
  const updateUser = async (us, id) => {
    // create post request to create project
    await fetch(URL2 + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(us),
    });
    //update list of projects
    getUser();
  };

  // DELETE PROJECT
  const deleteUser = async (id) => {
    // make post request to create people
    await fetch(URL2 + id, {
      method: "DELETE",
    });
    // update list of projects
    getUser();
  };

  useEffect(() => {
    //getUser();
  }, []);

  return (
    <main>
      <Routes>
        {<Route path="/login" element={<LogIn url={URL3} setUser={props.setUser}/>} />}
        <Route path="/" element={<Index project={project} />} />
        <Route
          path="/project/new"
          element={<NewProject createProject={createProject} />}
        />
        <Route
          path="/project/id"
          element={
            <ShowProject
              project={project}
              updateProject={updateProject}
              deleteProject={deleteProject}
            />
          }
        />
        <Route
          path="/user/new"
          element={<NewProfile createUser={createUser} />}
        />
        <Route
          path="/user/id"
          element={
            <ShowProfile
              user={props.user}
              updateUser={updateUser}
              deleteUser={deleteUser}
              url={URL2}
            />
          }
        />

        {/* <Route path="/profile" element={<ShowProfile profile={mockProfileData}/>}/> */}
        {/* <Route path="/projects/id" element={<ShowProject profile={mockProfileData}/>}/> */}
        <Route path="/profile/new" element={<NewProfile createUser={createUser}/>}/>
        {/* <Route path="/signup" element={<SignUp profile={mockProfileData}/>}/> */}
        {/* <Route path="/login" element={<LogIn profile={mockProfileData}/>}/> */}
        {/* <Route path="/projects/new" element={<NewProject profile={mockProfileData}/>}/> */}
      </Routes>
    </main>
  );
}

export default Main;
