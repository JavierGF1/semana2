let num1 : number = 1
let num2 : number = 2

let suma = num1 + num2

//funciones

function sumar(sum1:number, sum2:number)
{
return sum1+sum2
}

let sumar2 = (s1:number, s2:number) => {
    return s1 + s2
}

interface Persona{
    nombre : string
    edad : number 
}

let Pepito : Persona = {
    nombre : "Pepito",
    edad : 31
}

let Juanita : Persona = {
    nombre: "Juanita",
    edad : null
}

console.log(`La suma es ${sumar2(num1, num2)}`)
console.log(`La edad de ${Pepito.nombre} es ${Pepito.edad}`)
console.log(`La edad de ${Juanita.nombre} es ${Juanita.edad}`)