import { BASE_URL } from "../constants/urls";
import { getPokemonDetails } from "./getPokemonDetails";
import axios from 'axios';

const expectedPokemon = "Pikachu";

describe('getPokemonDetails', () => {
  it("should call the details endpoint with the correct pokemon", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(Promise.resolve({}));
    await getPokemonDetails(expectedPokemon);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/${expectedPokemon}`)
  })
})