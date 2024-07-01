const prompt = require('prompt-sync')();

let pegarNumeros = prompt('digite um numero com no minimo dois algarismos')
let numeros = []
pegarNumeros = pegarNumeros.split("")

for (let i = 0; i < pegarNumeros.length; i++) {
    for (let j = i + 1; j < pegarNumeros.length; j++) {
        if (pegarNumeros[j] > pegarNumeros[i]){
            let placeh = pegarNumeros[i]
            pegarNumeros[i] = pegarNumeros[j]
            pegarNumeros[j] = placeh
        }
        
        
    }
    
    nummax = pegarNumeros.join('')    
}

console.log(nummax)