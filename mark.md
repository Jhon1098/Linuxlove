<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="mark.css">
  <title>Texto Expansível em HTML</title>
<!--<style>
    .collapsed {
      display: none;
    }
  </style> !-->

</head>
<body>

<h2>Texto Compactado</h2>

<button onclick="toggleText()" class="arrow"></button>

<div id="expandable-text">
  <p>Este é o texto que será compactado inicialmente. Para ver mais, clique no botão acima.</p>
  <p class="collapsed">Este é o texto expandido, que aparece quando o botão é clicado.</p>
</div>

<script>
  function toggleText() {
    var expandedText = document.querySelector('#expandable-text .collapsed');
    var arrowButton = document.querySelector('button.arrow');
    
    if (expandedText.style.display === 'none') {
      expandedText.style.display = 'block';
      arrowButton.classList.add('collapsed');
    } else {
      expandedText.style.display = 'none';
      arrowButton.classList.remove('collapsed');
    }
  }
</script>

</body>
</html>