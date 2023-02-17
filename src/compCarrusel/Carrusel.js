import React from "react";
import manzana from '../compCards/img/manzana.jpg'
import naranja from '../compCards/img/naranja.jpg'
import frutilla from '../compCards/img/frutilla.jpg'
import './carrusel.css'
import { useEffect } from "react";


export default function Carrusel(){
    const grande = document.querySelector('.grande');
    const punto = document.querySelectorAll('.punto');


const slides = (posicion) => { 

    punto.forEach( (cadaPunto, i) => { //por cada punto (podria hacer con for of)

    punto[i].addEventListener("click", () => {//punto de la posi 0 se hace click
  	let posiciones = i
  	let operacion = posiciones * -100//la operacion es posicion * -100
    grande.style.transform = `translateX( ${operacion}% ) `//le agrego al div grande translat

    punto.forEach( (cadaPunto, i) => {
        punto[i].classList.remove('activo')//eliminar a todos los puntos la clase active
      })
    punto[i].classList.add('activo')//añadirle active al punto con la posicion del parametro
  	 })
  })
} 
 
    return(
        <div style={{position: 'relative', top: '22vh'}}>
        <div className="carrusel">
            <div className="grande">
                <img src={manzana} alt="imagen1" className="imgCarru"/>
                <img src={manzana} alt="imagen1" className="imgCarru"/>
                <img src={frutilla} alt="imagen1" className="imgCarru"/>
            </div>
            <ul class="puntos">
                <li class="punto" onClick={() => slides(0)}></li>
                <li class="punto" onClick={() => slides(1)}></li>
                <li class="punto" onClick={() => slides(2)}></li>
            </ul>
      </div>
      </div>
    )
}