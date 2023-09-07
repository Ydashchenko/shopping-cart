import { useState } from 'react'
import './styles/cart.css'
import PropTypes from 'prop-types'

export default function Cart({ cartItems }) {

    function hideCartWindow() {
        document.getElementsByClassName('cart-window')[0].classList.add('hidden');
    }
    
    return (
        <div className='cart-window hidden'>
            <div className='cart-container'>
                <div className='cart-content'>
                    <div className='cart-first-line'>
                        <p>{cartItems.length == 0 ? "Your cart is empty" : `Cart (${cartItems.length} items)`}</p>
                        
                        <button onClick={hideCartWindow} className='close-cart'>X</button>
                    </div>
                    {cartItems.length == 0 && (
                        <button className="go-shopping" onClick={hideCartWindow}>Go shopping</button>
                    )}
                    {cartItems.length > 0 && (
                        <ul className='items-container'>
                            {cartItems.map((item, index) => (
                                <li className='item-container' key={`${item.champName}_${index}`}>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${item.champ}.png`} alt={item.champName} />
                                    <div className='item-info'>
                                        <p>{item.champName}</p>
                                        <p>{item.champPrice}</p>
                                        <div className='amount-item-bar'>
                                            <button className='decrease-item-in-cart-button'>-</button>
                                            <input type="number"  />
                                            <button className='increase-item-in-cart-button'>+</button>
                                        </div>
                                        <button className='remove-from-cart-button'>Remove</button>
                                        {console.log(cartItems)}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array
}