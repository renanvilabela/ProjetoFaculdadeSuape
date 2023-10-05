console.log("dale")

let origin = null //variável para armazenar o conteúdo original da página
let problema = '' //variavel vazia
var identificador = localStorage.getItem('identificador') || '';
let tipos = [] //array vazia
var target = document.getElementById('target');


function fazerLogin() {
    // Obter o identificador do usuário a partir do campo de login
    identificador = document.getElementById('log-id').value;
  
    // Ocultar a seção de login
    document.querySelector('.login-area').style.display = 'none';
  
    // Exibir a seção de conteúdo principal
    document.querySelector('main').style.display = 'flex';
  
    // Armazenar o identificador em localStorage para uso posterior
    localStorage.setItem('identificador', identificador);
  
    // Registre o identificador no console (opcional)
    console.log(`Identificador: ${identificador}`);
  }

//função que abre o formulário
function AbrirChamado(){
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


function sendForm(){
    const formulario = document.querySelector('.form-area');
    //use o método FormData para coletar os dados do formulário
    const formData = new FormData(formulario);
    //você pode acessar os valores do formData usando get() ou getAll() para campos de múltiplos valores (como checkboxes)
    problema = formData.get('problema');
    tipos = formData.getAll('tipo');
    
    //atualiza o valor do identificador em localStorage
    localStorage.setItem('identificador', identificador);
    
    console.log(`Identificador: ${identificador}\nProblema: ${problema}\nTipos: ${tipos.join(', ')}`);
}


function YourCalls(){
    const calls = document.querySelector('#chamados');
    
    //obtenha o identificador em localStorage
    const indentificador = localStorage.getItem('identificador');
    
    //crie o conteúdo html com os dados dos chamados
    if (identificador && problema && tipos.length > 0){
        const conteudoHTML = `
        <h2>Seus Chamados</h2>
        <p id="registro">Identificador: ${identificador}</p>
        <p id="problema-registrado">Problema: ${problema}</p>
        <p id="check">tipos: ${tipos.join(', ')}</p> 
        `;
        //insira o conteúdo na "caixa" para exibir os chamados
        calls.innerHTML = conteudoHTML;
        //mostra a caixa definindo o estilo display para "block"
        calls.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', function(){
    YourCalls(); //chama a função após o carregamento da página
});
//função para voltar ao conteúdo original
function voltar(){
    if (origin){
        const main = document.querySelector('main');
        main.innerHTML = origin; //restaura o conteúdo original da <main>
    }
}