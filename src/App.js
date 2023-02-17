import logo from './logo.svg';
import './App.css';
import Cards from './compCards/Cards.js'
import Nav from './compNav/Nav.js'
import './EstilosGlob.css'
import Carrito from './compCarrito/Carrito'
import Form from './compContact/Form'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import data from './compCards/data.json'
import { useState, useEffect } from 'react';

const fondo = {backgroundColor: '#f3f6fd', width: '100vw', height: '100vh' }

export default function App() {

  const [bdd, setBdd] = useState(data)

  const handleInput = (value)=> {
    let objA = data.filter((e) => e.producto.includes(value) || e.descripcion.includes(value))
    setBdd(objA)
  }

  return (
    <Provider store={store}>
    <BrowserRouter>
    
    <div style={fondo}>
      <Nav handleInput={handleInput}/>
        <Routes>
          <Route path="/" element= { <Cards bdd= {bdd}/>} ></Route>
          <Route path="/carrito" element={<Carrito/>} ></Route>
          <Route path="/contacto" element= {<Form/>}></Route>
        </Routes>
      </div>
      
    </BrowserRouter>
    </Provider>
      
  );
}


