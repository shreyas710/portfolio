import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

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
    </div>
  );
}

export default App;
