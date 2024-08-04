let bets = [];

function placeBet() {
    const betInput = document.getElementById('bet-input').value;
    if (betInput) {
        bets.push(betInput);
        updateLeaderboard();
        document.getElementById('bet-input').value = '';
    } else {
        alert('Vul een naam in');
    }
}

function updateLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    bets.forEach(bet => {
        const li = document.createElement('li');
        li.textContent = bet;
        leaderboardList.appendChild(li);
    });
}
