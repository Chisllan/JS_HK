// from data.js
console.log(data);
var tableData = data;

function myFunction() {
    var table = document.getElementById("ufo-table");
    date = tableData.map(row => row.date);
    city = tableData.map(row => row.city);
    state = tableData.map(row => row.state);
    country = tableData.map(row => row.country);
    shape = tableData.map(row => row.shape);
    duration = tableData.map(row => row.duration);
    comments = tableData.map(row => row.comments);

    // aqui n debe ser el numero de registros en datos
    for (var i=0; i<7; i++ ){
        var row = table.insertRow(i)
        // seleccionar el row nuevo
        // nuevoRow = d3.selectAll(tr)[i]

        //aqui n debe ser el numero de columnas (7)

        var cellk = nuevoRow.insertCell(0);
        cellk.innerHTML(date[i])
        var cellk = nuevoRow.insertCell(0);
        cellk.innerHTML(city[i])
        var cellk = nuevoRow.insertCell(0);
        cellk.innerHTML(state[i])
        var cellk = nuevoRow.insertCell(0);
        cellk.innerHTML(country[i])
        var cellk = nuevoRow.insertCell(0);
        cellk.innerHTML(shape[i])
        var cellk = nuevoRow.insertCell(0);
        cellk.innerHTML(duration[i])
        var cellk = nuevoRow.insertCell(0);
        cellk.innerHTML(comments[i])
        };
    return (console.log(table));
};



// YOUR CODE HERE!
