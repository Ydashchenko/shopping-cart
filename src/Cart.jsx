import { useState } from 'react'
import './styles/cart.css'

export default function Cart() {
    const [isCartEmpty, setIsCartEmpty] = useState(true)

    function hideCartWindow() {
        document.getElementsByClassName('cart-window')[0].classList.add('hidden');
    }      

    return (
        <div className='cart-window'>
            <div className='cart-container'>
                <div className='cart-content'>
                    <div className='cart-first-line'>
                        <p>{isCartEmpty ? "Your cart is empty" : `Cart (0 items)`}</p>
                        <button onClick={hideCartWindow} className='close-cart'>X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}