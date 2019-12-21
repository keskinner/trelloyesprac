import React, { Component } from 'react';

import List from '../List/List';

import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  render() {
    const store = this.props.store;

    const lists = store.lists.map(composeListComponent);

    function composeListComponent(listData) {
      const cardData = listData.cardIds.map(id =>
        Object.assign({ id }, store.allCards[id])
      );

      return (
        <List key={listData.id} header={listData.header} cards={cardData} />
      );
    }

    return (
      <main className="App">
        <header className="App-header">
          <h1>TrelloYes!</h1>
        </header>
        <div className="App-list">{lists}</div>
      </main>
    );
  }
}

export default App;
