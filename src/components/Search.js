import React from 'react';
import './search.css';

const SearchBar = ({ onSearchChange }) => {
    const handleInputChange = (event) => {
        onSearchChange(event.target.value); 
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
