import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import Header from './components/Header';
// import Footer from './components/Footer';
import Main from './components/Main';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import NewProject from './pages/NewProject';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>}>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>

        <Route path="/home" element={<Home/>}/>
        <Route path="/createProject" element={<NewProject/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
