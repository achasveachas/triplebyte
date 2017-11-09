import React, { Component } from 'react';
import './App.css';
import Column from './Column'

class App extends Component {

  constructor(props) {
    
    super(props)
    this.state = {
      columns: [
        {
          name: "Winnie",
          cards: [{item: "Buy Eggs"}, {item: "Return Books"}]
        },
        {
          name: "Bob",
          cards: [{item: "Buy Eggs"}, {item: "Return Books"}]
        },
        {
          name: "Thomas",
          cards: [{item: "Buy Eggs"}, {item: "Return Books"}]
        },
        {
          name: "George",
          cards: [{item: "Buy Eggs"}, {item: "Return Books"}]
        }
      ]
    }
  }


  render() {

    const renderColumns = this.state.columns.map(column => <Column name={column.name} cards={column.cards} />)
    
    return (
        <div className="App">
          {renderColumns}
      </div>

    );
  }
}

export default App;
