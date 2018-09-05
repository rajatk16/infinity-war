import React, { Component } from 'react';
import data from '../Data';
import Column from '../Column';
import styled from 'styled-components';

const Title = styled.div`
  text-align: center;
  margin-top: 5px;
  padding: 10px;
`;

class App extends Component {
  this.state = data;
  render() {
    return (
      <div>
        <Title>  
          <text>Avengers Infinity War</text>
        <Title>
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
