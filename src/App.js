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
      <div className="App loadingContent">
        <img className='loadingLogo' src={require('./assets/loading.gif')} alt="loading..."/>
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
