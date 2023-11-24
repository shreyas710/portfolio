import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/experiences' element={<Experience/>} />
            <Route path='/projects' element={<Project/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
