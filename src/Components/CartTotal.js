import React, { useState } from 'react';
import './CartTotal.css';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer'

export default function CartTotal({ items }) {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="cart__body">
            <h1>Total: 
                <span> S/. </span>
                {getBasketTotal(basket)}
            </h1>
                <h3> Cantidad: ({basket?.length})</h3>
            <hr />
            {basket.map((item) => (
                <h3 key={item.id}>
                    {item.title}
                </h3>
            ))}
            <button className="button__end">Enviar a cocina</button>
        </div>
    )
}
