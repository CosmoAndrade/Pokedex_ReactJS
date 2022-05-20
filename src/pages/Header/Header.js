// import * as React from "react";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { HeaderContainer, HeaderBox, ButtonStyle, ButtonsCard, CountCircle } from "./styles";
import Button from "@mui/material/Button";
import { GlobalContext } from "../../context/GlobalContext";

  const Header = () => {

      const { pokedex, setPokedex, pokemons, setPokemons } = useContext(
        GlobalContext
      );
   
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToPokedex = () => {
    history.push("/pokedex");
  };

  return (
    <HeaderContainer>
    <HeaderBox>
      <ButtonsCard>
      <ButtonStyle onClick={goToHome}>HOME</ButtonStyle><p>|</p> 
      <ButtonStyle onClick={goToPokedex}>POKEDEX {pokedex.length > 0 ? <CountCircle>{pokedex.length}</CountCircle> : <></>}</ButtonStyle>
      </ButtonsCard>
    <img src="https://img.icons8.com/ios/452/pokeball--v2.png" alt="Pokebola"/>
    <div>
    </div>
    </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
