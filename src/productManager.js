import Inventario from './inventarioClass.js';
import Producto from './productClass.js';

const inventario = new Inventario();
// carga inicial
const productosIniciales = [
    new Producto("manzanas", 1.5, 10),
    new Producto("peras", 2.0, 5),
    new Producto("naranjas", 1.2, 8),
    new Producto("sandias", 3.0, 3)
]

productosIniciales.forEach(producto => {
    inventario.addProducto(producto);
});

export function agregarProducto(nombre, precio, stock) {
    const producto = new Producto(nombre, precio, stock);
    inventario.addProducto(producto);
}







// console.log(inventario);
// console.log(inventario.productos);
// console.log(inventario.productos[0]);