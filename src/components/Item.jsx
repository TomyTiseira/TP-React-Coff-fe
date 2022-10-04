import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <>
      <NavLink to={`/items/${item.id}`} className='text-white text-decoration-none'>
        <img src={item.imagen} alt={item.nombre}/>
        <h3 className='fs-5 py-2 col'>{item.nombre}</h3>
      </NavLink>
      <div className='fs-6'>${item.precio}</div>
      <button className='fs-6 d-inline-block boton-a'>Agregar al carrito</button>
    </>
  )
}

export default Item