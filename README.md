# Tenzies Game

This project is a simple game called Tenzies implemented using Vite, React, and TypeScript. The game involves rolling dice until all dice show the same value. Each die can be held at its current value between rolls. The goal is to achieve "Tenzies" by freezing all dice at the same value.

## Features

- Randomly generates 10 dice with values between 1 and 6.
- Allows the player to roll the dice, freezing chosen dice values.
- Displays a confetti explosion when the player achieves "Tenzies."
- Tracks and displays the number of steps taken to win the game.

## Technologies Used

- Vite: A fast build tool for modern web development.
- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- nanoid: A small, secure, URL-friendly unique ID generator.
- react-confetti-explosion: A React component for creating confetti explosions.

## How to Run

1. Clone the repository.
   git clone https://github.com/pcosin/tenzies-game.git
2. cd tenzies-game
3. npm install
4. npm run dev

## Gameplay instructions

-Click each die to freeze it at its current value between rolls.
-Roll the dice until all dice show the same value to achieve "Tenzies."
-Click the "Roll" button to roll the dice, or "New Game" after achieving "Tenzies".

Have fun playing Tenzies! If you have any issues or suggestions, feel free to open an issue or contribute to the project.