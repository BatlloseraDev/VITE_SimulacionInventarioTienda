import './style.css'
import './productManager.js'
import { agregarProducto, eliminarProducto, calcularValorTotal, aplicarDescuento, mostrarProductos, aplicarDescuentosATodos } from  './productManager.js'



console.log("Tienda");
console.log(mostrarProductos());
console.log("agregando producto");
console.log(agregarProducto("kiwis", 2.0, 30));
console.log(mostrarProductos());
console.log("eliminando producto id:1");
console.log(eliminarProducto(1));
console.log(mostrarProductos());
console.log("calculando valor total");
console.log(calcularValorTotal());
console.log("aplicando descuento al producto id:2");
console.log(aplicarDescuento(2, 10));
console.log(mostrarProductos());
console.log(calcularValorTotal());
console.log("aplicando descuento a todos los productos");
console.log(aplicarDescuentosATodos(25));
console.log(mostrarProductos());
console.log(calcularValorTotal());



