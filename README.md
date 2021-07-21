![Dependencies](https://img.shields.io/badge/Dependenices-0-brightgreen) [![CodeFactor](https://www.codefactor.io/repository/github/sinisterdeveloper/rock-paper-scissor/badge/stable)](https://www.codefactor.io/repository/github/sinisterdeveloper/rock-paper-scissor/overview/stable)

# About
Integrate the "Rock-Paper-Scissors" game into your project using this simple package
* Get the results easily in the form of an object
* No bugs discovered till date
* Beginner friendly and fast

# Installation
```bash
npm install @sinisterdev/rock-paper-scissor
```
# Usage
```javascript
const game = require('@sinisterdev/rock-paper-scissor');

const result = game.play("rock"); /* Options: ["rock", "paper", "scissors"] */

console.log(result); // Returns an object containing result
console.log(result.status) // Returns string containing either "success" or "error"
console.log(result.winner) // Returns a string containing the winner of round (player/computer/tie)
console.log(result.computer) // Retuns the computer's choice in form of string
```

# Result Object

`<Result>` is the Result object:

`<Result>.status` - Returns string containing the status of the round (either "success" or "error")

`<Result>.winner` - Returns the winner of the round in the form of a string. Note that the round may result in a tie

`<Result>.computer` - Returns the computer's choice in form of a string.


# Issues

If you have any bugs, or if you want to request a feature, please open an issue
