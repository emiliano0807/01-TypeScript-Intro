import axios from "axios";
import type { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";
// export class Pokemon {
//     public readonly id: number;
//     public name: string;

//     get imgUrl(): string {
//         return `https://pokemon.com/${this.id}.jpg`;
//     }


//     constructor(id: number, name: string){
//         this.id = id;
//         this.name = name;
//         console.log('Constructor called');
//     }
// }

// Metodo corto
export class Pokemon {

    get imgUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }
    constructor(
        public readonly id: number,
        public name: string
    ){}
    public scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
        this.speak();
    }
    private speak(){
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]>{
        // const moves = 10;
        // const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/4')
        // console.log(resp.data.moves);
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(data.moves);
        return data.moves;
        
    }
    
}
export const Charmander = new Pokemon(4, 'Charmander');

// console.log(bulbasaur.imgUrl);
// bulbasaur.scream();
// Charmander.speak();

// console.log(Charmander.getMoves());
Charmander.getMoves();