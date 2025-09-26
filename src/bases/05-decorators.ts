


class NewPokemon{
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`NADA`);
    }

    speak(){
        console.log(`NADA, HABLA`);
    }
}
const MyDecorator = () => {
    return ( target: Function ) =>{
        // console.log(target)
        return NewPokemon;

    }
};
@MyDecorator()

export class Pokemos{
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak(){
        console.log(`${this.name} ${this.name}!`);
    }
}
export const charmander = new Pokemos(4, 'Charmander');
charmander.scream();
charmander.speak();