import React, { useState } from 'react';

const Formulario = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    nameuser: '',
    email: '',
    password: '',
    confirmation: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validarEmail = (email) => {
    return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  const validarDatos = (e) => {
    e.preventDefault();

    const { name, nameuser, email, password, confirmation } = formData;

    if (!name.trim() || !nameuser.trim() || !email.trim() || !password.trim() || !confirmation.trim()) {
      setAlert({ message: 'Todos los campos son obligatorios', type: 'danger' });
      return;
    }

    if (!validarEmail(email)) {
      setAlert({ message: 'Email no válido', type: 'danger' });
      return;
    }

    if (password !== confirmation) {
      setAlert({ message: 'Las contraseñas no coinciden', type: 'danger' });
      return;
    }

    setAlert({ message: 'Registro exitoso', type: 'success' });

    setFormData({
      name: '',
      nameuser: '',
      email: '',
      password: '',
      confirmation: ''
    });
  };

  return (
    <form className="Formulario" onSubmit={validarDatos}>
      <div className="form-items">
        <input
          className="form-control border-green"
          type="text"
          placeholder="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-items">
        <input
          className="form-control border-green"
          type="text"
          placeholder="Nombre de usuario"
          name="nameuser"
          value={formData.nameuser}
          onChange={handleChange}
        />
      </div>
      <div className="form-items">
        <input
          className="form-control border-green"
          type="email"
          placeholder="@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-items">
        <input
          className="form-control border-green"
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-items">
        <input
          className="form-control border-green"
          type="password"
          placeholder="Confirma tu contraseña"
          name="confirmation"
          value={formData.confirmation}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success btn-block">Regístrate</button>

    </form>
  );
}

export default Formulario;
