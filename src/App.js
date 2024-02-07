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

  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(useThemeDetector());

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  })

  if(loading) {
    return (
      <div className="App loadingContent" style={{backgroundColor: darkMode ? "#222" : "antiquewhite"}}>
        <div className="spinner-border" role="status" style={{color: '#f1356d', width: '50px', height: '50px'}}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } 

  return (
    <div className="App">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className={darkMode ? "content" : "content-light"} id='home'>
          <Home darkMode={darkMode}/>
          <Experience darkMode={darkMode}/>
          <Project darkMode={darkMode}/>
          <Contact darkMode={darkMode}/>
          <Footer darkMode={darkMode}/>
        </div>
        <ScrollButton darkMode={darkMode}/>
    </div>
  );
}

export default App;
