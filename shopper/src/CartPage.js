import React from 'react'
import Item from './Items'
import './CartPage.css'

function CartPage({items}) {
    return (
        <ul className="cart-page-items">
            {items.map(item => 
                <li key={item.id} className="cart-page-item">
                    <Item item={item} />
                </li>    
            )}
        </ul>
    )
}

export default CartPage