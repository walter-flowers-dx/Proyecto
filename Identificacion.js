import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    celular: '',
    domicilio: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  const handleClear = () => {
    setFormData({
      nombre: '',
      apellidos: '',
      correo: '',
      celular: '',
      domicilio: '',
    });
  };

  return (
    <div>
      <h1>FORMULARIO DE REGISTRO</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Apellidos:
          <input type="text" name="apellidos" value={formData.apellidos} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input type="email" name="correo" value={formData.correo} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Número de Celular:
          <input type="tel" name="celular" value={formData.celular} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Domicilio:
          <input type="text" name="domicilio" value={formData.domicilio} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleClear}>Limpiar</button>
      </form>
    </div>
  );
};

export default Formulario;
