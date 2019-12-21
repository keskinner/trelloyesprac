import React, { Component } from "react";

import './Card.css';

export default class Card extends Component {
  static defaultProps = {
    title: '',
    content: ''
  }
  render(){
    return (
      <div className="Card">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    )
  }
}