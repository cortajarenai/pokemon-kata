import { render, screen } from '@testing-library/react';

import { App } from './App';
import axios from 'axios';

const expectedPokemon = "pikachu"

describe("App", () => {
  it("Should render a list of pokemons", async () => {
    jest.spyOn(axios, "get").mockResolvedValue(Promise.resolve({ data: { results: [{ name: expectedPokemon }] } }))
    render(<App />);
    const pokemon = await screen.findByText(expectedPokemon)
    expect(pokemon).toBeInTheDocument()
  });
});
