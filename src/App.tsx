import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* TODO:

NOTA: Desarrollar la aplicación teniendo en cuenta la mantenibilidad y crecimiento de la aplicación

1.- Se debe mostrar el listado de Pokemons (nombre) utilizando el API https://pokeapi.co/api/v2/pokemon
2.- Se debe mostrar el detalle de cada Pokemon del listando al clickar en él, utilizando el API 
  https://pokeapi.co/api/v2/pokemon/{name} (nombre, altura, peso, imagen, tipos)

*/

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(({ data }) => {
        const mappedResult = data.results.map((el: any) => el.name)
        setPokemons(mappedResult);
      }).catch((e) => console.error(e))
  }, [])

  return <>
    <ul>
      {pokemons.map(pokemon => <li> {pokemon} </li>)}
    </ul>
  </>;
};
