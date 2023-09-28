console.log("dale")

var notification = document.querySelector("#notification");
var open = document.querySelector("#open");
var emergency = document.querySelector("#emergency"); 
let origin = null //variável para armazenar o conteúdo original da página

//função que abre o formulário
function AbrirChamado(){
    window.alert("abre chamado")
    //verifica se o conteúdo original ainda não foi armazenado
    if(!origin){
        origin = document.querySelector('main').innerHTML; //armazena conteúdo original
    }
    //arquivo do form que será lido ↓
    fetch('form/form.html') 
        .then(response => response.text())
        .then(data => {
            const main = document.querySelector('main');
            main.innerHTML = data; //substitui o conteúdo da <main> pelo conteúdo do formulário
        })
        .catch(error => {
            console.error('Erro ao carregar o formulário', error);
        })
}

//função para voltar ao conteúdo original
function voltar(){
    if (origin){
        const main = document.querySelector('main');
        main.innerHTML = origin; //restaura o conteúdo original da <main>
    }
}

function YourCalls(){
    window.alert("seus chamados")
}
    

function notificação(){
    console.log("olha o zap")
}