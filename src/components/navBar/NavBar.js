import React from 'react';
import logo2 from '../../images/logo2.svg';
import CartWidget from './CartWidget';

const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                <a className="navbar-brand" href="../index.html"><img src={logo2} alt="Coffe Fe" width="60" height="60"/></a>
                <button className="navbar-toggler bg-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="./index">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#nosotros">Sobre Nosotros</a></li>
                        <li className="nav-item"><a className="nav-link" href="#promociones">Nuestras Promociones</a></li>
                        <li className="nav-item"><a className="nav-link" href="#clientes">Opiniones de Clientes</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contacto">Contactanos</a></li>
                        <li className="nav-item"><a className="nav-link" href="../page/menu">Menú</a></li>
                    </ul>
                </div>
            </div>
            <span className='me-4'>
                <CartWidget/>
            </span>
        </nav>
    </div>
  )
}

export default navbar;