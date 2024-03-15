import { useState } from "react";

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState(null);
  const [pokemon, setPokemon] = useState({});

  const hangleInputOnChange = (event) => {
    setPokemonName(event.target.value);
  };

  const fetchForPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const parsedResponse = await response.json();
      setPokemon(parsedResponse);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Pokemon API project!</h1>
      <input type="text" onChange={hangleInputOnChange} value={pokemonName} />
      <button onClick={fetchForPokemon}>Click me to search for Pokemon</button>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt=""
      />
    </div>
  );
};

export default Pokemon;
