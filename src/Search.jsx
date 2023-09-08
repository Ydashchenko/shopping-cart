import searchPng from './pics/white-search.svg'
import './styles/search.css'

export default function Search() {
    return (
        <div className="search">
            <div className="search-container">
                <div className="search-row">
                    <img className='popup-search-logo' src={searchPng} alt={searchPng} />
                    <input className="popup-search-input" type="text" placeholder='Search Champion' />
                    <button className='close-search-btn'>x</button>
                </div>
            </div>
        </div>
    )
}