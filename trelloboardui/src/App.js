import React, { Component } from 'react';
import './App.css';
import BoardList from './components/BoardList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Trello Board</h1>
        </header>
        <div className={'Main-component'}>
            <BoardList/>
        </div>
      </div>
    );
  }
}

export default App;
