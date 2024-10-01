import { render, screen } from '@testing-library/react';
import { App } from './App';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

const expectedPokemon = "pikachu"
const expectedPokemonDetails = {
  name: 'pikachu',
  height: 45,
  weight: 60,
  sprites: { back_default: 'https://test.com' },
  types: [{ type: { name: 'electric' } }]
}

describe("App", () => {
  it("Should render a list of pokemons", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(Promise.resolve({ data: { results: [{ name: expectedPokemon }] } }))
    render(<App />);
    const pokemon = await screen.findByText(expectedPokemon)
    expect(pokemon).toBeInTheDocument()
  });
  it("Should render pokemons details after clicking on its name", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(Promise.resolve({ data: { results: [{ name: expectedPokemon }] } }))
    jest.spyOn(axios, "get").mockResolvedValueOnce(Promise.resolve({ data: expectedPokemonDetails }))
    render(<App />);
    const pokemon = await screen.findByText(expectedPokemon)
    userEvent.click(pokemon)
    expect(await screen.findByText(expectedPokemonDetails.weight)).toBeInTheDocument()
    expect(await screen.findByText(expectedPokemonDetails.weight)).toBeInTheDocument()
  })
});
