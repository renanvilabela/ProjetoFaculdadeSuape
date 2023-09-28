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

function sendForm(){
    const formulario = document.querySelector('.form-area');
    //use o método FormData para coletar os dados do formulário
    const formData = new FormData(formulario);
    //você pode acessar os valores do formData usando get() ou getALL() para campos de múltiplos valores (como checkboxes)
    const identificador = formData.get('identificador')
    const problema = formData.get('problema');
    const tipos = formData.getAll('tipo')

    console.log(`Identificador: ${identificador}\nProblema: ${problema}\nTipos: ${tipos.join(', ')}`);
}

function YourCalls(){
    window.alert("seus chamados")
}
    

function notificação(){
    console.log("olha o zap")
}