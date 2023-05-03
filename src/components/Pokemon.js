import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, image,
      averageWeight: { value, measurementUnit } },
    } = this.props;

    return (
      <li className="li">
        <h4 className="name font">{ name }</h4>
        <img src={ image } alt={ name } />
        <h4 className="font">{ `${value} ${measurementUnit}` }</h4>
        <h4 className="font">{ type }</h4>
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
