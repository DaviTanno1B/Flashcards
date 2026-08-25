function virarCartao(elementoCard) {
    elementoCard.classList.toggle('virado');
}

const botaoTema = document.getElementById('btn-tema');

botaoTema.addEventListener('click', function() {
    document.body.classList.toggle('modo-escuro');
    
    if (document.body.classList.contains('modo-escuro')) {
        botaoTema.textContent = 'Ativar Modo Claro';
    } else {
        botaoTema.textContent = 'Ativar Modo Escuro';
    }
});