import React from 'react';
import './style.css';

export default class Hero extends React.Component {
  render() {
    return (
      <div className="Container">
        {this.props.hero.name}
      </div>
    );
  }
}