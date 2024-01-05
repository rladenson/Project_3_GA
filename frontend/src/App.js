import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Header user={user}/>
      <Main user={user} setUser={setUser}/>
      <Footer/>
    </div>
  );
}

export default App;
