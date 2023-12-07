import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  })

  if(loading) {
    return (
      <div className="App loadingContent" style={{color: 'antiquewhite'}}>
        <div class="spinner-border" role="status" style={{color: '#f1356d', width: '50px', height: '50px'}}>
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } 

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
