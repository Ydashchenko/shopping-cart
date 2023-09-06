import '../styles/root.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { useState, useEffect } from 'react';


export default function Root() {
    const [allChampsArray, setAllChampsArray] = useState({data: {}});

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
            <Outlet context={allChampsArray}/>
            <Footer />   
        </>
    );
}
