import React from 'react';

const Character = (props) => {
  const { name, eyes, hair, height, homeworld } = props;
  return (
    <div>
      <h3>This is {name}</h3>
      <p>Eye Color: {eyes}</p>
      <p>Hair Color: {hair}</p>
      <p>Height: {height}</p>
      {/* <p>Homeworld: {homeworld}</p> */}
    </div>
  )
}

export default Character;
