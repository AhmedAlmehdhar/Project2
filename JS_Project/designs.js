
document.getElementById("sizePicker").addEventListener("submit", function(event) {
    event.preventDefault()
    const rowsNumber = document.getElementById('inputHeight').value;
    const cellsNumber = document.getElementById('inputWidth').value;
    makeGrid(rowsNumber, cellsNumber)
})

function makeGrid(hieght, width) {
    const rowsNumber = document.getElementById('inputHeight').value;
    const cellsNumber = document.getElementById('inputWidth').value;
    const pixelCanvas = document.querySelector('#pixelCanvas');

    while (pixelCanvas.hasChildNodes()) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
    for (let r = 1; r <= rowsNumber; r++) {
        rows = document.createElement('TR')
        pixelCanvas.appendChild(rows)
        for (let c = 1; c <= cellsNumber; c++) {
            colums = document.createElement('TD')
            rows.appendChild(colums)
        }
    }
    pixelCanvas.addEventListener("click", function(event) {
        event.preventDefault()
        event.target.style.backgroundColor = document.getElementById("colorPicker").value;

    })

}