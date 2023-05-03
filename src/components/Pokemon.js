import React, { Component } from 'react';

export default class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, image,
      averageWeight: { value, measurementUnit } }
    } = this.props;

    return (
      <li>
        <h4>{ name }</h4>
        <h4>{ type }</h4>
        <h4>{ `${value} ${measurementUnit}` }</h4>
        <img src={ image } alt={ name } />
      </li>
    );
  }
}
