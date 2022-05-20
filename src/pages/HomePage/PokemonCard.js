import React, { useContext } from "react";
import PokemonInfo from "../../components/PokemonInfo";
import { HomeContainer } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";

const PokemonCard = (props) => {
  const { pokemons } = useContext(GlobalContext);

  return (
    <HomeContainer>
      {pokemons &&
        pokemons.map((poke) => <PokemonInfo poke={poke} key={poke.name} />)}
    </HomeContainer>
  );
};

export default PokemonCard;
