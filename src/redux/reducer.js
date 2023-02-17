import {ADD_PRODUCT,DELETE_PRODUCT, NO_REPEAT, RESET, SUBTRACT} from './actions'

const initialState = {
    carrito: []
}

 const reducer= (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            return {carrito: [...state.carrito, action.payload]}
        case DELETE_PRODUCT:   
              return {carrito: state.carrito.filter(p => p.id !== action.payload)}
        case RESET:
            return{carrito: []}
        case NO_REPEAT:
            let encontrar = state.carrito.find(p => p.id === action.payload)
            let posicion = state.carrito.indexOf(encontrar)
            let nuevo = {...state.carrito[posicion]}
            nuevo.cantidad ++
            state.carrito.splice(posicion, 1, nuevo)
            return state
        case SUBTRACT: 
            let encontrar2 = state.carrito.find(p => p.id === action.payload)
            let posicion2 = state.carrito.indexOf(encontrar2)
            let nuevo2 = {...state.carrito[posicion2]}
            nuevo2.cantidad --
            state.carrito.splice(posicion2, 1, nuevo2)
            return state
        default: 
            return state
    }

}

export default reducer