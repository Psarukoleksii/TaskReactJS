import {ADD_PRODUCT, CHANGE_STATUS, DELETE_PRODUCT} from "../actionType/actType";

const initialState = {
    allProducts: []
}

export const products = (state=initialState, action) => {
    switch (action.type){
        case ADD_PRODUCT:{
            let copyAllProducts = [...state.allProducts];
            copyAllProducts.push(action.payload);
            copyAllProducts.sort((a, b)=> b.priority-a.priority)
            return {...state, allProducts: copyAllProducts}
        }
        case DELETE_PRODUCT:{
            let copyAllProducts = [...state.allProducts];
            let filterAllProducts = copyAllProducts.filter((prod)=> prod.id !== action.payload.id)
            return {...state, allProducts: filterAllProducts}
        }
        case CHANGE_STATUS:{
            let index = state.allProducts.map((e) =>  e.id).indexOf(action.payload.id);
            let copyAllProducts = [...state.allProducts];
            copyAllProducts.splice(index, 1, action.payload)
            return {...state, allProducts: copyAllProducts}
        }
        default:{
            return state
        }
    }
}
