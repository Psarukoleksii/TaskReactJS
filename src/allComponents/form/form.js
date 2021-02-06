import React from 'react';
import {useDispatch} from "react-redux";
import {AddProduct} from "../../redux/actionCreator/actionCreators";

export const Form = () =>{

    const dispatch = useDispatch()

    const handCreateProduct = (e) =>{
        e.preventDefault()
        let id = new Date().getTime();
        let name = e.target[0].value;
        let status = e.target[1].checked === true ? true : false;
        let priority = e.target[3].value;

        let product = {
            id,
            name,
            status,
            priority
        }
        dispatch(AddProduct(product))

        e.target[0].value = '';
        e.target[3].value = '';
    }
    return(
        <div>
            <form onSubmit={handCreateProduct}>
                <div>
                    <input type="text"/>
                    <label htmlFor="">Назва продукту</label>
                </div>
                <div>
                    Статус продукту
                    <input type="radio" value={true} name={'checkbox'}/>
                    <label htmlFor="">True</label>
                    <input type="radio" value={false} name={'checkbox'}/>
                    <label htmlFor="">False</label>
                </div>
                <div>
                    <input type="number" min={1} max={5}/>
                    <label htmlFor="">Пріорітетність (від 1 до 5)</label>
                </div>
                <button>Створити продукт</button>
            </form>
        </div>
    )
}
