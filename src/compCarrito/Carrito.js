import React from "react";
import '../estilos/carrito.css'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Delete, Reset, subtract, noRepeat} from '../redux/actions'
import store from '../redux/store'
import frutilla from '../compCards/frutilla.jpg'


export default function Carrito() {
    const dispatch = useDispatch()
    const carrito = useSelector(state => state.carrito)
    console.log(carrito)
    const [num, setNum] = useState(1)

    let total = 0
    carrito.forEach((e) => {
       let suma = e.precio * e.cantidad
        total += suma
    })

    const despachar= (id, cantidad) => {
        if(cantidad === 1){
            dispatch(Delete(id))
        }else{
            dispatch(subtract(id)) 
            setNum((antes) => antes + 1)
        }
    }

    return(
            <div className=" carritobtns">
   			    <div className="carritoDom">
                    {carrito.length === 0? (
                     <p className="carrito_vacio"> no hay productos en el carrito </p> 
                    ):(
                        store.getState().carrito.map((element, index) => {
                        return( 
                           <div className="cardCarrito" key={index}>
                                <p class='carrito_prod'>{element.producto}</p>
                                <strong class='carrito_precio'>${element.precio}</strong>
                                <img src={element.img} class="carrito_img"/>
                                <button class="carrito_btn" onClick={() => despachar(element.id, element.cantidad)}><strong class="menos">-</strong></button>
                                <p class="carrito_cantidad">{element.cantidad}</p>
                                <button class="carrito_btn" onClick={() => {dispatch(noRepeat(element.id)); setNum((n)=> n - 1)}} ><strong class="menos">+</strong></button>
                            </div>
                        )
                        })
                    )}
   			    </div>
                <hr style={{color: 'black'}}></hr>
                <div className="cardCarritoTotal">
                    <p>TOTAL PRODUCTOS : </p><p className="espacio"> ${total}</p>
                    <p>COSTO DE ENVIO :  </p><p className="espacio">$230</p>
                    <p>COMPRA FINAL  :   </p><p className="espacio"> ${total + 230}</p>
                </div>
   			    <div className="botones_carrito">
	   			    <button className="vaciarCarrito" onClick={() => dispatch(Reset())}>vaciar carrito</button>
	   			    <button className="finalizar">finalizar compra</button>
	   		    </div>
   	        </div> 
       
    )
}