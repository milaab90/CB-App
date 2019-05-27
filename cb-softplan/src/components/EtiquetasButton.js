import React from 'react';

const EtiquetasButton = (props) => {
    return(
        <button className={props.activeClass}>
            <div className="button__label">
                <span className={props.buttonClass}>{props.buttonIcon}</span>
                <span className="button__label" onClick={props.onClick}>{props.buttonText}</span>
                <input className="labelInput" type="text" />
            </div>
            <span className="button__total">{props.buttonTotal}</span>
        </button>
    )
}

export default EtiquetasButton;