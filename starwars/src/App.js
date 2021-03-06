import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import { Container } from './styled-components/Container';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => {
        // console.log(res);
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars React</h1>
      <Container>
        {characters.map((characterData, index) => (
          <Character
            key={index}
            name={characterData.name}
            eyes={characterData.eye_color}
            hair={characterData.hair_color}
            height={characterData.height}
            // homeworld={characterData.homeworld}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
