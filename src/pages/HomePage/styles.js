import styled from "styled-components";

export const BackgroundBottom = styled.div`
  background-image: url('https://i.ibb.co/0cNc8P7/pokeball.png');
  background-repeat: no-repeat;
  background-position: right bottom;
  width: 100%;
  background-size: 400px;
  position: relative;
` 

export const BackgroundTop = styled.div`
  background-image: url('https://i.ibb.co/0cNc8P7/pokeball.png');
  background-repeat: no-repeat;
  background-position: left top;
  width: 100%;
  background-size: 400px;
  position: relative;
` 

export const HomeBox =  styled.div`
  display: flexbox;
  justify-content: center;
  min-height : 500px;
` 

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: center;
`;

export const PokePic = styled.img`
  align-content: center;
  display: block;
  margin: auto;
  padding-bottom: 6px;
`;

export const PokeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  align-items: center;
`;

export const ButtonsCard = styled.div`
  display: flex;
  flex-direction: inline;
  align-items: center;
  padding: 8px;
  justify-content: space-around;
  padding-bottom: 12px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
