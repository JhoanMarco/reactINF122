import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    correo: '',
    comentarios: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mostrar cuadro de confirmación
    confirmAlert({
      title: 'Confirmar Registro',
      message: '¿Enserio quieres registrarte bro?',
      buttons: [
        {
          label: 'Sí',
          onClick: () => {
            // Mostrar notificación de registro exitoso
            toast.success('Te registraste correctamente', {
              position: 'top-right',
              autoClose: false, // Desactivar el cierre automático
              hideProgressBar: false,
              closeOnClick: false, // Desactivar cierre al hacer clic
              pauseOnHover: true,
              draggable: true,
              closeButton: (
                <button className="btn btn-primary" onClick={() => toast.dismiss()}>
                  Ok
                </button>
              ),
            });

            // Puedes agregar la lógica para enviar formData al servidor aquí
            console.log('Datos enviados:', formData);
          },
        },
        {
          label: 'No',
          onClick: () => {
            // Mostrar notificación de registro cancelado
            toast.error('Registro cancelado', {
              position: 'top-right',
              autoClose: false, // Desactivar el cierre automático
              hideProgressBar: false,
              closeOnClick: false, // Desactivar cierre al hacer clic
              pauseOnHover: true,
              draggable: true,
              closeButton: (
                <button className="btn btn-danger" onClick={() => toast.dismiss()}>
                  <span aria-hidden="true">×</span>
                </button>
              ),
            });
          },
        },
      ],
    });
  };

  return (
    <Container className="mt-5 text-center" style={{ backgroundColor: '#4CAF50', padding: '20px', borderRadius: '10px' }}>
      <h1 className="text-white">Formulario de Registro</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nombre">
          <Form.Label className="text-white">Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="text-center"
          />
        </Form.Group>
        <Form.Group controlId="edad">
          <Form.Label className="text-white">Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Tu edad"
            value={formData.edad}
            onChange={handleChange}
            className="text-center"
          />
        </Form.Group>
        <Form.Group controlId="correo">
          <Form.Label className="text-white">Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Tu correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            className="text-center"
          />
        </Form.Group>
        <Form.Group controlId="comentarios">
          <Form.Label className="text-white">Comentarios</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Deja tus comentarios aquí"
            value={formData.comentarios}
            onChange={handleChange}
            className="text-center"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default Formulario;
