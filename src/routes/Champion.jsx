import {  useParams } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import '../styles/champion.css'

export default function Champion() {
    const { champ } = useParams()
    const allChampsArray = useOutletContext()

    // Check if allChampsArray is available and the champion data exists
    const championData = allChampsArray?.data[champ];

    if (!championData) {
        // Handle the case where data is not available yet
        return <div>Loading...</div>;
    }

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
                        <p className='champ-price'>$ {parseInt(championData.stats.hp)}</p>
                        <div className='add-to-cart-form'>
                            <button className='change-quantity'>-</button>
                            <input className='input-quantity' type="number" min={1} defaultValue={1} />
                            <button className='change-quantity'>+</button>
                        </div>
                        <button className='add-to-cart-button'>Add to cart</button>
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

