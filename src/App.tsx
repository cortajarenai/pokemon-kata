import React, { useState, useEffect } from 'react';
import { getAllPokemons, getPokemonDetails } from './domain/services';
import { PokemonDetails } from './domain/components/PokemonDetails/PokemonDetails';
import { IPokemonDetails } from './domain/interfaces/IPokemonDetails';
import { mapPokemonDetails, mapPokemonNames } from './domain/mappers/pokemonMappers';

/* TODO:

NOTA: Desarrollar la aplicación teniendo en cuenta la mantenibilidad y crecimiento de la aplicación

1.- Se debe mostrar el listado de Pokemons (nombre) utilizando el API https://pokeapi.co/api/v2/pokemon
2.- Se debe mostrar el detalle de cada Pokemon del listando al clickar en él, utilizando el API 
  https://pokeapi.co/api/v2/pokemon/{name} (nombre, altura, peso, imagen, tipos)

*/

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>();
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails>();

  const handleClick = (pokemon: string) => {
    setSelectedPokemon(pokemon)
  }

  useEffect(() => {
    const onLoad = async () => {
      try {
        const data = await getAllPokemons()
        if (data) {
          setPokemons(mapPokemonNames(data.results))
        }
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
          if (data) {
            setPokemonDetails(mapPokemonDetails(data))
          }
        } catch (e) {
          console.error(e)
        }
      }
      handlePokemonDetails()
    }

  }, [selectedPokemon])

  return <div className='app'>
    <ul>
      {pokemons.map(pokemon => {
        return <li key={pokemon} >
          <button type='button' onClick={() => handleClick(pokemon)}> {pokemon} </button>
        </li>
      })}
    </ul>
    {pokemonDetails && <PokemonDetails pokemonDetails={pokemonDetails} />}
  </div>
};
