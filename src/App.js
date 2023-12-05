import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import { useEffect, useState } from 'react';
import ReactLoading from "react-loading";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  })

  if(loading) {
    return (
      <div className="App">
        <div className="loadingContent row">
          <div className="col-4"></div>
          <div className="loadingLogo col-4">
              <ReactLoading
              type={"bars"}
              color={"#f1365d"}
              height={200}
              width={200}
            />
          </div>
          <div className="col-4"></div>
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
