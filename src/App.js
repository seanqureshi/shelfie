import React, { Component } from 'react';
import './App.css';
import ShelfA from './components/ShelfA/ShelfA';
import ShelfB from './components/ShelfB/ShelfB';
import ShelfC from './components/ShelfC/ShelfC';
import ShelfD from './components/ShelfD/ShelfD';




class App extends Component {
  render() {
    return (
      <div className="App">
        <ShelfA />
        <ShelfB />
        <ShelfC />
        <ShelfD />
        
      </div>
    );
  }
}

export default App;
