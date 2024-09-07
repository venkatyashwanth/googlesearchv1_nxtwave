import React, { useState, useEffect } from 'react'
import styles from './GoogleSearch.module.scss';
import SuggestionItem from '../SuggestionItem';

const suggestionsList = [
    { id: 1, suggestion: 'Price of Ethereum' },
    { id: 2, suggestion: 'Oculus Quest 2 specs' },
    { id: 3, suggestion: 'Tesla Share Price' },
    { id: 4, suggestion: 'Price of Ethereum today' },
    { id: 5, suggestion: 'Latest trends in AI' },
    { id: 6, suggestion: 'Latest trends in ML' },
]

function GoogleSearch() {
    const [initialSuggestionList, setInitialSuggestionList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setInitialSuggestionList(suggestionsList);
        setFilteredList(suggestionsList);
    }, [])

    const handleSearchInput = (e) => {
        const userInput = e.target.value;
        setSearchValue(userInput);
        const filteredItems = initialSuggestionList.filter(eachItem =>
            eachItem.suggestion.toLowerCase().includes(userInput.toLowerCase())
        )
        setFilteredList(filteredItems)
    }

    const handleSuggestion = (suggestion) => {
        setSearchValue(suggestion)
        setFilteredList([])
    }

    return (
        <div className={`${styles.appBg}`}>
            <div className={`${styles.appContainer}`}>
                <div className={`${styles.imageWrapper}`}>
                    <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" alt="google logo" />
                </div>
                <div className={`${styles.googleSearchBox}`}>
                    <div className={`${styles.searchInput}`}>
                        <div className={`${styles.searchIcon}`}>
                            <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="search icon" />
                        </div>
                        <input type="search" placeholder='Search Google' value={searchValue} onChange={handleSearchInput} />
                    </div>
                    {
                        filteredList.length === 0 ? null :
                            <ul className={`${styles.searchList}`}>
                                {
                                    filteredList.map(listItem =>
                                        <SuggestionItem key={listItem.id} suggestions={listItem} pushSuggestion={handleSuggestion}/>
                                    )
                                }
                            </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default GoogleSearch