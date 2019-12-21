import React, { Component } from 'react';

import Card from '../Card/Card';

import './List.css';

export default class List extends Component {
  static defaultProps = {
    header: '',
    cards: []
  };

  render() {
    const { cards } = this.props;
    const cardComponents = cards.map(c => <Card key={c.id} {...c} />);

    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">{cardComponents}</div>
      </section>
    );
  }
}