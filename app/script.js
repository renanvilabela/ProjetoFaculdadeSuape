console.log("dale")

var notification = document.querySelector("#notification");
var open = document.querySelector("#open");
var emergency = document.querySelector("#emergency"); 

function AbrirChamado(){
    window.alert("abre chamado")
    fetch('form/form.html')
        .then(response => response.text())
        .then(data => {
            const main = document.querySelector('main');
            main.innerHTML = data;
        })
}

function Emergencial(){
    window.alert("abre chamado urgente")
}

function notificação(){
    console.log("olha o zap")
}