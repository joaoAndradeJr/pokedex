import React from 'react';
import Pokedex from './components/Pokedex';
import pokemonList from './data';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Pokedex pokemonList={ pokemonList } />
    );
  }
}

export default App;
