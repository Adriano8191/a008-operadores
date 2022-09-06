const primeiroNumero = +prompt('Digite um número')
const segundoNumero = +prompt('Digite outro número')

console.log(`O primeiro número é maior que o segundo? ${primeiroNumero > segundoNumero} `)
console.log(`O primeiro número é igual ao segundo? ${primeiroNumero === segundoNumero}`)
console.log(`O primeiro numero é divisível pelo segundo? ${primeiroNumero >= segundoNumero }`)
console.log(`O segundo número é divisivel pelo primeiro ${segundoNumero >= primeiroNumero}`)
