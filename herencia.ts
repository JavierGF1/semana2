class Empleado
{
    nombre : string
    edad : number

    calcularSueldo()
    {}
}

class Cocinero extends Empleado
{
    calcularSueldo()
    {
        return 2500
    }
}

class Mesero extends Empleado 
{
    calcularSueldo()
    {
        return 1200
    }
}

class Llamador extends Empleado
{
    calcularSueldo()
    {
        return 1000
    }
}

let imprimirSueldo =(empleado : Empleado) =>{
    console.log(`El sueldo es: ${empleado.calcularSueldo()}`)
}

let mainHerencia = () => {
    let mozo = new Mesero()
    let cocinero = new Cocinero()
    let llamador = new Llamador()
    imprimirSueldo(llamador)
}
    
mainHerencia()