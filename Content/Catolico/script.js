const background = document.getElementById('background');
//const visitorCountElement = document.getElementById('visitorCount');

// Função para atualizar o contador de visitantes
// function updateVisitorCount() {
//    let count = localStorage.getItem('visitorCount');
//    count = count ? parseInt(count) + 1 : 1;
//    localStorage.setItem('visitorCount', count);
//    visitorCountElement.textContent = count;
//}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calcula a transformação da imagem de fundo
    const transformValue = Math.min(scrollY / windowHeight, 1) * 100;

    // Aplica a transformação
    background.style.transform = `translateY(-${transformValue}%)`;
});

// Chama a função ao carregar a página
// updateVisitorCount();