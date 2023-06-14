let productos = [
    {id: 1, nombre: "Arroz", precio: 100, img: "arroz.jpg"},
    {id: 2, nombre: "Agua", precio: 150, img: "agua.jpg"},
    {id: 3, nombre: "Harina", precio: 200, img: "harina.jpg"},
]

let main = document.getElementById("container")
let newDiv = document.getElementById("container2")
let carrito = []
let precioTotal = 0


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
    localStorage.setItem("carrito", JSON.stringify(carrito))
    precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0)
    divCard = ""
    for (let index = 0; index < carrito.length; index++) {
        divCard += `<h1>${carrito[index].nombre}</h1>`
    }
    newDiv.innerHTML = "<h1>El carrito contiene: </h1>" + divCard + `<h1>El precio total del carrito es: $${precioTotal}</h1>`
}

function eliminarDeCarrito(productoID){
    const index = carrito.findIndex(producto => producto.id === productoID)
    if (index !== -1){
        carrito.splice(index, 1)
        precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0)
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    divCard = ""
    for (let index = 0; index < carrito.length; index++) {
        divCard += `<h1>${carrito[index].nombre}</h1>`
    }
    newDiv.innerHTML = "<h1>El carrito contiene: </h1>" + divCard + `<h1>El precio total del carrito es: $${precioTotal}</h1>`
    
}

renderizarProductos()

