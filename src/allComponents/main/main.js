import React, {useEffect, useState} from 'react';
import {Form} from "../form";
import {useSelector} from "react-redux";
import {ProductItem} from "../productItem";
import {Filter} from "../filter";

export const Main = () => {


    const {allProducts} = useSelector(({products: {allProducts}}) => ({allProducts}));

    const [state, setState] = useState([]);

    useEffect(() => {
        setState([...allProducts])
    }, [allProducts])

    const handFilterWithStatusFalse = () => {
        let newArr = allProducts.filter(value => value.status === false)
        setState(newArr);
    }

    const handFilterWithStatusTrue = () => {
        let newArr = allProducts.filter(value => value.status === true)
        setState(newArr);
    }

    const handNotFilter = () => {
        setState([...allProducts])
    }

    const haveProduct = state.length >= 1 ? state.map(value => <ProductItem items={value}/>) : <p>Поки немає продуктів :(</p>

    return (
        <div>
            <Form/>
            <hr/>

            <Filter handNotFilter={handNotFilter} handFilterWithStatusTrue={handFilterWithStatusTrue}
                    handFilterWithStatusFalse={handFilterWithStatusFalse}/>

            <hr/>
            {haveProduct}
        </div>
    )
}
