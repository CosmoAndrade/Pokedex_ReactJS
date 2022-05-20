import React from "react";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";

import {
  DivDetails,
  DivImage,
  DivCardDetails,
  NumPoke,
  NamePoke,
  DivTypes
} from "./styled";
import {
  DivHp,
  DivAtk,
  DivDef,
  DivSpA,
  DivSpD,
  DivSPD,
  DivTot,
  DivValuesStats
} from "./styled";
import { DivHeightWeight, DivValues, DivStats, DivMoves } from "./styled";

const DetailsPage = () => {
  const params = useParams();

  const pokemon = useRequestData(
    `https://pokeapi.co/api/v2/pokemon/${params.nome}`,
    {}
  );

  const pokeType =
    pokemon.types &&
    pokemon.types.map((type) => {
      return <p key={pokemon.id}>{type.type.name.toUpperCase()}</p>;
    });

  const pokeStats =
    pokemon.stats &&
    pokemon.stats.map((stat) => {
      return <p key={pokemon.id}>{stat.base_stat}</p>;
    });

  const pokeMoves =
    pokemon.moves &&
    pokemon.moves.slice(0, 3).map((move) => {
      return <p key={pokemon.id}>{move.move.name}</p>;
    });
  return (
    <DivDetails>
      <DivImage>
        {pokemon.sprites && <img src={pokemon.sprites.front_default} />}
      </DivImage>
      <DivCardDetails>
        <NumPoke>#{pokemon.id}</NumPoke>
        <NamePoke>{pokemon.name}</NamePoke>
        <DivTypes>{pokeType}</DivTypes>
        <DivHeightWeight>
          <p>HEIGHT</p>
          <p>WEIGTH</p>
        </DivHeightWeight>
        <DivValues>
          <p>{pokemon.height}</p>
          <p>{pokemon.weight}</p>
        </DivValues>
        <h4>S T A T S</h4>
        <DivStats>
          <DivHp>HP</DivHp>
          <DivAtk>ATK</DivAtk>
          <DivDef>DEF</DivDef>
          <DivSpA>SpA</DivSpA>
          <DivSpD>SpD</DivSpD>
          <DivSPD>SPD</DivSPD>
          {/* <DivTot>TOT</DivTot> */}
        </DivStats>
        <DivValuesStats>
          {pokeStats}
          {/* <p>20</p> */}
        </DivValuesStats>
        <DivMoves>
          <h4>M O V E S</h4>
          <h2> | </h2>
          <div>{pokeMoves}</div>
        </DivMoves>
      </DivCardDetails>
    </DivDetails>
  );
};

export default DetailsPage;
