import React from 'react';
import EtiquetasButton from './EtiquetasButton';
import TagIcon from './icons/TagIcon';

class SidebarEtiquetas extends React.Component {
    render() {
        return(
            <div className="sidebar__etiquetas">
                <p className="sidebar__label">Etiquetas</p>
                <EtiquetasButton 
                buttonClass={"button__color button__color--orange"}
                buttonText={"Energia Elétrica"}
                buttonTotal={"0"} />

                <EtiquetasButton 
                buttonClass={"button__icon"}
                buttonIcon={<TagIcon />}
                buttonText={"Criar Etiqueta"} />
            </div>
        )
    }
}

export default SidebarEtiquetas;