export default class Producto{
    static _id= 0;
    id = 0;
    _nombre='';
    _precio= 0.0;
    _descuento = 0;// en enteros
    _stock= 0;


    constructor(nombre,precio,stock){
        if(!nombre) throw Error('Necesita un nombre');
        if(!precio) throw Error('Necesita un precio');
        if(!stock) throw Error('Necesita un stock');
    
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
        
        Producto._id++;
        this.id=Producto._id;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(value){
        this._nombre=value;
    }

    get precio(){
        return this._precio;
    }
    set precio(value){
        this._precio=value;
    }

    get stock(){
        return this._stock;
    }
    set stock(value){
        this._stock=value;
    }

    get descuento(){
        return this._descuento;
    }
    set descuento(value){
        this._descuento=value;
    }
    restarStock(value){
        this._stock-=value;
    }
    sumarStock(value){
        this._stock+=value;
    }

    imprimirValores(){
        return `Producto= id: ${this.id}, nombre: ${this.nombre}, precio: ${this.precio}, descuento: ${this.descuento}, stock: ${this.stock}`
    }

}