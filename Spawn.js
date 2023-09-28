function mostrarCartaFranki() {
  const cartaFranki = document.getElementById('cartaFranki');

  cartaRonin.style.display = 'none';
  // Muestra la carta de Franki
  cartaFranki.style.display = 'block';
}

function mostrarOtraCartaRonin() {
 
  const cartaRonin = document.getElementById('cartaRonin');

  // Oculta la carta de Franki si está visible
  cartaFranki.style.display = 'none';

  // Muestra la carta de Ronin
  cartaRonin.style.display = 'block';
}
