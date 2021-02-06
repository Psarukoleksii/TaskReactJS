import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {ChangeStatus, DeleteProduct} from "../../redux/actionCreator/actionCreators";

export const ProductItem = ({items}) => {

    const [status, setStatus] = useState(items.status);
    const dispatch = useDispatch()

    const handOnChangeCheckBox = (e) => {
        e.preventDefault()
        if (e.target.value === 'input1') {
            setStatus(true)
            dispatch(ChangeStatus({...items, status: true}))
        } else {
            setStatus(false)
            dispatch(ChangeStatus({...items, status: false}))
        }
    }

    const handDeleteProduct = (e) => {
        e.preventDefault()
        dispatch(DeleteProduct(items))
    }

    return (
        <div>
            <h2>
                {items.name}
            </h2>

            <p>Статус продукту: {items.status.toString()}</p>
            <p>Пріорітет: {items.priority}</p>
            <form onSubmit={handDeleteProduct}>
                <input type="radio" name={'checkbox'} value={'input1'} checked={status}
                       onChange={(e) => handOnChangeCheckBox(e)}/>
                <label htmlFor="">True</label>
                <input type="radio" name={'checkbox'} value={'input2'} checked={!status}
                       onChange={(e) => handOnChangeCheckBox(e)}/>
                <label htmlFor="">False</label>
                <div>
                    <button>Delete</button>
                </div>
            </form>
        </div>
    )
}
