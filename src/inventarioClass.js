export default class Inventario{

    _productos = [];

    constructor() {

    }

    get productos() {
        return this._productos;
    }

    set productos(value) {
        this._productos = value;
    }

    addProducto(producto) {
        this._productos.push(producto);
    }

    removeProducto(id) {
        this._productos = this._productos.filter(producto => producto.id !== id);
    }

    getProductoById(id) {
        return this._productos.find(producto => producto.id === id);
    }

    updateProducto(id, nombre, precio, stock) {
        const producto = this.getProductoById(id);
        if (producto) {
            producto.nombre = nombre;
            producto.precio = precio;
            producto.stock = stock;
        }
    }

    getAllProductos(){
        return this._productos;
    }



}