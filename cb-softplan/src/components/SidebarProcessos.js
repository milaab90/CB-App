import React from 'react';
import BookmarkIcon from './icons/BookmarkIcon';

const SidebarProcessos = () => {
    return(
        <div className="sidebar__processos">
            <p className="sidebar__label">Processos</p>
            <button className="processos__button active">
                <span className="button__label">
                    <BookmarkIcon />
                    Todos Processos
                </span>
                <span className="button__total">5</span>
            </button>
        </div>
    )
}

export default SidebarProcessos;