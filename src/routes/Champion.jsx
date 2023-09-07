import {  useParams } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import '../styles/champion.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Champion({ addToCart }) {
    const { champ } = useParams()
    const allChampsArray = useOutletContext()
    const [champAmount, setChampAmount] = useState(1) 

    function increaseAmount() {
        setChampAmount(champAmount + 1)
    }

    function decreaseAmount() {
        if (champAmount == 1) {
            return
        }
        setChampAmount(champAmount - 1)
    }

    function handleAddToCart() {
        // Create an item object with champName, champPrice, and any other necessary data
        const item = {
            champ,
            champPrice,
            champAmount,
        };
        addToCart(item); // Call the addToCart function to add the item to the cart
    }

    const championData = allChampsArray?.data[champ];

    if (!championData) {
        return <div>Loading...</div>;
    }

    const champPrice = parseInt(championData.stats.hp)

    const backgroundImageUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`;

    const divStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };



    return (
        <main id="champion" style={divStyle}>
            <div className='champ-container'>
                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg`} alt={champ} />
                <div className='champ-description'>
                    <div className='champ-name-title'>
                        <p className='champ-name'>{champ}</p>
                        <p className='champ-title'>{championData.title}</p>
                    </div>
                    <div className='price-cart'>
                        <p className='champ-price'>$ {champPrice}</p>
                        <div className='add-to-cart-form'>
                            <button onClick={decreaseAmount} className='change-quantity decrease-amount'>-</button>
                            <input onChange={setChampAmount} className='input-quantity' type="number" min={1} value={champAmount} />
                            <button onClick={increaseAmount} className='change-quantity increase-amount'>+</button>
                        </div>
                        <button onClick={handleAddToCart} className='add-to-cart-button'>Add to cart</button>
                    </div>
                    <ul className='tags'>
                        {championData.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                    <p>{championData.blurb}</p>
                    {console.log(championData)}
                </div>
            </div>
        </main>
    )
}

Champion.propTypes = {
    addToCart: PropTypes.func
}