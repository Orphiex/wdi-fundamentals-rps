////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
// 'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // If input is true, return input.  If input is null or undefined, return 'getInput()'.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    switch (playerMove) {
        case 'rock':
            if (computerMove === 'rock') {
                winner = 'tie';
            } else if (computerMove === 'paper') {
                winner = 'Computer';
            } else winner = 'Player';
            break;
        case 'paper':
            if (computerMove === 'rock') {
                winner = 'Player';
            } else if (computerMove === 'paper') {
                winner = 'tie';
            } else winner = 'Computer';
            break;
        case 'scissors':
            if (computerMove === 'rock') {
                winner = 'Computer';
            } else if (computerMove === 'paper') {
                winner = 'Player';
            } else winner = 'tie';
            break;
        default:
            winner = 'wrong';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins + computerWins !== 5) {
        // get the moves
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);

        // determine the winner
        var winner = getWinner(playerMove, computerMove)
        switch (winner) {
            case 'Player':
                playerWins = playerWins + 1;
                break;
            case 'Computer':
                computerWins = computerWins + 1;
                break;
            default:

        }
        
        // display the winner
        if (winner === 'Player') || (winner === 'Computer')) {
            console.log('The winner is: ' + winner)
        } else if (winner === 'tie') {
            console.log('This match was a tie!')
        } else {
            console.log('Wrong answer, dumbass.')
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }

    if (playerWins > computerWins) {
        console.log('Congratulations! You win!')
    }
    else {
        console.log('Too bad! Computer wins!')
    }
    return [playerWins, computerWins]; // [3, 2]
}

