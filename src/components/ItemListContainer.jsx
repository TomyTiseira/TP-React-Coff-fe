/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const ItemListContainer = ({items}) => {
  const {id} = useParams();
  const [listadoProductos, setListadoProductos] = useState([]);

  useEffect(() => {
    const url = './productos.json';
    console.log(id)
    fetch(url)
      .then((response) => response.json())
      .then((productos) => setListadoProductos(productos))
  }, [id]);


  useEffect(()=>{
    const res = listadoProductos.filter((value)=> value.categoria == id);
    setListadoProductos(res)
  },[id])

  return (
    <>
        {listadoProductos.map((item) => {
          return(
            <div key={item.id}>
              <img src={item.imagen}/>
              <h3><NavLink to={`/items/${item.id}`}>{item.nombre}</NavLink></h3>
              <div>${item.precio}</div>
              <button>Agregar al carrito</button>
            </div>
          )
        })}
    </>
  );
}


export default ItemListContainer;
