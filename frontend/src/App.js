import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Main from "./components/Main";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import PrivateRoute from "./Utils/PrivateRoute";
import ShowProfile from "./pages/ShowProfile";
import UserProfile from "./pages/UserProfile";
import ShowProject from "./pages/ShowProject";
import EditProject from "./pages/EditProject";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/createProject" element={<NewProject />} />
            <Route path="/profile" element={<ShowProfile />} />
            <Route path="/profile/:userid" element={<UserProfile />} />
            <Route path="/project/:projectid" element={<ShowProject />} />
            <Route path="/project/:projectid/edit" element={<EditProject />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
