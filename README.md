# Project: Simon

## Installation: 
None needed.  Web based game located at https://bddeere-simon.netlify.app

## Preview

Remake of the popular Simon memory game from the 1970s and 80s

## Technology used:

- JavaScript, CSS and HTML.
- Free soundfiles to play to tones for when the game's buttons are pressed.
- Modern web browser like Safari, Chrome, Firefox or Edge

## Purpose of the game:
The game is a memory game where computer generates a color & tone based sequence starting at one and then increasing.  The user has to reproduce the same sequence produced by the computer as it gets longer and longer.

## Approach:
My approach to the game was to take what I had learned from another game project, Tic-Tac-Toe, and apply it to this new challenge.
I used a 2x2 HTML table with colored cell elements as the basis for my game board.  CSS styling would allor for things like more rounded corners, opacity, shadowing, and gradients.
I used Javascript to change the hover options on the buttons, control the game flow, add sounds, and check win conditions.
### Major Challenges:
- Managing computer and user input:  I used two arrays to track the computer sequence and the human player's sequence.  I wanted to use a single function to represent the selection of the buttons even though one array was a random computer generation and the other came from user mouse input.
- Figuring out the logic for the player's turn to compare the user's input sequence to computer's sequence.  I started with a FOR loop initially, but did not generate the outcomes I needed.  After researching alternate options I went with a more simple IF statement that would work its way through the users array and compare it to the same position of the computer's sequence.
- CSS formatting to make it look more like a game table than four basic squares.
- Researching things to improve accessibility for like font contrast and sound files.

## User Stories
- As a player, I want to visually be able to tell when a button is "pushed" so that I can try to recall it.
- As a player, I want a distinguishable sound played whenever a button is pushed, so that I can tell by sound and/or sight that a botton is pushed.
- As a player, I want to know how many clicks I have left so that I know how many more moves I have to match.
- As a player, I want to know what round of the game I am in so that I know how far I've made it.
- As a player, I want to be able to read the colors on the button in case I am color blind and cannot distinguish certain colors from each other.
- As a player, I want a simple to use interface so I can play right away.
- As a player, I want to know if I win by matching all 35 moves by the computer.
- 
## What's left?
- Enhance button pushes and sounds to be smoother.
- Enhance CSS for further visual presentation.
- Enhance accessibility options for visual and hearing impaired players.
- Add a scoreboard 
