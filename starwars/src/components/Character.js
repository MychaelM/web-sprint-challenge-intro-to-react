import React from 'react';

const Character = (props) => {
  const { name } = props;
  return (
    <div>
      <h3>This is {name}</h3>
    </div>
  )
}

export default Character;
