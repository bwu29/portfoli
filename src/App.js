import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Partiful from './components/Partiful.jsx';
import Aapi from './components/Aapi.jsx';
import FamiliesAndSchools from './components/FamiliesAndSchools.jsx';
import Scroll from './Scroll.js';

function App() {
  return (
    
    <Router>
      <Scroll/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/partiful" element={<Partiful />} />
        <Route path="/aapi" element={<Aapi />} />
        <Route path="/familiesandschools" element={<FamiliesAndSchools />} />
      </Routes>
    </Router>
  );
}

export default App;
