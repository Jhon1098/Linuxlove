# TESTE 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Texto Expansível em HTML</title>
  <style>
    .collapsed {
      display: none;
    }
  </style>
</head>
<body>

<h2>Texto Compactado</h2>

<button onclick="toggleText()">Mostrar/Esconder</button>

<div id="expandable-text">
  <p>Este é o texto que será compactado inicialmente. Para ver mais, clique no botão acima.</p>
  <p class="collapsed">Este é o texto expandido, que aparece quando o botão é clicado.</p>
</div>

<script>
  function toggleText() {
    var expandedText = document.querySelector('#expandable-text .collapsed');
    if (expandedText.style.display === 'none') {
      expandedText.style.display = 'block';
    } else {
      expandedText.style.display = 'none';
    }
  }
</script>

</body>
</html>