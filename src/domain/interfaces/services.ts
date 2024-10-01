export interface IPokemon {
  name: string;
  image: string;
}

export interface IPokemonsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[]
}

export interface IPokemonType {
  type: { name: string }
}

export interface IPokemonDetailsApiResponse {
  name: string;
  height: number;
  weight: number;
  sprites: {
    back_default: string;
  };
  types: IPokemonType[]
}

