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
});
