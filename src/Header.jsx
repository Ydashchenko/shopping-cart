import searchLogo from './pics/white-search.svg'
import shoppingCartLogo from './pics/shopping-cart.png'
import shopIcon from './pics/icon.jpg'
import { Link } from 'react-router-dom'
import './styles/header.css'

export default function Header() {
    return (
        <>
            <header>
                <Link to="/" className='shop-name'>
                    <img className='shop-name-img' src={shopIcon} alt={shopIcon} />
                    <h1 className='shop-name-text'>Champion Shop</h1>
                </Link>
                <button className='search-btn'>
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
                        <button className='cart-btn'>
                            <img className='cart-logo' src={shoppingCartLogo} alt={shoppingCartLogo} />
                            <span className='cart-items'>0</span>
                        </button>
                    </li>
                </ul>
            </header>
        </>
    )
}