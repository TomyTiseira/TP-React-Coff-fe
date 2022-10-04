import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const url = '../../productos.json';
    fetch(url)
      .then((response) => response.json())
      .then((productos) => {
        const productoFiltrado = productos.find((producto) => producto.id === parseInt(id))

        setProducto(productoFiltrado);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div id='detalle'>
      <ItemDetail item={producto}/>
    </div>
  );
}

export default ItemDetailContainer