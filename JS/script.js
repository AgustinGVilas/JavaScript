let productos = [
    {id: 1, nombre: "Arroz", precio: 100, img: "arroz.jpg"},
    {id: 2, nombre: "Agua", precio: 150, img: "agua.jpg"},
    {id: 3, nombre: "Harina", precio: 200, img: "harina.jpg"},
]

let main = document.getElementById("container")
let carrito = []  // hacer un push para agregar
let precioTotal = 0

class Productos{
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}


function renderizarProductos() {
    productos.forEach((producto) => {
        const divCard = document.createElement("div")
        divCard.classList.add("producto")
        divCard.innerHTML = `<img src="./media/${producto.img}"/>
        <h1>${producto.id}</h1>
        <h1>${producto.nombre}</h1>
        <h1>${producto.precio}</h1>
        <h1><button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        <h1><button onclick="eliminarDeCarrito(${producto.id})">Eliminar del carrito</button>`
        
        main.appendChild(divCard)
    });
}

function agregarAlCarrito(productoID){
    const prodSeleccionado = productos.find(producto => producto.id === productoID)
    carrito.push(prodSeleccionado)
    precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0)
    alert("Agregaste el producto al carrito")
}

function eliminarDeCarrito(productoID){
    const index = carrito.findIndex(producto => producto.id === productoID)
    if (index !== -1){
        carrito.splice(index, 1)
        precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0)
        alert("Eliminaste el producto del carrito")
    }
    
}

function leerCarrito(){
    const productosCarrito = carrito.map(productos => productos.nombre)
    alert("El carrito contiene: \n" + productosCarrito.join("\n") + "\nEl precio total es: $" + precioTotal)
}

renderizarProductos()
