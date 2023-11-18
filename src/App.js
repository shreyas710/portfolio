import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
