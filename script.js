//MUSIC=======================================================
var music = document.getElementById('player');
music.currentTime = 5;

function playPause() {
  if (music.paused)
    music.play();
  else
    music.pause();
}

//ANIMACAO DO BOTAO PLAY/PAUSE DA MUSICA========================
var buttonMusic = document.querySelector('.play');

function executeAnimation () {
  var onoff = document.querySelector('.play');
  onoff.classList.toggle('play-onoff');
}
buttonMusic.addEventListener('click', executeAnimation);

//MENU TOGGLE====================================================
var btnNav = document.getElementById('btn-nav');

function toggleMenu () {
    var nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
}

btnNav.addEventListener('click', toggleMenu);