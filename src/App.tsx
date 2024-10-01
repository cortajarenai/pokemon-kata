import React, { useState, useEffect } from 'react';
import { getAllPokemons, getPokemonDetails } from './domain/services';

/* TODO:

NOTA: Desarrollar la aplicación teniendo en cuenta la mantenibilidad y crecimiento de la aplicación

1.- Se debe mostrar el listado de Pokemons (nombre) utilizando el API https://pokeapi.co/api/v2/pokemon
2.- Se debe mostrar el detalle de cada Pokemon del listando al clickar en él, utilizando el API 
  https://pokeapi.co/api/v2/pokemon/{name} (nombre, altura, peso, imagen, tipos)

*/

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>();
  const [pokemonDetails, setPokemonDetails] = useState<any>();

  const mapPokemonNames = (data: any) => {
    return data.map((el: any) => el.name);
  }

  const mapPokemonDetails = (data: any) => {
    return {
      name: data.name,
      height: data.height,
      weight: data.weight,
      image: data.sprites.back_default,
      types: data.types.map((type: any) => type.type.name)
    }
  }

  useEffect(() => {
    const onLoad = async () => {
      try {
        const { results } = await getAllPokemons()
        setPokemons(mapPokemonNames(results))
      } catch (e) {
        console.error(e);
      }
    }
    onLoad()
  }, [])

  useEffect(() => {
    if (selectedPokemon) {
      const handlePokemonDetails = async () => {
        try {
          const data = await getPokemonDetails(selectedPokemon)
          setPokemonDetails(mapPokemonDetails(data))
        } catch (e) {
          console.error(e)
        }
      }
      handlePokemonDetails()
    }

  }, [selectedPokemon])

  return <>
    <ul>
      {pokemons.map(pokemon => <li key={pokemon} onClick={() => setSelectedPokemon(pokemon)}> {pokemon} </li>)}
    </ul>
    {pokemonDetails && (
      <div>
        <h1>{pokemonDetails.name}</h1>
        <p>{pokemonDetails.height}</p>
        <p>{pokemonDetails.weight}</p>
        <img src={pokemonDetails.image} alt={pokemonDetails.name} />
        {pokemonDetails.types.map((type: any) => <p key={type}> {type} </p>)}
      </div>
    )}
  </>
};
