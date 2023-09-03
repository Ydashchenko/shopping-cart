import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Root from "./routes/Root";
import Store from "./routes/Store"
import './styles/index.css'
import shopIcon from './pics/icon.jpg'
import githubLogo from './pics/white-gh.jpeg'
import searchLogo from './pics/search.png'
import shoppingCartLogo from './pics/shopping-cart.png'
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/store",
    element: <Store />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <nav>
        <div className='shop-name'>
          <img className='shop-name-img' src={shopIcon} alt={shopIcon} />
          <h1 className='shop-name-text'>Champion Shop</h1>
        </div>
        <button className='search-btn'>
          <img className='search-icon' src={searchLogo} alt={searchLogo} />
          <span>Search Champion</span>
        </button>
        <ul className='navbar'>
          <Link to={`/`} className='home-tab'>Home</Link>
          <Link to={`/store`} className='store-tab'>Store</Link>
          <li>
            <button className='cart-btn'>
              <img className='cart-logo' src={shoppingCartLogo} alt={shoppingCartLogo} />
              <span className='cart-items'>0</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <RouterProvider router={router} />
    </main>

    <footer>
      <span>Copyright © </span>
      <span>{(new Date().getFullYear())}</span>
      <a rel='noreferrer' href="https://github.com/Ydashchenko" target="_blank">Yevhenii Dashchenko</a>
      <a rel='noreferrer' href="https://github.com/Ydashchenko" target="_blank"><img src={githubLogo} alt={githubLogo} className="github"/></a>
    </footer>
    
  </React.StrictMode>,
)
