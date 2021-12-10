//@ts-check
const grid: any = new Muuri('.grid', {
    layout: {
        fillGaps: false,
        horizontal: false,
        alignRight: false,
        alignBottom: false,
        rounding: false
      }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlaces) => enlaces.classList.remove('activo'))
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria = ${categoria}]`);
        })
    });

    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
    });
})