// No arquivo onde você faz o logout, por exemplo 'diario.html':
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Limpa as informações do usuário armazenadas no localStorage
    localStorage.removeItem('usuario');
    
    // Redireciona para a tela de login
    window.location.href = 'login.html';
});
