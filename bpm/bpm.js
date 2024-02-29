const beat = document.querySelector('html');
let groundZero = 0;
let lastTap = 0;
let counter = 0;
const bpmDiv = document.getElementById('bpm');
let tapDiff = 0;
let avgbpm = 0;
let previousTap = 0;
let elapsed = 0;

function tapTempo() {
  const element = document.getElementsByTagName('html');
  element[0].classList.add('addAnimation');
  const listener = element[0].addEventListener('animationend', function() {
    element[0].classList.remove('addAnimation');
    element[0].removeEventListener('animationend', listener);
  });

  if (lastTap === 0) {
    groundZero = new Date().getTime();
    counter = 0;
  }

  lastTap = new Date().getTime();
  elapsed = new Date().getTime() - previousTap;

  previousTap = lastTap;
  tapDiff = lastTap - groundZero;
  if (tapDiff !== 0) {
    avgbpm = Math.round((60000 * counter) / tapDiff);
  }
  counter++;
  bpmDiv.innerHTML = avgbpm;

  if (elapsed > 3000) {
    lastTap = 0;
  }
}

beat.addEventListener('click', tapTempo);

