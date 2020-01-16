abstract class EstadoCivil
{
    persona : Persona
    constructor(persona:Persona)
    {
        this.persona = persona
    }

    abstract casar()
    abstract divorciar()
    abstract enviudar()
    abstract morir()
    abstract toString()
}

class Soltero extends EstadoCivil
{
    
    casar() {
        this.persona.estadoCivil = new Casado(this.persona)
    }    
    divorciar() {}

    enviudar() {}

    morir() {
        this.persona.estadoCivil = new Difunto(this.persona)
    }

    toString(){
        return "soltero"
    }
}

class Casado extends EstadoCivil
{
    casar() {}    

    divorciar() {
        this.persona.estadoCivil = new Divorciado(this.persona)
    }
    enviudar() {
        this.persona.estadoCivil = new Viudo(this.persona)
    }
    morir() {
        this.persona.estadoCivil = new Difunto(this.persona)
    }

    toString(){
        return "casado"
    }
}
class Divorciado extends EstadoCivil
{
    casar() {
        this.persona.estadoCivil = new Casado(this.persona)
    }    
    divorciar() {}

    enviudar() {}

    morir() {
        this.persona.estadoCivil = new Difunto(this.persona)
    }

    toString(){
        return "divorciado"
    }
}

class Viudo extends EstadoCivil
{
    casar() {
        this.persona.estadoCivil = new Casado(this.persona)
    }    
    divorciar() {}

    enviudar() {}

    morir() {
        this.persona.estadoCivil = new Difunto(this.persona)
    }

    toString(){
        return "viudo"
    }
}

class Difunto extends EstadoCivil
{
    casar() {}  

    divorciar() {}

    enviudar() {}

    morir() {}

    toString(){
        return "muerto"
    }
}

class Persona
{
    nombre : string
    edad : number
    estadoCivil:  EstadoCivil

    constructor(nombre : string)
    {   
        this.nombre = nombre
        this.estadoCivil = new Soltero(this)
    }

    getEstado()
    {
        return this.estadoCivil.toString()
    }

    casar()
    {
        this.estadoCivil.casar()
    }

    divorciar()
    {
        this.estadoCivil.divorciar()
    }

    enviudar()
    {
        this.estadoCivil.enviudar()
    }

    morir()
    {
        this.estadoCivil.morir()
    }
}

let mainState = () => {
    let pepito = new Persona("Pepe")
    pepito.casar()
    pepito.enviudar()
    console.log(`El estado es: ${pepito.getEstado()}`)
}

mainState()