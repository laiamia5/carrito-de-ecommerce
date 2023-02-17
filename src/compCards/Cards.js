import React from "react";
import Card from './Card'
import {useState} from 'react'
import data from './data.json'
import Carrusel from '../compCarrusel/Carrusel'

const div_principal = {
    position: 'relative',
    display: 'flex',
    top: '18vh',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  }

export default function Cards(props){

    return(
        <>
        {props.bdd.length == 0?
		 (<div style={{display:'flex', justifyContent:'center', position: 'relative', top:'40vh'}}>
            no se encontraron productos con esa descripcion</div>):
           (
            <div>
                <div style={div_principal}>
                {props.bdd.map((e) => {
                    return(
                        <Card
                        key={e.id}
                        producto={e.producto}
                        precio= {e.precio}
                        id= {e.id}
                        categoria={e.categoria}
                        cantidad={e.cantidad}
                        img = {e.img}
                        descripcion = {e.descripcion}
                        />
                    ) 
                })}
                </div>
            </div>)}
        </>
    )
}