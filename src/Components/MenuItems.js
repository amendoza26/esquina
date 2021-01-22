import React, { useState } from 'react';
import Item from './Item';
import './MenuItems.css'

function MenuItems({ items, setCartItems }) {    

    return (
        <div className="menuItems">
            <h1>Menu</h1>
            <hr />
            <div className="menuItems__item">
                {items.map((item, index) => 
                    <Item
                        index={index}
                        item={item}
                        key={index}
                    />
                )}
            </div>
        </div>
        
    )
}

export default MenuItems