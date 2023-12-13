import React from 'react';
import { Container, Image } from 'react-bootstrap';
const Inicio = () => {
  return    (
    <div style={{ backgroundColor: 'green', minHeight: '100vh' }}>
      
      <h1>
        hola ! conoce un poco del colegio
      </h1>
      <Image src="/images/i1.jpg" fluid className="mx-auto" 
 width="100%" height="200px" />
      <p>U.E. Topater - Don Bosco es una escuela en Departamento de La Paz, Altiplano ubicado en Calle Angel Salas. U.E. Topater - Don Bosco está situada circa de Parque Infantil de Ascinalss y Plaza de Ascinalss.
      Tipo: escuela
Dirección postal: Calle Angel Salas, El Alto
Categoría: educación
Localización: Departamento de La Paz, Altiplano, Bolivia, Sudamérica
Ver en Open­Street­Map
      </p>
      
      </div>
      )
};

export default Inicio;
