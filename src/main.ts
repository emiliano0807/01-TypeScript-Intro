import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
//import { name, age, isDeveloper } from './bases/01-types'
//import { Bulbasaur, pokemons } from './bases/02-objects'
// import { Charmander } from './bases/03-classes'
// import { charmander } from './bases/04-intection'
// import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorators2'




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Typescript</h1>
    <h2>${charmander.name}</h2>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
