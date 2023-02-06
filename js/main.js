let tbody = document.querySelector("tbody");
let establecimiento;
const data = fetch('./js/data.json')
    .then(response => response.json())
    .then(data => {

        establecimiento = new Establecimiento(data.establecimiento.nombre);

        data.establecimiento.bibliotecas.forEach(element => {
            const biblioteca = new Biblioteca(element.nombre);

            element.libros.forEach(contenido => {
                const libro = new Libro(contenido.nombre, contenido.autor, contenido.primeraEdicion);
                biblioteca.agregarLibro(libro);
            })
            establecimiento.agregarBiblioteca(biblioteca)

        });

        establecimiento.bibliotecas.forEach(biblioteca => {
            
            mostrarLibros(biblioteca.libros, biblioteca.nombre)
        })

    });

function mostrarLibros(libros, nombre) {
        libros.forEach(libro => {
            const tr = document.createElement('tr');

            const tdBiblioteca = document.createElement('td');
            const tdNombre = document.createElement('td');
            const tdAutor = document.createElement('td');
            const tdPrimeraEdicion = document.createElement('td');

            tdNombre.textContent = libro.nombre
            tdAutor.textContent = libro.autor
            tdPrimeraEdicion.textContent = libro.primeraEdicion
            tdBiblioteca.textContent =nombre;

            tr.appendChild(tdNombre);
            tr.appendChild(tdAutor);
            tr.appendChild(tdPrimeraEdicion);
            tr.appendChild(tdBiblioteca);
            tbody.appendChild(tr);
        })

}

function buscar(){
    tbody.innerHTML="";
    establecimiento.bibliotecas.forEach(biblioteca=>{
       
        const libros = biblioteca.buscarLibro(document.getElementById('search').value)
        
        mostrarLibros(libros, biblioteca.nombre)
    })
    
  
}