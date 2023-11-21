import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Landing, Home, Agents } from './Views/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";


function App() {
  const location = useLocation();

  React.useEffect(() => {
    window.scroll(0,0);
  },[location]);

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      {location.pathname !== "/" && <NavBar />}
      <div className="row flex-grow-1">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Agents"  element={<Agents />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
