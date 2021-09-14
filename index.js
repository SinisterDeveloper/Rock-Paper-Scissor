'use strict';

/**
 * Same as String#replaceAll()
 * Note: This was made as Node versions > 14.17 don't support the method
 * 
 * @param {string} str The string to modify
 * @param {string} search The search character
 * @param {string} replace The replacement for search character
 * @returns {string}
 */
function replaceAll(str, search, replace) {
    let curated = '';
    for (let i in str) {
        let currentCharacter = str[i];
        if (currentCharacter === search) currentCharacter = replace;
        curated += currentCharacter;
    }
    return curated;
}

/**
 * Plays a game of Rock-Paper-Scissors
 * 
 * @param {string} choice The player's option
 * @param {boolean} force Whether the game must repeat till there is a winner(no ties)
 * @returns {Result}
 */
function play(choice, force = false) {
    const options = ['rock', 'paper', 'scissors'];
    choice = choice.toLowerCase();

    choice = replaceAll(choice, ' ', '') // To remove accidental whitespaces

    let result;

    if (!options.some(substring => choice.toLowerCase() == substring)) {
        result = {
            success: false,
            computer: null,
            winner: null,
            error: 'Invalid choice provided'
        }
    }
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    const playerChoice = choice

    if (computerChoice == playerChoice) {
        result = {
            success: true,
            computer: computerChoice,
            winner: 'tie',
            error: null,
        }
    }
    else if (playerChoice == 'rock') {

        if (computerChoice == 'paper') {

            result = {
                success: true,
                computer: computerChoice,
                winner: 'computer',
                error: null,
            }

        } else {

            result = {
                success: true,
                computer: computerChoice,
                winner: 'player',
                error: null,
            }
        }
    }
    else if (playerChoice == 'scissors') {

        if (computerChoice == 'rock') {

            result = {
                success: true,
                computer: computerChoice,
                winner: 'computer',
                error: null,
            }
        } else {

            result = {
                success: true,
                computer: computerChoice,
                winner: 'player',
                error: null,
            }
        }

    }
    else if (playerChoice == 'paper') {

        if (computerChoice == 'scissors') {
            result = {
                success: true,
                computer: computerChoice,
                winner: 'computer',
                error: null,
            }
        } else {
            result = {
                success: true,
                computer: computerChoice,
                winner: 'player',
                error: null,
            }
        }

    }
    if (force === true && result.winner === 'tie') result = play(choice, true);
    return result;
}

exports.play = play;