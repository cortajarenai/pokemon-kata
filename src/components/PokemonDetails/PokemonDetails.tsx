export const PokemonDetails = ({ pokemonDetails }: { pokemonDetails: any }) => {
  return <div>
    <h1>{pokemonDetails.name}</h1>
    <p>{pokemonDetails.height}</p>
    <p>{pokemonDetails.weight}</p>
    <img src={pokemonDetails.image} alt={pokemonDetails.name} />
    {pokemonDetails.types.map((type: any) => <p key={type}> {type} </p>)}
  </div>
}