//@ts-check
var grid = new Muuri('.grid', {
    layout: {
        fillGaps: false,
        horizontal: false,
        alignRight: false,
        alignBottom: false,
        rounding: false
    }
});
window.addEventListener('load', function () {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');
    var enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach(function (elemento) {
        elemento.addEventListener('click', function (evento) {
            evento.preventDefault();
            enlaces.forEach(function (enlaces) { return enlaces.classList.remove('activo'); });
            evento.target.classList.add('activo');
            var categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter("[data-categoria = ".concat(categoria, "]"));
        });
    });
    document.querySelector('#barra-busqueda').addEventListener('input', function (evento) {
        var busqueda = evento.target.value;
        grid.filter(function (item) { return item.getElement().dataset.etiquetas.includes(busqueda); });
    });
});
