import styled from "styled-components";

export const DivDetails = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;
export const DivImage = styled.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px;
  border: 2px solid #cecece;
  background-color: white;
  border-radius: 360px;
  height: 22vh;
  max-height: 22vh;
  max-width: 10vw;
  width: 10vw;
  position: absolute;
  img {
    object-fit: fill;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    border-radius: 360px;
  }
`;
export const DivCardDetails = styled.div`
  background-color: #ffff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  height: 80vh;
  width: 40vw;
  margin: 90px 10px 8px 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NumPoke = styled.p`
  color: #b7b7b7;
  font-size: 3.2vh;
  margin: 0;
  margin-top: 22px;
`;
export const NamePoke = styled.p`
  font-size: 5vh;
  margin: 4px 0;
  font-weight: 600;
`;
export const DivTypes = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 25%;

  p {
    border-radius: 8px;
    padding: 4px;
    margin: 2px 0;
    background-color: #fade4d;
    color: #ea3434;
    padding: 6px;
    font-size: 10px;
    font-weight: 600;
  }
`;
export const DivHeightWeight = styled.div`
  display: flex;
  justify-content: space-around;
  width: 28%;

  p {
    font-weight: 550;
    color: #ea3434;
  }
`;
export const DivValues = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  width: 28%;
  p {
    border: 1px solid gray;
    border-radius: 6px;
    padding: 8px;
    margin: 2px 0;
    margin-top: -10px;
    font-weight: 550;
  }
`;
export const DivStats = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(6, 1fr);
  font-size: 2.5vh;
  width: 75%;

  div {
    /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
    padding: 4px;
    height: 40px;
    width: 40px;
    border-radius: 300px;
    display: grid;
    place-items: center;
  }
`;
export const DivHp = styled.div`
  background-color: #ea3434;
  padding: 8px;
  font-weight: 550;
`;
export const DivAtk = styled.div`
  background-color: #faa04d;
  padding: 8px;
  font-weight: 550;
`;
export const DivDef = styled.div`
  background-color: #fade4d;
  padding: 8px;
  font-weight: 550;
`;
export const DivSpA = styled.div`
  background-color: #4dfad0;
  padding: 8px;
  font-weight: 550;
`;
export const DivSpD = styled.div`
  background-color: #a8ef95;
  padding: 8px;
  font-weight: 550;
`;
export const DivSPD = styled.div`
  background-color: #fb94a8;
  padding: 8px;
  font-weight: 550;
`;
export const DivTot = styled.div`
  background-color: #8798d5;
  padding: 8px;
  font-weight: 550;
`;
export const DivValuesStats = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(6, 1fr);
  font-size: 2.5vh;
  width: 75%;

  p {
    background-color: #e5e5e5;
    margin: 8px 0;
    height: 30px;
    width: 40px;
    border-radius: 460px;
    display: grid;
    place-items: center;
    /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
  }
`;
export const DivMoves = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 85%;
  margin-top: 8px;

  div {
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin-left: 10px;
  }
`;
