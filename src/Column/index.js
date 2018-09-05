import React from 'react';
import Hero from '../Hero';
import './style.css';

export default class Column extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="Title">{this.props.column.title}</div>
        <div className="Hero-List">
          {this.props.heroes.map(hero => <Hero key={hero.id} hero={hero} />)}
        </div>
      </div>
    );
  }
}