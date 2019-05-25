import React from 'react';
import CardsInfo from './CardsInfo';
import CardsFolder from './CardsFolder';
import CardsTag from './CardsTag';

class Cards extends React.Component {
    render() {
        return(
            <div className="cards">
                <div className="cards__wrapper">
                    <CardsInfo />
                    <span className="cards__spacer"></span>
                    <CardsFolder />
                    <span className="cards__spacer"></span>
                    <CardsTag />
                </div>
            </div>
        )
    }
}

export default Cards;