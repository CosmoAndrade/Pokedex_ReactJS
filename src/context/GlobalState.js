import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";
import axios from "axios";

export default function GlobalState(props) {
  const [pokedex, setPokedex] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    getPokemonNames();
  }, []);

  useEffect(() => {
    const newList = [];
    pokemonNames.forEach((item) => {
      axios
        .get(item.url)
        .then((res) => {
          newList.push(res.data);
          if (newList.length === 20) {
            const orderList = newList.sort((a, b) => {
              return a.id - b.id;
            });
            setPokemons(orderList);
          }
        })
        .catch((err) => {
        });
    });
  }, [pokemonNames]);

  const getPokemonNames = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setPokemonNames(res.data.results);
      })
      .catch((err) => {
      });
  };

  const data = { pokemons, setPokemons, pokedex, setPokedex };

  return (
    <div>
      <GlobalContext.Provider
        value={{ pokemons, setPokemons, pokedex, setPokedex }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
}
