console.log("dale")

let origin = null //variável para armazenar o conteúdo original da página
let identificador = '' //variavel vazia
let problema = '' //variavel vazia
let tipos = [] //array vazia

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
    identificador = formData.get('identificador')
    problema = formData.get('problema');
    tipos = formData.getAll('tipo')

    console.log(`Identificador: ${identificador}\nProblema: ${problema}\nTipos: ${tipos.join(', ')}`);
}

function YourCalls(){
    const calls = document.querySelector('#chamados');
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
    

// function notificação(){
//     console.log("olha o zap")
// }