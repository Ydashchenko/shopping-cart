import PropTypes from 'prop-types'
import './styles/champion-element.css'

export default function ChampionElement({ champ }) {
    return (
        <button className='champion-element'>
            <img src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${champ === "FiddleSticks" ? "Fiddlesticks" : champ}.png`} alt={champ} />
            <p className="champion-name">{champ}</p>
            <p className="champion-price">450 $</p>
        </button>
    )
}

ChampionElement.propTypes = {
    champ: PropTypes.string
}
