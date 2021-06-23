'use strict';

/**
 * Plays a game of Rock-Paper-Scissors
 * 
 * @param {String} Choice The player's option
 * @returns 
 */
function play(choice) {
    const options = ['rock', 'paper', 'scissors'];

    let result;

    if (!options.some(substring => choice.toLowerCase() == substring)) {
        result = `{"status":"failure", "error":"Invalid choice provided"}`;
    };
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    const playerChoice = choice.toLowerCase();

    if (computerChoice == playerChoice) {
        result = `{"status":"success", "computer":"${computerChoice}", "winner":"tie"}`;
    }
    else if (playerChoice == 'rock') {
        if (computerChoice == 'paper') {
            result = `{"status":"success", "computer":"${computerChoice}", "winner":"computer"}`;
        } else {
            result = `{"status":"success", "computer":"${computerChoice}", "winner":"player"}`;
        }
    }
    else if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') {
            result = `{"status":"success", "computer":"${computerChoice}", "winner":"computer"}`;
        } else {
            result = `{"status":"success", "computer":"${computerChoice}", "winner":"player"}`;
        }
    }
    else if (playerChoice == 'paper') {
        if (computerChoice == 'scissors') {
            result = `{"status":"success", "computer":"${computerChoice}", "winner":"computer"}`;
        } else {
            result = `{"status":"success", "computer":"${computerChoice}", "winner":"player"}`;
        }
    };

    let res = JSON.parse(result);

    return res;
};

exports.play = play;