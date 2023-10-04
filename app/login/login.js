function fazerLogin() {
    // Suponha que você obtenha o identificador do usuário durante o login
    const identificadorDoLogin = document.getElementById('log-id').value;
  
    // Atribua o identificador obtido à variável global identificador
    localStorage.setItem('identificador', identificadorDoLogin);
    // Redirecionar para a página do index.html
    window.location.href = '../index.html';
  }