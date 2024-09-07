import React from 'react';
import styles from './SuggestionItem.module.scss';

function SuggestionItem({ suggestions, pushSuggestion }) {
  const handleValue = () => {
    pushSuggestion(suggestions.suggestion);
  }
  return (
    <li>
      <div className={`${styles.suggestionEl}`}>
        <p>
          {suggestions.suggestion}
        </p>
        <div className={`${styles.imageWrapper}`} onClick={handleValue}>
          <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt="arrow" />
        </div>
      </div>
    </li>
  )
}

export default SuggestionItem