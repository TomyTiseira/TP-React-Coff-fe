import React, { useState, useEffect } from 'react';
import Item from './Item'

const ItemList = ({categoria}) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            const response = await fetch('../../productos.json');
            let productos = await response.json();

            if(categoria !== undefined) {
                const productosFiltrados = productos.filter(producto => producto.categoria === parseInt(categoria));
                productos = productosFiltrados;
            }

            const cardsProductos = productos.map(producto => {
                return(
                <div key={producto.id} className='box-grid text-center bg'>
                    <Item item={producto}/>
                </div>);
            });

            return cardsProductos;
        }

        obtenerProductos()
            .then(productos => setProductos(productos))
            .catch(error => console.log(error));
    }, [categoria]);

    return (
        <div className='grid-container'>
            {productos}
        </div>
      );
    
}

export default ItemList