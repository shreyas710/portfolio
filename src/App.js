import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="content" id='home'>
          <Home/>
          <Experience/>
          <Project/>
          <Contact/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
