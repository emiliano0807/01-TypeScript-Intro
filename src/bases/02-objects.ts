export const pokemonId = [1, 2, 3, 4, 5]

interface Pokemon {
    id: number;
    name: string;
    type?: string;
}

export const Bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    //type: 'Grass/Poison'
}

export const pokemons: Pokemon[] = [];
pokemons.push(Bulbasaur)

console.log(pokemons);