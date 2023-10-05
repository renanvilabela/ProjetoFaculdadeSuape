console.log("dale")

let origin = null //variável para armazenar o conteúdo original da página
let problema = '' //variavel vazia
const identificador = localStorage.getItem('identificador') || '';
let tipos = [] //array vazia
var target = document.getElementById('target');

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
    tipos = formData.getAll('tipo');

    //atualiza o valor do indentificador em localStorage
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


//localização
// function appendLocation(location, verb) {
//   verb = verb || 'updated';
//   var newLocation = document.createElement('p');
//   newLocation.innerHTML = 'Location ' + verb + ': ' + location.coords.latitude + ', ' + location.coords.longitude + '';
//   target.appendChild(newLocation);
// }

// if ('geolocation' in navigator) {
//   document.getElementById('askButton').addEventListener('click', function () {
//     navigator.geolocation.getCurrentPosition(function (location) {
//       appendLocation(location, 'fetched');
//     });
//     watchId = navigator.geolocation.watchPosition(appendLocation);
//   });
// } else {
//   target.innerText = 'Geolocation API not supported.';
    
// }

// function getUserMedia(constraints) {
//     // if Promise-based API is available, use it
//     if (navigator.mediaDevices) {
//       return navigator.mediaDevices.getUserMedia(constraints);
//     }
      
//     // otherwise try falling back to old, possibly prefixed API...
//     var legacyApi = navigator.getUserMedia || navigator.webkitGetUserMedia ||
//       navigator.mozGetUserMedia || navigator.msGetUserMedia;
      
//     if (legacyApi) {
//       // ...and promisify it
//       return new Promise(function (resolve, reject) {
//         legacyApi.bind(navigator)(constraints, resolve, reject);
//       });
//     }
//   }
  
//   function getStream (type) {
//     if (!navigator.mediaDevices && !navigator.getUserMedia && !navigator.webkitGetUserMedia &&
//       !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
//       alert('User Media API not supported.');
//       return;
//     }
  
//     var constraints = {};
//     constraints[type] = true;
    
//     getUserMedia(constraints)
//       .then(function (stream) {
//         var mediaControl = document.querySelector(type);
        
//         if ('srcObject' in mediaControl) {
//           mediaControl.srcObject = stream;
//         } else if (navigator.mozGetUserMedia) {
//           mediaControl.mozSrcObject = stream;
//         } else {
//           mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
//         }
        
//         mediaControl.play();
//       })
//       .catch(function (err) {
//         alert('Error: ' + err);
//       });
//   }

// function notificação(){
//     console.log("olha o zap")
// }