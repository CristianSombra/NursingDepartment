import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Landing, Home } from './Views/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function App() {
  const location = useLocation();

  React.useEffect(() => {
    window.scroll(0,0);
  },[location]);

  return (
    <div class="container">
        {/* {location.pathname !== "/" && <NavBar />} */}
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/Home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
