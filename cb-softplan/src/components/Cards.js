import React from 'react';
import PlusIcon from './icons/PlusIcon';
import FolderIcon from './icons/FolderIcon';
import TagIcon from './icons/TagIcon';

const Cards = (props) => {
    return(
        <div className="cards">
            <div className="cards__wrapper">
                <div className="cards__info">
                    <div className="info__name">
                        <PlusIcon />
                        <p>Felipe Genuino</p>
                    </div>
                    <div className="info__procedure">
                        <p>Procedimento Comum - <span>Requerimento de Reintegração de Posse</span></p>
                    </div>
                    <div className="info__extra">
                        <p className="extra__label">27/12/2018</p>
                        <p className="extra__badge">User Interface</p>
                        <p className="extra__badge extra__badge--red">Estatuto Idoso</p>
                    </div>
                </div>
                <span className="cards__spacer"></span>
                <div className="cards__folder">
                    <FolderIcon />
                    <p>Abrir pasta</p>
                </div>
                <span className="cards__spacer"></span>
                <div className="cards__tag">
                    <TagIcon />
                </div>
            </div>
        </div>
    )
}

export default Cards;