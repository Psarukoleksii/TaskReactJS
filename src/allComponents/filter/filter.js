import React from 'react';

export const Filter = ({handFilterWithStatusFalse, handFilterWithStatusTrue, handNotFilter}) => {
    return (
        <div>
            <input type="radio" onChange={handNotFilter} name={'inputFilter'}/>
            <label>Побачити продукти без фільтрування</label>
            <input type="radio" onChange={handFilterWithStatusFalse} name={'inputFilter'}/>
            <label>Фільтрація зі статусом продукту 'FALSE'</label>
            <input type="radio" onChange={handFilterWithStatusTrue} name={'inputFilter'}/>
            <label>Фільтрація зі статусом продукту 'TRUE'</label>
        </div>
    )
}
