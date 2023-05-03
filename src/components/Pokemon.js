import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, image,
      averageWeight: { value, measurementUnit } },
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

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
}.isRequired;
