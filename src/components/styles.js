import styled from "styled-components";

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

export const DivImage = styled.div`
    /* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; */
    border: 1px solid #E5E5E5;
    border-radius: 360px;
    height: 18vh;
    max-height: 22vh;
    max-width: 10vw;
    width: 8vw;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    img {
        object-fit: fill;
        max-height: 100%;
        width: 90%;
        max-width: 100%;
        border-radius: 360px;
    }
`

export const DivTypes = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 4px;
    width: 130px;
    align-items: center;

    p {
        border-radius: 8px;
        padding: 4px;
        margin: 2px 0;
        background-color: #FADE4D;
        color: #EA3434;
        padding: 6px;
        font-size: 10px;
        font-weight: 600
    }
`

export const ButtonStyle = styled.div`
  border-radius: 5px;
  padding: 8px;
  font-size: 12px;
  background-color: #FA4D4D;
  color: white;
  cursor: pointer;
` 

export const ButtonDetailsStyle = styled.div`
  border: 1px solid #FA4D4D;
  border-radius: 5px;
  padding: 8px;
  font-size: 12px;
  color: #FA4D4D;
  cursor: pointer;
` 