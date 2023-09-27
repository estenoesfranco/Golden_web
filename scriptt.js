// Este script se ejecutará cuando la página se cargue completamente
window.addEventListener('load', (event) => {
    const audio = document.getElementById('backgroundAudio');
    const volumeButton = document.getElementById('volumeButton');
    

    audio.volume = 1.0; // Puedo ajustar el volumen (de 0.0 a 1.0 che)
   audio.play('./sonido/musicadefondo.wav')
   
    // Por ejemplo, cuando se hace clic en un botón
    // document.getElementById('miBoton').addEventListener('click', () => {
    //     audio.play();
    // });
    audio.volume = volumeSlider.value;


  
});


