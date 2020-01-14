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

let mainHerencia = () => {
    let mozo = new Mesero()
    let cocinero = new Cocinero()
    let llamado = new Llamador()

    console.log(`El sueldo del mozo es ${mozo.calcularSueldo()}`)
}

mainHerencia()