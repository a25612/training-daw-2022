let currentId = 1; // Variable autoincremental para el ID

function onClick() {
    const tbody = document.querySelector("tbody");

    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = currentId;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = "Example";
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = "Surname";
    tr.appendChild(td);

    // Columna de Acciones con enlace
    td = document.createElement("td");
    const enlace = document.createElement("a");
    enlace.href = `http://localhost/edit/${currentId}`;
    enlace.innerText = "Editar";
    td.appendChild(enlace);
    tr.appendChild(td);

    tbody.appendChild(tr);

    currentId++;
}
