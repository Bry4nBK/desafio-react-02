import 'bootstrap/dist/css/bootstrap.min.css';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alerta from './Alert';
import React, { useState } from 'react';
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Registro = () => {
  const [alert, setAlert] = useState({
    message: '',
    type: ''
  });

  const socialIcons = [
    { name: 'Github', icon: faGithub, url: 'https://github.com' },
    { name: 'Facebook', icon: faFacebook, url: 'https://facebook.com' },
    { name: 'Instagram', icon: faInstagram, url: 'https://instagram.com' }
  ];

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Crear cuenta</h1>
        <SocialButton socialIcons={socialIcons} />
        <Formulario setAlert={setAlert} />
        <Alerta message={alert.message} type={alert.type} />
      </div>
    </div>
  );
}

export default Registro;
