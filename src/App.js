import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a Coff-Fe. Tomar un Coff Fe: No te hará feliz, pero se acerca bastante"}/>
    </div>
  );
}

export default App;
