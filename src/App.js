import React, { Component } from 'react';
import './App.css';
import { InstantSearch } from 'react-instantsearch/dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to IKEA with React-InstantSearch</h1>
        </header>
        <InstantSearch
          appId="ZSL0RJTCOE"
          apiKey="3f46604e5ceef1479ae2ca58ae4f0a71"
          indexName="ikea"
        >

        </InstantSearch>
      </div>
    );
  }
}

export default App;
