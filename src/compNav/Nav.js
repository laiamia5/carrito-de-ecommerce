import React from "react";
import s from './Nav.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function Nav(props){

    return(
        <div class='container' id="navegador">
            {/* icono responsive */}
            <div id="nav-icon4" class='inicio_responsive'>
            <span></span>
            <span></span>
            <span></span>
            </div>
            {/* inicio li  */}
            <ul data-aos="fade-right">
                <Link to='/'>
                    <li className='inicio lista'>inicio</li>
                </Link>
                <li class='categorias lista'>categorias<b class='arrowblack'></b></li>
                {/* ver el tema de categorias como hacerlo */}
                <Link to='/contacto'>
                    <li className='lista'>contacto</li>
                </Link>
                <Link to='/carrito'>
                    <li className='lista'>carrito</li>
                </Link>
                {/* <li class="carrito"><img src="carritodecompras.gif" class="gif_carrito"> </li> */}
	        </ul>
            {/* aca van los botones bonitos  */}
            <form id="masthead-search" data-aos="fade-left">
                <input type="search" name="s" aria-labelledby="search-label" 
                placeholder="Search&hellip;" className="draw" onChange={(ev) => props.handleInput(ev.target.value)}></input>
                <button type="submit">&rarr;</button>
	        </form> 
            <div className="app-header-right" data-aos="fade-left">
                <button className="mode-switch" title="Switch Theme">
                    <svg className="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                        <defs></defs>
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                </button>
                <button className="add-btn" title="Add New Project">
                    <svg className="btn-icon feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
                <button className="notification-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                </button>
            </div>
        </div>
    )
}