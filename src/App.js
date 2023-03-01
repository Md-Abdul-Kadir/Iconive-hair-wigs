import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
