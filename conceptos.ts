interface Pedido 
{
nombre : string
cantidad : number
}

class Cliente
{
realizarPedido(mozo : Mozo, pedido : Pedido)
    {
        mozo.recibirPedido(pedido)
    }
}

class Mozo
{
    recibirPedido(pedido:Pedido)
    {
        console.log(`Se recibio el pedido ${pedido.cantidad} ${pedido.nombre}s`)
    }    
}

let main = () => {
    let cliente = new Cliente()
    let mozo : Mozo = new Mozo()
    let pedido : Pedido = {
        nombre: "Ceviche",
        cantidad: 2
    } 

    cliente.realizarPedido(mozo, pedido)
}

main()