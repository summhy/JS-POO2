function Biblioteca(nombre, direccion){
    this.nombre = nombre;
    this.libros = [];
}

Biblioteca.prototype.getlibros= function(){
    return libros;
}

Biblioteca.prototype.buscarLibro = function(palabra){
    if(palabra.length==0){
        return this.libros;
    }else{
        return this.libros.filter(e => e.nombre === palabra);
    }
    
        
}


Biblioteca.prototype.agregarLibro = function(libro){
    this.libros.push(libro);
}