const choices = ['rock', 'paper', 'scissors', 'niddle'];

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('player-choice').textContent = `Your Choice: ${playerChoice}`;
  document.getElementById('computer-choice').textContent = `Computer’s Choice: ${computerChoice}`;

  document.getElementById('winner').textContent = getWinner(playerChoice, computerChoice);
}

function getWinner(player, computer) {
  if (player === computer) return "It's a Draw! 🤝";

  const playerWins =
    (player === 'rock'     && computer === 'scissors') ||
    (player === 'paper'    && computer === 'rock')     ||
    (player === 'scissors' && computer === 'paper')    ||
    (player === 'niddle'   && computer !== 'niddle');

  return playerWins ? "You Win! 🎉" : "You Lose! 😢";
}
