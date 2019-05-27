import React from 'react';
import SearchBox from './SearchBox';

const Topbar = () => {
    return(
        <section className="topbar">
            <div className="topbar__wrapper">
                <SearchBox />
            </div>
        </section>
    )
}

export default Topbar;