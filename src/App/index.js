import React, { Component } from 'react';
import './style.css';
import data from '../Data';
import Column from '../Column';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
  }
  render() {
    return (
      <div>
        <div className="Title">  
          <text>Avengers Infinity War</text>
        </div>
          {this.state.columnsort.map(columnId => {
            const column = this.state.columns[columnId];
            const heroes = column.heroId.map(heroId => this.state.heroes[heroId]);
            return <Column key={Column.id} column={column} heroes={heroes} />;
          })}
      </div>
    );
  }
}

export default App;
