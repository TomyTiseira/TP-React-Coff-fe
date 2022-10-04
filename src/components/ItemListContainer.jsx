import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const {id} = useParams();

  return (
    <div id='menu'>
      <ItemList categoria={id}/>
    </div>
  );
}

export default ItemListContainer;
