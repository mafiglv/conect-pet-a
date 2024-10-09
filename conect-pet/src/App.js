import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NosConheca from './paginas/NosConheca';
import AdoteComAmor from './paginas/AdoteComAmor';
import Voluntarios from './paginas/Voluntarios';
import Doacoes from './paginas/Doacoes';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NosConheca />} />
        <Route path="/adote-com-amor" element={<AdoteComAmor />} />
        <Route path="/voluntarios" element={<Voluntarios />} />
        <Route path="/doacoes" element={<Doacoes />} />
      </Routes>
    </Router>
  );
}

export default App;
