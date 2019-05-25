import React from 'react';

const EtiquetasButton = (props) => {
    return(
        <button className="etiquetas__button">
            <div className="button__label">
                <span className={props.buttonClass}>{props.buttonIcon}</span>
                <span className="button__label">{props.buttonText}</span>
            </div>
            <span className="button__total">{props.buttonTotal}</span>
        </button>
    )
}

export default EtiquetasButton;