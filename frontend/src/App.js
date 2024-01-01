import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
