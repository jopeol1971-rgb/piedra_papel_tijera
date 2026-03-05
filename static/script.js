let playerPoints = 0;
let cpuPoints = 0;

function play(playerChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const cpuChoice = choices[Math.floor(Math.random() * 3)];
    let msg = "";

    if (playerChoice === cpuChoice) {
        msg = `Empate. Ambos elegisteis ${playerChoice}.`;
    } else if (
        (playerChoice === 'piedra' && cpuChoice === 'tijera') ||
        (playerChoice === 'papel' && cpuChoice === 'piedra') ||
        (playerChoice === 'tijera' && cpuChoice === 'papel')
    ) {
        playerPoints++;
        msg = `¡Punto para ti! ${playerChoice} gana a ${cpuChoice}.`;
    } else {
        cpuPoints++;
        msg = `Punto para la CPU. ${cpuChoice} gana a ${playerChoice}.`;
    }

    updateUI(msg);
}

function updateUI(msg) {
    const scoreElement = document.getElementById('score');
    document.getElementById('result').innerText = msg;
    scoreElement.innerText = `Tú: ${playerPoints} | CPU: ${cpuPoints}`;

    // Efecto visual según resultado
    if (msg.includes("ti")) {
        scoreElement.className = "ganaste";
    } else if (msg.includes("CPU")) {
        scoreElement.className = "perdiste";
    }

    setTimeout(() => { scoreElement.className = ""; }, 500);

    if (playerPoints === 5) {
        alert("¡Felicidades! Has ganado el juego.");
        resetGame();
    } else if (cpuPoints === 5) {
        alert("La CPU ha ganado esta vez.");
        resetGame();
    }
}

function resetGame() {
    playerPoints = 0;
    cpuPoints = 0;
    document.getElementById('score').innerText = `Tú: 0 | CPU: 0`;
    document.getElementById('result').innerText = "¡Elige tu arma!";
}