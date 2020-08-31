import React from 'react';
import { CharacterCard } from '../styled-components/CharacterCard';

const Character = (props) => {
  const { name, eyes, hair, height, homeworld } = props;
  return (
    <CharacterCard>
      <h3>This is {name}</h3>
      <p>Eye Color: {eyes}</p>
      <p>Hair Color: {hair}</p>
      <p>Height: {height}</p>
      {/* <p>Homeworld: {homeworld}</p> */}
    </CharacterCard>
  )
}

export default Character;
