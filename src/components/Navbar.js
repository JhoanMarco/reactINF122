import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    background: '#333',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  };

  return (
    <nav style={navbarStyle}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ display: 'inline' }}><Link style={linkStyle} to="/">Home-</Link></li>
        <li style={{ display: 'inline' }}><Link style={linkStyle} to="/actividades">-Actividades-</Link></li>
        <li style={{ display: 'inline' }}><Link style={linkStyle} to="/creditos">-Créditos-</Link></li>
        <li style={{ display: 'inline' }}><Link style={linkStyle} to="/datos">-Datos-</Link></li>
        <li style={{ display: 'inline' }}><Link style={linkStyle} to="/donBosco">-Don Bosco-</Link></li>
        <li style={{ display: 'inline' }}><Link style={linkStyle} to="/formulario">-Formulario-</Link></li>
        <li style={{ display: 'inline' }}><Link style={linkStyle} to="/fotos">-Fotos-</Link></li>
        <li style={{ display: 'inline' }}><Link style={linkStyle} to="/inicio">-Inicio-</Link></li>
        <li style={{ display: 'inline' }}><Link style={linkStyle} to="/lideres">-Lideres-</Link></li>
        <li style={{ display: 'inline' }}><Link style={linkStyle} to="/principal">-Principal-</Link></li>
        <li style={{ display: 'inline' }}><Link style={linkStyle} to="/videos">-Videos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
