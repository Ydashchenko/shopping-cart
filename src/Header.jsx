import searchLogo from './pics/white-search.svg'
import shoppingCartLogo from './pics/shopping-cart.png'
import shopIcon from './pics/main-logo.png'
import { Link } from 'react-router-dom'
import './styles/header.css'
import PropTypes from 'prop-types'

export default function Header({ totalItems, revealSearchWindow }) {
    const [isVisible, setIsVisible] = useState(true);
    
    function revealCartWindow() {
        document.getElementsByClassName('cart-window')[0].classList.remove('hidden');
    }      

    return (
        <>
            <header>
                <Link to="/" className='shop-name'>
                    <img className='shop-name-img' src={shopIcon} alt={shopIcon} />
                    <h1 className='shop-name-text'>Champion Shop</h1>
                </Link>
                <button onClick={revealSearchWindow} className='search-btn'>
                    <img className='search-icon' src={searchLogo} alt={searchLogo} />
                    <span>Search Champion</span>
                </button>
                <ul className='navbar'>
                    <li>
                        <Link to="/" className='home-tab'>Home</Link>
                    </li>
                    <li>
                        <Link to="/store" className='store-tab'>Store</Link>
                    </li>
                    <li>
                        <button onClick={revealCartWindow} className='cart-btn'>
                            <img className='cart-logo' src={shoppingCartLogo} alt={shoppingCartLogo} />
                            <span className='cart-items'>{totalItems > 99 ? "99+" : totalItems}</span>
                        </button>
                    </li>
                </ul>
            </header>
        </>
    )
}

Header.propTypes = {
    totalItems: PropTypes.number,
    revealSearchWindow: PropTypes.func
}