import { PokemonDetails } from "./PokemonDetails";
import { mappedMockPokemonDetails } from "../../mocks/pokemons";
import { render, screen } from '@testing-library/react';

describe("PokemonDetails", () => {
  it("should correctly render the information", async () => {
    render(<PokemonDetails pokemonDetails={mappedMockPokemonDetails} />)
    expect(screen.getByText(`Weight: ${mappedMockPokemonDetails.weight}`)).toBeInTheDocument()
    expect(screen.getByText(`Height: ${mappedMockPokemonDetails.height}`)).toBeInTheDocument()
    expect(screen.getByText(`Name: ${mappedMockPokemonDetails.name}`)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', mappedMockPokemonDetails.image)
    mappedMockPokemonDetails.types.forEach((type) => {
      expect(screen.getByText(type)).toBeInTheDocument()
    })
  })
})