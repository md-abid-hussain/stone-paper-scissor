const game = () => {

    const getComputerChoice = () => {
        const choices = ['stone', 'paper', 'scissor'];
        return choices[Math.floor(Math.random() * 3)];
    }

    const playRound = (userSelection, computerSelection) => {
        if (userSelection === 'stone') {
            if (computerSelection === 'paper') {
                return -1;
            } else if (computerSelection === 'scissor') {
                return 1;
            } else {
                return 0;
            }
        } else if (userSelection === 'paper') {
            if (computerSelection === 'scissor') {
                return -1;
            } else if (computerSelection === 'rock') {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (computerSelection === 'rock') {
                return -1;
            } else if (computerSelection === 'paper') {
                return 1;
            } else {
                return 0;
            }
        }
    }

    let computerWin = 0;
    let userWin = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`round ${i}`);
        let userChoice = prompt('Enter stone, paper or scissor');
        let computerChoice = getComputerChoice();
        console.log(userChoice);
        console.log(computerChoice);
        console.log('result');
        let result = playRound(userChoice, computerChoice);
        if (result === 1) {
            userWin++;
            console.log('you won')
        } else if (result === -1) {
            computerWin++;
            console.log('dance')
        } else {
            console.log(`tie`);
        }
    }

    if (userWin > computerWin)
        console.log('You won');
    else if (userWin < computerWin)
        console.log('You lost');
    else
        console.log('It\'s a tie');
}

game();