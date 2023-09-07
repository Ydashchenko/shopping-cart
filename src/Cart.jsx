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
                </div>
            </div>
        </div>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array
}