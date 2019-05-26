import React from 'react';
import CardsFolder from './CardsFolder';
import CardsTag from './CardsTag';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';

const API = 'https://raw.githubusercontent.com/milaab90/CB-App/Development/cb-softplan/public/data.json';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          cards: []
        };
      }
    componentDidMount() {
        fetch(API)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                cards: result.cards
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render() {
        const { error, isLoaded, cards} = this.state;
        if (error) {
            return <div>Aconteceu um erro! Tente novamente mais tarde!</div>;
          } else if (!isLoaded) {
            return <div className="loading"><p>Carregando...</p></div>;
          }
          else {
            return(
                <div>
                    {cards.slice(0, 5).map((c, i) => {
                        return (
                            <div className="cards">
                                <div className="cards__wrapper">
                                    <div className="cards__info" key={i}>
                                        <div className="info__name">
                                            <PlusIcon className="green"/>
                                            <p>{c.partes.ativa.name}</p>
                                            <div className="name__corp">
                                                <MinusIcon className="red"/>
                                                <p>Unimed</p>
                                            </div>
                                        </div>
                                        <div className="info__procedure">
                                            <p>{c.classe} - <span>{c.competencia}</span></p>
                                        </div>
                                        <div className="info__extra">
                                            <p className="extra__label">{c.numero}</p>
                                            {c.tarja.slice(0,1).map((m, idx) =>
                                                <div className="badge__wrapper" key={m.id}>
                                                    <p className="extra__badge">User Interface</p>
                                                    <p className="extra__badge extra__badge--red">{m.name}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div> 
                                    <span className="cards__spacer"></span>
                                    <CardsFolder />
                                    <span className="cards__spacer"></span>
                                    <CardsTag />
                                </div>
                            </div>
                        ) 
                    })}
                </div>
            )
          }
    }
}

export default Cards;