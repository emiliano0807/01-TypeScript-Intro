export const name  = 'Emiliano'
export const age: number = 20
export const isDeveloper: boolean = true

export const templateString = `Esto es un string
multulinea
que puede tener
"comillas dobles"
'y simples'
inyectar valores ${ name } 
expresiones ${ 1 + 1 }
numeros: ${ age }
booleanos: ${ isDeveloper }`

console.log( templateString )


