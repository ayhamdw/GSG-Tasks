const player = {
  name: "Per",
  chips: 200,
};

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isInGame = false;
const msgEl = document.getElementById("status-msg");
const sumEl = document.getElementById("total-sum");
const cardsEl = document.getElementById("card-list");
const playerEl = document.getElementById("player-info");

playerEl.textContent = `${player.name}: $${player.chips}`;
function getCard() {
  const num = Math.floor(Math.random() * 13) + 1;
  return num === 1 ? 11 : num > 10 ? 10 : num;
}
function startGame() {
  isInGame = true;
  hasBlackjack = false;
  const card1 = getCard();
  const card2 = getCard();
  cards = [card1, card2];
  sum = card1 + card2;
  updateGame();
}
function updateGame() {
  cardsEl.textContent = "Cards: " + cards.join(" ");
  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    msgEl.textContent = "Do you want to draw a card?";
  } else if (sum === 21) {
    msgEl.textContent = "Blackjack!";
    hasBlackjack = true;
  } else {
    msgEl.textContent = "You lost!";
    isInGame = false;
  }
}
function drawCard() {
  if (!isInGame || hasBlackjack) return;

  const card = getCard();
  cards.push(card);
  sum += card;
  updateGame();
}
