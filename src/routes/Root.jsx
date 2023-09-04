import '../styles/root.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { useState, useEffect } from 'react';


export default function Root() {
    const [allChampsArray, setAllChampsArray] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
            const data = await response.json();

            // Extract champion names from the data
            const allChampionNames = Object.keys(data.data);
            setAllChampsArray(allChampionNames);
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
