import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
  render() {
    const { pokemonList } = this.props;

    return (
      <>
        <h1>Pokédex</h1>
        <ul>
          { pokemonList.map((pokemon) => (
            <Pokemon key={ pokemon.id } pokemon={ pokemon } />
          ))}
        </ul>
      </>
    );
  }
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};
