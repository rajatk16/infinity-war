import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: whitesmoke;
`;

export default class Hero extends React.Component {
  render() {
    return (
      <Container>
        {this.props.hero.name}
      </Container>
    );
  }
}
