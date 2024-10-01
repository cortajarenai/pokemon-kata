import { PokemonDetails } from "./PokemonDetails";
import { mappedMockPokemonDetails } from "../../domain/mocks/pokemons";
import { render, screen } from '@testing-library/react';

describe("PokemonDetails", () => {
  it("should correctly render the information", async () => {
    render(<PokemonDetails pokemonDetails={mappedMockPokemonDetails} />)
    expect(screen.getByText(mappedMockPokemonDetails.weight)).toBeInTheDocument()
    expect(screen.getByText(mappedMockPokemonDetails.height)).toBeInTheDocument()
    expect(screen.getByText(mappedMockPokemonDetails.name)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', mappedMockPokemonDetails.image)
    mappedMockPokemonDetails.types.forEach((type) => {
      expect(screen.getByText(type)).toBeInTheDocument()
    })
  })
})