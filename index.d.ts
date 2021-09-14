// Typings for '@sinisterdev/rock-paper-scissor' written by SinisterDeveloper <https://github.com/SinisterDeveloper>

declare module '@sinisterdev/rock-paper-scissor' {
    export interface Result {

        // Whether the game functioned as expected
        success: boolean;

        // string containing the computer's choice
        computer: string | null;

        // string containing the winner of round (player/computer/tie)
        winner: 'player' | 'computer' | 'tie' | null;

        // The error message, null when operation is successful
        error: string | null;
    }

    function play(choice: string, force?: boolean): Result;
}