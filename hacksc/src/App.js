import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Navbar from './components/Navbar';
import Home from './components/Home';
import VRBuilder from './components/VRBuilder';
import ThreeJS from './components/ThreeJS';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/vrbuilder" element={<VRBuilder />} />
          <Route path="/threejs" element={<ThreeJS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
