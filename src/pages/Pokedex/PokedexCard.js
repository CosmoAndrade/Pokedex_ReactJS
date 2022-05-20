import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import PokemonInfo from "../../components/PokemonInfo";
import { HomeContainer, CapturePokeMessage } from "./styles";

const PokedexCard = () => {
  const { pokedex } = useContext(GlobalContext);

  return (
    <>
      <HomeContainer>
        {pokedex.length === 0 ? <CapturePokeMessage>Pokédex vazia. :( <br />Capture Pokémons!</CapturePokeMessage> :
          pokedex.map((poke) => {
            return <PokemonInfo isPokedex key={poke.name} poke={poke} />;
          })}
      </HomeContainer>
    </>
  );
};

export default PokedexCard;
