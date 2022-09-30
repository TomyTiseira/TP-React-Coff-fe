import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [ state, setState ] = useState([]);

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/category/:id' element={<ItemListContainer items={state}/>}/>
          <Route exact path='/items/:id' element={<ItemDetailContainer items={state}/>}/>
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer greeting={"Bienvenido a Coff-Fe. Tomar un Coff Fe: No te hará feliz, pero se acerca bastante"}/> */}
    </div>
  );
}

export default App;
