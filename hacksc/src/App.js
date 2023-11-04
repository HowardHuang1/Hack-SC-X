import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Navbar from './components/Navbar';
import Home from './components/Home';
import VRBuilder from './components/VRBuilder';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/vrbuilder" element={<VRBuilder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
