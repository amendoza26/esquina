import React from 'react';
import './Item.css';
import { useStateValue } from '../StateProvider';

export default function Item( {index, item } ) {
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: item.id,
                title: item.title,
                price: item.price,
            },
        });
    }; 

    return (
        <div className="item">
            <button className="item__button" onClick={addToBasket}>
                <img src={`${process.env.PUBLIC_URL}/images/${item.image}.jpg`}  />
            </button>
            <h2 className="item__name">{item.title}
            <span>  S/.{item.price}</span>
            </h2>
        </div>
    )
}
