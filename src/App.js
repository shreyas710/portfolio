import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ScrollButton from './components/scrollButton/scrollButton';
import Skills from './components/Skills/Skills'
import { Cloudinary } from "@cloudinary/url-gen";

function App() {

  const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });
    
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
  }

  const [darkMode, setDarkMode] = useState(useThemeDetector());

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvuknw9qw'
    }
  });

  const profileImg = cld.image('docs/models-4'); 

  return (
    <div className="App">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className={darkMode ? "content" : "content-light"} id='home'>
          <Home darkMode={darkMode} profileImg={profileImg}/>
          <Experience darkMode={darkMode}/>
          <Project darkMode={darkMode}/>
          <Skills darkMode={darkMode}/>
          <Contact darkMode={darkMode}/>
        </div>
        <hr style={{color: darkMode ? "#faebd7" : "black", margin: "0"}}/>
        <Footer darkMode={darkMode}/>
        <ScrollButton darkMode={darkMode}/>
    </div>
  );
}

export default App;
