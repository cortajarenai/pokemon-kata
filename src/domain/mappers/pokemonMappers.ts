import { IPokemonDetailsApiResponse, IPokemon, IPokemonType } from "../interfaces/services";

export const mapPokemonNames = (data: IPokemon[]) => {
  return data.map((el: IPokemon) => el.name);
}

export const mapPokemonDetails = (data: IPokemonDetailsApiResponse) => {
  return {
    name: data.name,
    height: data.height,
    weight: data.weight,
    image: data.sprites.back_default,
    types: data.types.map((type: IPokemonType) => type.type.name)
  }
}