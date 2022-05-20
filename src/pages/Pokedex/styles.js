import styled from "styled-components";

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


export const CapturePokeMessage = styled.div`
    display: flex;
    justify-content: center;
    width: 600px;
    height: 500px;
    align-content: center;
    margin-left: 28vw;
    margin-top: 25vh;
    font-size: 30px;
    text-align: center;
` 