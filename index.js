var audios = {
    "haaland": "Sonidos/Haaland_sound.mp3",
    "gundogan": "Sonidos/Gundogan_sound.mp3",
    "bernardo_silva": "Sonidos/BernardoSilva_sound.mp3",
    "grealish": "Sonidos/Grealish_sound.mp3",
    "foden": "Sonidos/PhilFoden_sound.mp3",
    "kdb": "Sonidos/KDB_sound.mp3",
    "mahrez": "Sonidos/Mahrez_sound.mp3",
    "rodri": "Sonidos/Rodri_sound.mp3",
    "julianAlvarez": "Sonidos/JulianAlvarez_sound.mp3",
    "premierLeague": "Sonidos/Others/PremierLeague_sound.mp3", 
    "champions": "Sonidos/Others/Champions_sound.mp3",
    "city-inter": "Sonidos/Others/City-Inter_sound.mp3",
    "mute": "",
  };
  
  var audioActual = null;
  
  function reproducirAudioJugador(nombreJugador) {
    var rutaAudio = audios[nombreJugador];
   
    if (rutaAudio) {
      if (audioActual !== null) {
        audioActual.pause();
        audioActual.currentTime = 0;
      }
      
      var audio = new Audio(rutaAudio);
      
      audio.addEventListener('ended', function() {
        audioActual = null;
        // Hacer algo después de que el audio termine de reproducirse
      });
      
      audio.play();
      audioActual = audio;
    }

var botonMute = document.getElementById("botonMute");

// Agrega un event listener al botón de mute
botonMute.addEventListener("click", function() {
  if (audioActual !== null) {
    audioActual.pause();
    audioActual.currentTime = 0;
  }
});
  }

  