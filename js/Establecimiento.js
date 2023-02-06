function Establecimiento(nombre){
    this.nombre = nombre;
    this.bibliotecas = [];
}

Establecimiento.prototype.getBibliotecas= function (){
    return bibliotecas;
}

Establecimiento.prototype.buscarBiblioteca = function(palabra){
    this.bibliotecas.filter(palabra => nombre= palabra);
}
Establecimiento.prototype.agregarBiblioteca = function(biblioteca){
    
    this.bibliotecas.push(biblioteca)
}