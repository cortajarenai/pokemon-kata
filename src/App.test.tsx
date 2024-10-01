import { render, screen } from '@testing-library/react';
import { App } from './App';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { mockPokemon, mockPokemonDetails } from './domain/mocks/pokemons';

describe("App", () => {
  it("Should render a list of pokemons", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(Promise.resolve({ data: { results: [{ name: mockPokemon }] } }))
    render(<App />);
    const pokemon = await screen.findByText(mockPokemon)
    expect(pokemon).toBeInTheDocument()
  });
  it("Should render pokemons details after clicking on its name", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(Promise.resolve({ data: { results: [{ name: mockPokemon }] } }))
    jest.spyOn(axios, "get").mockResolvedValueOnce(Promise.resolve({ data: mockPokemonDetails }))
    render(<App />);
    const pokemon = await screen.findByText(mockPokemon)
    userEvent.click(pokemon)
    expect(await screen.findByText(`Weight: ${mockPokemonDetails.weight}`)).toBeInTheDocument()
    expect(await screen.findByText(`Height: ${mockPokemonDetails.height}`)).toBeInTheDocument()
  })
});
