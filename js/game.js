const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_SPACE = 32;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const PLAYER_WIDTH = 20;
const PLAYER_MAX_SPEED = 600.0;
const LASER_MAX_SPEED = 300.0;
const LASER_COOLDOWN = 0.5;

const ENEMIES_PER_ROW = 10;
const ENEMY_HORIZONTAL_PADDING = 80;
const ENEMY_VERTICAL_PADDING = 70;
const ENEMY_VERTICAL_SPACING = 80;
const ENEMY_COOLDOWN = 5.0;

const GAME_STATE = {
  lastTime: Date.now(),
  leftPressed: false,
  rightPressed: false,
  spacePressed: false,
  playerX: 0,
  playerY: 0,
  playerCooldown: 0,
  lasers: [],
  enemies: [],
  enemyLasers: [],
  gameOver: false
};

function rectsIntersect(r1, r2) {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  );
}

function setPosition(el, x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`;
}

function clamp(v, min, max) {
  if (v < min) {
    return min;
  } else if (v > max) {
    return max;
  } else {
    return v;
  }
}

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
