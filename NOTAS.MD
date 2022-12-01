// 1 Primero creamos las constantes que tomaran la informacion del html

// 2 Carrito: es el lugar donde se van almacenar los datos que obtendremos de las cartas 

// 3 Template: es el lugar de donde sacaremos las estilos que se veran en pantalla cuando la informacion este en carrito

// 4 El fragment nos sirve para que no haya reflow al momento de leer la informacion

// 5 botones: basicamente aqui se agregara la funcionalidad para agregar items

// 6 Creare el objeto que almacenara mi informacion lo que agrego

// 7. Primera funcion: agregarFrutas -> esta va relacionada con la funcionalidad del boton para traer la informacion del html y tenerla en una variable

// 8. Creamos un metodo con la variable botones que nos permita utilizar la funcion agregarFrutas cada vez que el evento "click" se lleve a cabo

// 9. si utilizo 'e' como parametro y luego el e.target.dataset.fruta podre saber la informacion que estoy pulsando

// 10. Agregamos un objeto que tendra la informacion de lo que nosotros estamos pulsando

// 11.  Ahora lo que hacemos es enviar la informacion (nombre del producto) a carritoObjeto{} utilizando la funcion mostrarCarrito en el html

// 12. Ahora creamos una funcion  que me muestre en el html la informacion tomada luego de ejecutar agregarFrutas 

// 13. Utilizamos el Object.values + foreach para tomar la informacion de carritoObjeto es donde se estan almacenando los datos del producto

// Agregamos el elemento que almacenará los productos y le damos un valor textContent = "" ;

// 15. Ahora clonamos el template que nosotros maquetamos anteriormente, colocamos firstElementChild para evitar conflictos futuros con el addEventListener o mas funcionalidades

// 16. Ahora simplemente tomamos la los estilos de los elementos necesitados para mostrar nuestra informacion en el html. En este caso el titulo y la cantidad de las frutas (TODO ESTO DESDE clone.querySelector)

// 17. Esta informacion sera agregada al fragment para evitar reflow

// 18. Enviamos la informacion recibida de mostrarCarrito al elemento en el HTML que contendra la informacion y la mostrara en el dom

// 19. Creamos una funcion que permita identificar la cantidad que estamos agregando de items siempre y cuando tengamos la propiedad producto.titulo dentro de nuestro objeto - CHEQUEAR ABAJO

// 20. Agregar la funcion que nos muestra los productos dentro de la que los agrega.