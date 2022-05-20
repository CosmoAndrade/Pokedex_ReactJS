import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
` 

export const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 72%;
    margin-top: 10px;
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 5px 5px 10px;

    img {
        width: 40px;
        height: 40px;
        align-content: center;
        margin-right: 180px;
        opacity: 50%;
        position: relative;
    }
` 

export const TabBox = styled.div`
    border: 1;
    border-radius: 4px;
    padding: 8px;
    background-color: white;
    box-shadow: 0px 1px 4px #BEBDBD;
` 

export const ButtonStyle = styled.div`
  border-radius: 5px;
  padding: 8px;
  font-size: 14px;
  color: #FA4D4D;
  cursor: pointer;
  font-weight: 600;

  .hover {
      background-color: #FA4D4D;
      color: white;
  }
` 

export const ButtonsCard = styled.div`
  display: flex;
  flex-direction: inline;
  align-items: center;
  padding: 8px;
  justify-content: space-around;
  padding-bottom: 12px;

  p {
      padding-left: 8px;
      padding-right: 8px;
      color: #E5E5E5;
  }
`;

export const CountCircle = styled.div`
        display: inline;    
        border-radius: 25px;
        padding: 4px;
        margin: 2px 0;
        background-color: #FADE4D;
        color: #EA3434;
        padding: 6px;
        font-size: 10px;
        font-weight: 600
` 