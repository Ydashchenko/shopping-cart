import '../styles/store.css'
import PropTypes from 'prop-types'
import { useOutletContext } from 'react-router-dom'
import ChampionElement from '../ChampionElement'

export default function Store() {
    const {allChampsArray} = useOutletContext()

    // http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg - splash arts
    // https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg - loading screen
    // https://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/Aatrox.png - square assets
    return  (
        <main className="store">
            <div className='champion-container'>
            {Object.keys(allChampsArray.data).map((champ) => (
                <ChampionElement champInfo={allChampsArray.data[champ]} key={champ} />
            ))}
            </div>
        </main>
    )
}

Store.propTypes = {
    allChampsArray: PropTypes.array
}
