![Dependencies](https://img.shields.io/badge/Dependenices-0-brightgreen)

# About
Integrate the "Rock-Paper-Scissors" game into your project using this simple package
* Get the results easily in the form of JSON
* No bugs discovered till date

# Installation
```sh-session
npm install @sinisterdev/rock-paper-scissor
```
# Usage
```javascript
const game = require('rock-paper-scissor');

const result = game.play("rock"); /* Options: ["rock", "paper", "scissors"] */

console.log(result);
/*
{ status: 'success/failure', computer: 'rock/scissors/paper', winner: 'player/computer' }
*/
```

# Issues
If you have any bugs, or if you want to request a feature, please open an issue