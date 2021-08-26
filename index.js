'use strict';

/**
 * Plays a game of Rock-Paper-Scissors
 * 
 * @param {GameOptions} Choice The player's option
 * @returns {Result}
 */
function play(choice) {
    const options = ['rock', 'paper', 'scissors'];

    /**
     * Removed this line as it didn't allow node versions < 14.7
     */
    // if (choice.toLowerCase().replaceAll(' ', '').includes('scissor')) choice = 'scissors';

    choice = choice.toLowerCase();

    let result;

    if (!options.some(substring => choice.toLowerCase() == substring)) {
        result = {
            status: 'failure',
            error: 'Invalid choice provided'
        }
    }
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    const playerChoice = choice

    if (computerChoice == playerChoice) {
        result = {
            status: 'success',
            computer: computerChoice,
            winner: 'tie'
        }
    }
    else if (playerChoice == 'rock') {

        if (computerChoice == 'paper') {

            result = {
                status: 'success',
                computer: computerChoice,
                winner: 'computer'
            }

        } else {

            result = {
                status: 'success',
                computer: computerChoice,
                winner: 'player'
            }
        }
    }
    else if (playerChoice == 'scissors') {

        if (computerChoice == 'rock') {

            result = {
                status: 'success',
                computer: computerChoice,
                winner: 'computer'
            }
        } else {

            result = {
                status: 'success',
                computer: computerChoice,
                winner: 'player'
            }
        }

    }
    else if (playerChoice == 'paper') {

        if (computerChoice == 'scissors') {

            result = {
                status: 'success',
                computer: computerChoice,
                winner: 'computer'
            }
        } else {

            result = {
                status: 'success',
                computer: computerChoice,
                winner: 'player'
            }
        }

    }
    return result;
}

exports.play = play;