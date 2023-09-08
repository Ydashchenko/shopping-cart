import './styles/cart.css';
import PropTypes from 'prop-types';

export default function Cart({ cartItems, setCartItems, totalItems }) {
    function hideCartWindow() {
        document.getElementsByClassName('cart-window')[0].classList.add('hidden');
    }

    const totalPrice = cartItems.reduce((total, item) => total + item.champPrice * item.champAmount, 0);

    function handleDecrease(itemIndex) {
        if (cartItems[itemIndex].champAmount <= 1) {
            return
        }
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
        const newValue = parseInt(e.target.value);

        if (!isNaN(newValue) && newValue >= 1) {
            updatedCartItems[itemIndex].champAmount = newValue;
            setCartItems(updatedCartItems);
        }
    }

    function handleRemove(itemIndex) {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(itemIndex, 1);
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
                                        <p className='cart-champ-price'>$ {item.champPrice * item.champAmount}</p>
                                        <div className='amount-item-bar'>
                                            <button className='decrease-item-in-cart-button' onClick={() => handleDecrease(index)}>-</button>
                                            <input
                                                minLength={1}
                                                className='cart-champ-amount-input'
                                                type="number"
                                                value={item.champAmount}
                                                onChange={(e) => handleOnChange(index, e)}
                                            />
                                            <button className='increase-item-in-cart-button' onClick={() => handleIncrease(index)}>+</button>
                                        </div>
                                        <button onClick={() => handleRemove(index)} className='remove-from-cart-button'>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {cartItems.length > 0 && (
                        <div className="cart-total">
                            <div>
                                <p className="cart-total-label">Total:</p>
                                <p className="cart-total-price">$ {totalPrice.toFixed(2)}</p>
                            </div>
                            <button className="proceed-to-checkout">Proceed to Checkout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    cartItems: PropTypes.array,
    setCartItems: PropTypes.func,
    totalItems: PropTypes.number
};
