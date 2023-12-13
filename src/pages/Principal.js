import React from 'react';
import { Container, Image } from 'react-bootstrap';
const Principal = () => {
  return (
    <div style={{ backgroundColor: 'green', minHeight: '100vh' }}>
      {/* Contenido de tu página */}
      <Container>
      <h1>Ten una informacion interesante acerca de EPDB</h1>
      <Image src="/images/i1.jpg" fluid className="mx-auto" 
 width="100%" height="200px" />
      <p>Generic placeholder image	
24 de junio dia del EXALUMNO SALESIANO
ORIGEN Y NATURALEZA DEL MOVIMIENTO EXALUMNOS El nacimiento del Movimiento Exalumnos, se origina en la iniciativa de un pequeño grupo de antiguos alumnos artesanos del primer Oratorio de Valdocco en Turín. Guiados por el Jefe Encuadernador Carlos Gastini, se presentaron a Don Bosco el día de su onomástico, el 24 de junio de 1870, para expresarle su gratitud. Con ellos estaba también el párroco turinés, P. Felice Reviglio, que acompañaba a algunos estudiantes. Comenzaron a surgir las primeras uniones en Italia, después en el extranjero, sólo cuando, en 1908, bajo el impulso del Perfecto General de la Congregación, P. Filippo Rinaldi, nació la idea de una Federación Internacional de Exalumnos, preparando un Estatuto para ello. El monumento a Don Bosco que aún hoy se admira en la Plaza de María Auxiliadora en Valdocco fue uno de los resultados de las decisiones congresales de esos años.
6 de Junio DÍA DEL MAESTRO BOLIVIANO
¿Por qué el Día del Maestro en Bolivia se celebra el 6 de junio? El Día del Maestro en Bolivia fue establecido mediante un Decreto Supremo bajo el gobierno del presidente Bautista Saavedra el 24 de mayo de 1924, quien al hacer oficial esta fecha pretendía dar el reconocimiento pertinente a los maestros del país. Aunque en este caso la celebración es nacional, esta festividad no se lleva a cabo solamente en Bolivia, sino que muchos otros países lo conmemoran en distintos momentos del año. En el caso de este país se festeja el 6 de junio ¿Por qué el Día del Maestro en Bolivia se celebra el 6 de junio? para homenajear al maestro Modesto Omiste, quien nació el 6 de junio de 1840 en la ciudad de Potosí. Modesto Omiste es considerado como el padre de la educación de Bolivia, pues no solo se encargó de la educación de los niños creando escuelas y realizando su trabajo como educador, sino que además vio importante que los maestros bolivianos se superaran y quiso impartir conferencias para implementar nuevos métodos pedagógicos.</p>
      
      </Container>
    </div>
  );
};

export default Principal;