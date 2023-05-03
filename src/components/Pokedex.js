import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pokedex extends Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <>
        <h1>Pokédex</h1>
        <ul></ul>
      </>
    );
  }
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
