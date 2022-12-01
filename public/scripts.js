
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();

const botones = document.querySelectorAll(".card .btn");

// Aqui almacenare lo que agrego
const carritoObjeto = {
    // con la funcion agregarFrutas, estoy agregando la informacion a este objeto
};

const agregarFrutas = (e) => {
    console.log(e.target.dataset.fruta)

    const producto = {
        titulo : e.target.dataset.fruta,
        id : e.target.dataset.fruta,
        cantidad : 1
    }

    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }

    carritoObjeto[producto.titulo] = producto;
    mostrarCarrito(producto)
}

const mostrarCarrito = () => {

    carrito.textContent = ""; // Esto es para que cada que se presione el agregar, se mantenga un solo bloque

    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".fruta-name").textContent = item.titulo;
        clone.querySelector(".fruta-cantidad").textContent = item.cantidad;

        fragment.appendChild(clone);
    })
    carrito.appendChild(fragment);
}

botones.forEach( (btn) => btn.addEventListener("click", agregarFrutas));
