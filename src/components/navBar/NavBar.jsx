import React from 'react';
import logo2 from '../../images/logo2.svg';
import CartWidget from './CartWidget';
import { NavLink} from "react-router-dom";

const navbar = () => {
  return (
    <div>
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/category/1'>Bebidas</NavLink>
        <NavLink to='/category/2'>Comidas</NavLink>
        {/* <NavLink to={`/`}>Inicio</NavLink> */}
    </div>

  )
}

export default navbar;