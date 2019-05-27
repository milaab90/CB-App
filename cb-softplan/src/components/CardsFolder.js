import React from 'react';
import FolderIcon from './icons/FolderIcon';

const CardsFolder = (props) => {
    return(
        <div className="cards__folder">
            <FolderIcon />
            <p>Abrir pasta</p>
        </div>
    )
}

export default CardsFolder;