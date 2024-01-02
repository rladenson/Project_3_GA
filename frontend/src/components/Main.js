import React from "react"
import { Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import Index from "../pages/Index"
import ShowProfile from "../pages/ShowProfile"
import ShowProject from "../pages/ShowProject"
import NewProfile from "../pages/NewProfile"
import SignUp from "../pages/SignUp"
import LogIn from "../pages/LogIn"
import NewProject from "../pages/NewProject"

//Mock data
const mockProfileData = {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    // ... other profile data
    projects: [
      {
        name: 'Project 1',
        description: 'Description for Project 1',
        images: ['image1.jpg', 'image2.jpg'],
        technologies: ['React', 'Node.js', 'Express'],
        tags: ['Web Development', 'Responsive Design'],
      },
      {
        name: 'Project 2',
        description: 'Description for Project 2',
        images: ['image3.jpg', 'image4.jpg'],
        technologies: ['Angular', 'Java', 'Spring Boot'],
        tags: ['Full Stack', 'REST API'],
      },
      {
        name: 'Project 3',
        description: 'Description for Project 3',
        images: ['image5.jpg', 'image6.jpg'],
        technologies: ['Vue.js', 'Django', 'Python'],
        tags: ['Frontend', 'Backend'],
      },
    ],
  };

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/profile" element={<ShowProfile profile={mockProfileData}/>}/>
                <Route path="/projects/id" element={<ShowProject profile={mockProfileData}/>}/>
                <Route path="/profile/new" element={<NewProfile profile={mockProfileData}/>}/>
                <Route path="/signup" element={<SignUp profile={mockProfileData}/>}/>
                <Route path="/login" element={<LogIn profile={mockProfileData}/>}/>
                <Route path="/projects/new" element={<NewProject profile={mockProfileData}/>}/>
            </Routes>
        </main>
    )
}

export default Main;