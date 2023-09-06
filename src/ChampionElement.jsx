import PropTypes from 'prop-types'
import './styles/champion-element.css'
import { Link } from 'react-router-dom'


export default function ChampionElement({ champInfo }) {
    
    return (
        <Link to={`/store/${champInfo.id}`} className='champion-element'>
            <img src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${champInfo.id === "FiddleSticks" ? "Fiddlesticks" : champInfo.id}.png`} alt={champInfo.id} />
            <p className="champion-name">{champInfo.id}</p>
            <p className="champion-price">{parseInt(champInfo.stats.hp)}  $</p>
        </Link>
    )
}

ChampionElement.propTypes = {
    champInfo: PropTypes.object,
}
