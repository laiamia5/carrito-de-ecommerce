
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const RESET = 'RESET'
export const NO_REPEAT = 'NO_REPEAT'
export const SUBTRACT = 'SUBTRACT'

export function Add (product) {
    return {type: ADD_PRODUCT, payload: product}
}

export function Delete (id) {
    return {type: DELETE_PRODUCT, payload: id}
}

export function Reset() {
    return {type:RESET, payload: 'reset'}
}

export function noRepeat(id){
    return{type: NO_REPEAT, payload: id} 
}

export function subtract (id){
    return{type: SUBTRACT, payload: id} 
}
