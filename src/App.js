import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Actividades from './pages/Actividades';
import Creditos from './pages/Creditos';
import Datos from './pages/Datos';
import DonBosco from './pages/DonBosco';
import Formulario from './pages/Formulario';
import Fotos from './pages/Fotos';
import Inicio from './pages/Inicio';
import Lideres from './pages/Lideres';
import Principal from './pages/Principal';
import Videos from './pages/Videos';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/creditos" element={<Creditos />} />
        <Route path="/datos" element={<Datos />} />
        <Route path="/donBosco" element={<DonBosco />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/lideres" element={<Lideres />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;
