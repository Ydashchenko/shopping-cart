import { useState } from 'react';
import './styles/cart.css';
import PropTypes from 'prop-types';

export default function Cart({ cartItems, setCartItems }) {
    function hideCartWindow() {
        document.getElementsByClassName('cart-window')[0].classList.add('hidden');
    }

    const totalItems = cartItems.reduce((total, item) => total + parseInt(item.champAmount), 0);

    function handleDecrease(itemIndex) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].champAmount -= 1;
        setCartItems(updatedCartItems);
    }

    function handleIncrease(itemIndex) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].champAmount += 1;
        setCartItems(updatedCartItems);
    }

    function handleOnChange(itemIndex, e) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].champAmount = e.target.value;
        setCartItems(updatedCartItems);
    }

    return (
        <div className='cart-window hidden'>
            <div className='cart-container'>
                <div className='cart-content'>
                    <div className='cart-first-line'>
                        <p className='cart-items-inside'>{cartItems.length === 0 ? "Your cart is empty" : `Cart (${totalItems} items)`}</p>

                        <button onClick={hideCartWindow} className='close-cart'>X</button>
                    </div>
                    {cartItems.length === 0 && (
                        <button className="go-shopping" onClick={hideCartWindow}>Go shopping</button>
                    )}
                    {cartItems.length > 0 && (
                        <ul className='items-container'>
                            {cartItems.map((item, index) => (
                                <li className='item-container' key={`${item.champ}_${index}`}>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${item.champ}.png`} alt={item.champ} />
                                    <div className='item-info'>
                                        <p className='cart-champ-name'>{item.champ}</p>
                                        <p className='cart-champ-price'>$ {item.champPrice}</p>
                                        <div className='amount-item-bar'>
                                            <button className='decrease-item-in-cart-button' onClick={() => handleDecrease(index)}>-</button>
                                            <input
                                                min={1}
                                                className='cart-champ-amount-input'
                                                type="number"
                                                value={item.champAmount}
                                                onChange={(e) => handleOnChange(index, e)}
                                            />
                                            <button className='increase-item-in-cart-button' onClick={() => handleIncrease(index)}>+</button>
                                        </div>
                                        <button className='remove-from-cart-button'>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    cartItems: PropTypes.array,
    setCartItems: PropTypes.func, // Add this prop for updating cartItems
};
