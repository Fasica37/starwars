let winGame = document.getElementsByClassName('congratulations');
let loseGame = document.getElementsByClassName('game-over');

let winLoseLuck;
function startGame() {
  winLoseLuck = Math.round(Math.random());
  winGame = Array.from(winGame)[0];
  loseGame = Array.from(loseGame)[0];
  if (winLoseLuck) winGame.setAttribute('class', 'show-element');
  else loseGame.setAttribute('class', 'show-element');
}
