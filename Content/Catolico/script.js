const background = document.getElementById('background');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calcula a transformação da imagem de fundo
    const transformValue = Math.min(scrollY / windowHeight, 1) * 100;

    // Aplica a transformação
    background.style.transform = `translateY(-${transformValue}%)`;
});
