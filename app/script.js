console.log("dale")

var notification = document.querySelector("#notification");
var open = document.querySelector("#open");
var emergency = document.querySelector("#emergency"); 

function AbrirChamado(){
    window.alert("abre chamado")
    //arquivo que será lido ↓
    fetch('form/form.html') 
        .then(response => response.text())
        .then(data => {
            const main = document.querySelector('main');
            main.innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o formulário', error);
        })
}

function Emergencial(){
    window.alert("abre chamado urgente")
    fetch('form/form-emergency.html') 
        .then(response => response.text())
        .then(data => {
            const main = document.querySelector('main');
            main.innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o formulário', error);
        })
}

function notificação(){
    console.log("olha o zap")
}