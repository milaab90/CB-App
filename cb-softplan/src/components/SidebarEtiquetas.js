import React from 'react';
import EtiquetasButton from './EtiquetasButton';
import TagIcon from './icons/TagIcon';

class SidebarEtiquetas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.createTag = this.createTag.bind(this);
    }
    createTag() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        return(
            <div className="sidebar__etiquetas">
                <p className="sidebar__label">Etiquetas</p>
                <EtiquetasButton 
                activeClass={"etiquetas__button"}
                buttonClass={"button__color button__color--orange"}
                buttonText={"Energia Elétrica"}
                buttonTotal={"0"} />

                <EtiquetasButton 
                activeClass={this.state.active ? 'etiquetas__button active' : 'etiquetas__button'}
                onClick={this.createTag}
                buttonClass={"button__icon"}
                buttonIcon={<TagIcon />}
                buttonText={"Criar Etiqueta"} />
            </div>
        )
    }
}

export default SidebarEtiquetas;