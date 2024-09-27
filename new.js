var div = document.getElementById('task1');

function btn() {
    var addQuote = document.getElementById('task').value;
    if (addQuote !== "") { 
        div.innerHTML += `<div>${addQuote}</div>`;
        document.getElementById('task').value = ""; 
    }
}

function dlt() {
    div.innerHTML = ""; 
}



