import React from 'react';
import SearchIcon from './icons/SearchIcon';
import SearchInput from './SearchInput';

const SearchBox = () => {
    return(
        <div className="topbar__searchBox">
            <div className="searchBox__icon">
                <SearchIcon />
            </div>
            <div className="searchBox__input">
                <SearchInput />
            </div>
            
        </div>
    )
}

export default SearchBox;