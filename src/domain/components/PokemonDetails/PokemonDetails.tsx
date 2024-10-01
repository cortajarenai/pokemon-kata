export const PokemonDetails = ({ pokemonDetails }: { pokemonDetails: any }) => {
  return <div className="pokemon-details">
    <h1>Name: {pokemonDetails.name}</h1>
    <p>Height: {pokemonDetails.height}</p>
    <p>Weight: {pokemonDetails.weight}</p>
    <img src={pokemonDetails.image} alt={pokemonDetails.name} />
    <div>
      Types:
      {pokemonDetails.types.map((type: any) => <span key={type}> {type} </span>)}
    </div>
  </div>
}