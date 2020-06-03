import React, { Component } from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import Creaturelist from '../CreatureList/CreatureList';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Creaturelist />
      </>
    );
  }
}

export default App;
