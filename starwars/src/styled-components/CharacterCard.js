import styled, { keyframes } from "styled-components";

export const cardOpacity = keyframes`

  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }

`

export const CharacterCard = styled.div`
  border: 1px solid black;
  background-color: palegoldenrod;
  // display: flex;
  // flex-wrap: wrap;
  width: 25%;
  // padding: 3%;
  margin: 3%;
  animation: ${cardOpacity} 1.5s ease-in 0s 1;
`;
