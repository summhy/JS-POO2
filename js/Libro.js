function Libro(nombre, autor,  publicacion){
    this.nombre =nombre;
    this.autor = autor;
    this.primeraEdicion=publicacion;
}

Libro.getNombre= function (){
    return this.nombre
};

Libro.esLibro = function(titulo){
    return this.nombre== titulo
}