import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllPokemons } from './domain/services/getAllPokemons';

/* TODO:

NOTA: Desarrollar la aplicación teniendo en cuenta la mantenibilidad y crecimiento de la aplicación

1.- Se debe mostrar el listado de Pokemons (nombre) utilizando el API https://pokeapi.co/api/v2/pokemon
2.- Se debe mostrar el detalle de cada Pokemon del listando al clickar en él, utilizando el API 
  https://pokeapi.co/api/v2/pokemon/{name} (nombre, altura, peso, imagen, tipos)

*/

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);

  const mapPokemonNames = (data: any) => {
    return data.map((el: any) => el.name);
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

  return <ul>
    {pokemons.map(pokemon => <li key={pokemon}> {pokemon} </li>)}
  </ul>
};
