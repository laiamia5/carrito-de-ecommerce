import React, { useEffect } from "react";
import s from './card.css'
import frutilla from './frutilla.jpg'
import { useState } from "react";
import data from './data.json'
import { useDispatch } from "react-redux";
import {Add, Delete, noRepeat} from '../redux/actions'
import store from '../redux/store'
import '../img zapas/batistella.jpg'
import "../img zapas/yomax.jpg"

export default function Card(props){

	const dispatch = useDispatch() 
	store.subscribe(() => {
		console.log(store.getState())
	})

	const repeat = (id) => {
		let Yrepeat = store.getState().carrito.some((e) => e.id == id)
		if(Yrepeat){
			dispatch(noRepeat(id))
		}else{
			return dispatch(Add(props))
		}
	}
	useEffect(() => {
		console.log(props)
	}, [])
    return(
        <>
			<div className='contenedor_cards' category={props.categoria} key={props.id}>
				<div className="img_contenedor">
					<img src={props.img} class="img_card" />		
				</div>
				<p>{props.producto}</p>
				<p className='chiqito'>{props.descripcion}</p>
				<strong>${props.precio}</strong>
				<div className="frame">
					<button 
					className="custom-btn btn-2" 
					id={props.id}
					onClick={() =>{
						repeat(props.id)
						 console.log(props.img)}}
					>comprar</button>
				</div>
			</div>
			
        </>
    )
}