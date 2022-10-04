import React from 'react';

const ItemDetail = ({item}) => {
    console.log(item)
    const categoria = item.categoria = 1 ? 'Bebida' : 'Comida';
    
    return (
      <div className='box-grid'>
        <img src={item.imagen} alt={item.nombre}/>
        <h3 className='fs-5 py-2 col'>Nombre: <span>{item.nombre}</span></h3>
        <div>Categoria: <span>{categoria}</span></div>
        <div className='fs-6'>Precio: <span>${item.precio}</span></div>
        <button className='fs-6 d-inline-block boton-a'>Agregar al carrito</button>
      </div>
  );
}

export default ItemDetail