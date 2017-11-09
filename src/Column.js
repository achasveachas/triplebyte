import React, { Component } from 'react';
import Card from './Card.js'

class Column extends Component {




    render() {
        const renderedCards = this.props.cards.map(card => <Card item={card.item} />)
        
        return (
            <div className="column">
                <div className="name" id={this.props.name}>
                    {this.props.name}
                </div>
                {renderedCards}
            </div>
        )
    }


}
export default Column;