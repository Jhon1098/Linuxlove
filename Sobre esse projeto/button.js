document.getElementById('toggleButton').addEventListener('click', function() {
    var textElement = document.getElementById('hiddenText');
    if (textElement.classList.contains('hidden')) {
        textElement.classList.remove('hidden');
        this.textContent = '🥳'; // Alterar o texto do botão
    } else {
        textElement.classList.add('hidden');
        this.textContent = '⚠️'; // Alterar o texto do botão
    }
});