function playSoundKeyboard(e) {
  const keyMap = {
    'KeyA': 65,
    'KeyS': 83,
    'KeyD': 68,
    'KeyF': 70,
    'KeyG': 71,
    'KeyH': 72,
    'KeyJ': 74,
    'KeyK': 75,
    'KeyL': 76
  };

  const keyCode = keyMap[e.code];
  if (!keyCode) return;

  playSound(keyCode);
}

function playSoundClick() {
  const keyCode = this.getAttribute('data-key');
  playSound(keyCode);
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', playSoundClick);
});

window.addEventListener('keydown', playSoundKeyboard);

function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio || !key) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}
