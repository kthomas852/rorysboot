// INSTRUCTIONS: Build a command-line based RPG/fighting game. 
// =========================================================================================================

// This game begins with you entering choices into the command line to give direction to your character.
// At some point your character will encounter a dangerous enemy (maybe a zombie).

// You and a zombie/enemy will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches or is close (creates difficulty of enemies) the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match or close to the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// If you defeat the enemy your character is then free to move about again to try and find the exit.

// Each enemy encounter the zombie/enemy is given a new random number and you must guess again. 

// The game ends when your health hits 0 or you find the "exit". 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 
// Minimum Requirement: Game must at least be able to intereact with one Enemy and have a complete battle.
// Stretch Goal: Try and build a full game experience that allows room for the character to move and battle many different enemys that are generated at random. 

// ===========================================================================================================
const inquirer = require('inquirer');

// Player Object
const player = {

}

// Enemy Object
const zombie = {

}

// Clears the screen, ready for game play now
console.log('\033[2J');

// One UI CLI prompt example
inquirer

// Exit the game(These needs to be placed strategically, need at least two)
process.exit();