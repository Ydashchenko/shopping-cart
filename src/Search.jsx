import searchPng from './pics/white-search.svg';
import './styles/search.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ChampionElement from './ChampionElement';

export default function Search({ allChampsArray, isSearchVisible, hideSearchWindow }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredChampions = Object.values(allChampsArray.data).filter((champion) =>
        champion.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        // Render the component conditionally based on isVisible state
        <div className={`search ${isSearchVisible ? '' : 'hidden'}`}>
            <div className="search-container">
                <div className="search-row">
                    <img className='popup-search-logo' src={searchPng} alt={searchPng} />
                    <input 
                        className="popup-search-input" 
                        type="text" 
                        placeholder='Search Champion' 
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={hideSearchWindow} className='close-search-btn'>x</button>
                </div>
                <div className='search-results'>
                    {searchQuery !== '' ? (
                        filteredChampions.length > 0 ? (
                            filteredChampions.map((champion) => (
                                <ChampionElement onClick={() => {hideSearchWindow()}} champInfo={champion} key={champion.id} />
                            ))
                        ) : (
                            <p>No matches</p>
                        )
                    ) : null}
                </div>
            </div>
        </div>
    );
}

Search.propTypes = {
    allChampsArray: PropTypes.object,
    isSearchVisible: PropTypes.bool,
    hideSearchWindow: PropTypes.func
}
