import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Kontakt from './pages/Kontakt'; 
import OmOss from './pages/OmOss'; 
import BestallHem from './pages/BestallHem'; 
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/meny" element={<Menu />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/omoss" element={<OmOss />} />
          <Route path="/bestall" element={<BestallHem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;