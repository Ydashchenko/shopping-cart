import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { useState, useEffect } from 'react';
import Cart from '../Cart';
import Champion from './Champion';

export default function Root() {
    const [allChampsArray, setAllChampsArray] = useState({ data: {} });
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
                const data = await response.json();

                setAllChampsArray({ data: data.data });
            } catch (error) {
                console.error('Error fetching champion data', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <Cart cartItems={cartItems} />
            <Outlet context={allChampsArray}>
                    <Champion addToCart={addToCart} />
            </Outlet>
            <Footer />
        </>
    );
}
