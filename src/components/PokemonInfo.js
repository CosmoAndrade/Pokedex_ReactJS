import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "../context/GlobalContext";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  PokePic,
  PokeInfoContainer,
  ButtonsCard,
  ButtonDetailsStyle,
  DivImage,
  ButtonStyle,
  DivTypes
} from "./styles";

const PokemonInfo = (props) => {
  const { pokedex, setPokedex, pokemons, setPokemons } = useContext(
    GlobalContext
  );

  const history = useHistory();
  const goToDetailsPage = (name) => {
    history.push(`/details/${name}`);
  };

  const addToPokedex = () => {
    const pokeIndex = pokemons.findIndex(
      (item) => item.name === props.poke.name
    );

    const newPokemonsList = [...pokemons];
    newPokemonsList.splice(pokeIndex, 1);
    const newPokedexList = [...pokedex, props.poke];

    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };

  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex(
      (item) => item.name === props.poke.name
    );

    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const newPokemonsList = [...pokemons, props.poke];

    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };

  const pokeType =
    props.poke.types &&
    props.poke.types.map((type) => {
      return <p key={props.poke.id}>{type.type.name.toUpperCase()}</p>;
    });

  return (
    <div>
      <Card sx={{ width: 220 }}>
        <PokeInfoContainer>
          <DivImage>
            <PokePic
              src={props.poke.sprites && props.poke.sprites.front_default}
              alt={props.poke.name}
            />
          </DivImage>
          <Typography sx={{ fontSize: 12 }} color="text.secondary">
            #{props.poke.id}
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
            {props.poke.name.toUpperCase()}
          </Typography>
          <DivTypes>{pokeType}</DivTypes>
        </PokeInfoContainer>
        <ButtonsCard>
          <ButtonStyle
            onClick={props.isPokedex ? removeFromPokedex : addToPokedex}
          >
            {props.isPokedex ? "REMOVER" : "CAPTURAR"}
          </ButtonStyle>
          <ButtonDetailsStyle onClick={() => goToDetailsPage(props.poke.name)}>
            DETALHES
          </ButtonDetailsStyle>
        </ButtonsCard>
      </Card>
    </div>
  );
};

export default PokemonInfo;
