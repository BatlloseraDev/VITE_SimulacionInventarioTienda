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

export function eliminarProducto(id) {
    inventario.removeProducto(id);
}



export function calcularValorTotal() {
    let valorTotal = 0;
    inventario.productos.forEach(producto => {
        valorTotal += (producto.precio-(producto.precio*producto.descuento/100) )* producto.stock;
    });
    return valorTotal;
}

export function aplicarDescuento(id, descuento) {
    const producto = inventario.getProductoById(id);
    if (producto) {
        producto.descuento = descuento;
    }
}

export function aplicarDescuentosATodos( descuento) {
    inventario.productos.forEach(producto => {
        producto.descuento = descuento;
    });
}
export function mostrarProductos() {
    // let cadenaMensajes = [];
    const productos = inventario.getAllProductos();
    productos.forEach(producto => {
        // cadenaMensajes.push(producto.imprimirValores());
        console.log(producto.imprimirValores());
    });
    //return cadenaMensajes;
}






// console.log(inventario);
// console.log(inventario.productos);
// console.log(inventario.productos[0]);