import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({item}) => {
  const {id} = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const url = './productos.json';
    console.log(id)
    fetch(url)
      .then((response) => response.json())
      .then((productos) => {
        const producto = productos.filter()
      })
  }, [id]);



  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer