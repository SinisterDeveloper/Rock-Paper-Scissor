// Typings for '@sinisterdev/rock-paper-scissor' written by SinisterDeveloper <https://github.com/SinisterDeveloper>

declare module '@sinisterdev/rock-paper-scissor' {
    export interface Result {

        // string containing the status of the round (either 'success' or 'error')
        status: string;

        // string containing the computer's choice
        computer: string;

        // string containing the winner of round (player/computer/tie)
        winner: string;

    }

    function play(choice: string): Result;
}