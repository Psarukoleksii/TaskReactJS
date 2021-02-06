import {ADD_PRODUCT, CHANGE_STATUS, DELETE_PRODUCT} from "../actionType/actType";

export const AddProduct = (prod) => ({
    type: ADD_PRODUCT,
    payload: prod,
})

export const DeleteProduct = (prod) => ({
    type: DELETE_PRODUCT,
    payload: prod
})

export const ChangeStatus = (prod) => ({
    type: CHANGE_STATUS,
    payload: prod
})
