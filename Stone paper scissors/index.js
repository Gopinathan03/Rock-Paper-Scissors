function playGame(userChoice) {
    // Define choices for the computer
    const choices = ['stone', 'paper', 'scissors'];
    // Get computer's choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // Display choices
    document.getElementById('userChoice').children[0].textContent = userChoice;
    document.getElementById('computerChoice').children[0].textContent = computerChoice;

    // Determine the result
    let result;
    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'stone' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    // Display the result
    document.getElementById('winner').children[0].textContent = result;
}
