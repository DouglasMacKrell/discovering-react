import React from 'react'
import './ItemPage.css'
import Item from './Items'

function ItemPage({items, onAddToCart}) {
    return(
        <ul className="item-page__items">
            {items.map(item => 
                <li key={item.id} className="item-page__item">
                    <Item item={item} onAddToCart={() => onAddToCart(item)} />
                </li>    
            )}
        </ul>
    )
}

export default ItemPage