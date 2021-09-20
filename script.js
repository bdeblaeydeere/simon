//Initialize global variables and arrays
let roundCounter = 0
let  computerPattern = []
let humanPattern =[]
let colorID = ""
let userClicks = 0
let clicksLeft = ""

const startBtn = document.getElementById('startGame')
const getSquares = document.querySelectorAll(".square")
const headingStatus = document.querySelector(".statusText")
const turnsStatus = document.querySelector(".turnsText")
// startBtn.addEventListener("click", clickSquare)

function newGame () {
    roundCounter = 0
    level =0
    computerPattern = []
    humanPattern = []
    userClicks = 0
    computerTurn()
}
function initGame () {
    //disable click while computer is showing button presses and tones
    //startBtn.classList.add ('hidden')
}

function computerTurn(){
    //Generate a random color
    roundCounter ++
    const colors = ["yellow", "blue", "red","green"]
    ///Random color generation based on https://medium.com/front-end-weekly/create-simon-game-in-javascript-d53b474a7416
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    // console.log (randomColor)
    headingStatus.textContent = "Round: " + roundCounter
    // return randomColor ;
  
    //update the computerPattern array
    computerPattern.push(randomColor)
    // console.log(computerPattern)
    // let i=0
    //Update # of turns left
    userClicks = 0
    clicksLeft = computerPattern.length - userClicks
        turnsStatus.textContent = clicksLeft + " choices left"
    
    // WORKING DISPLAY CODE BETWEEN HERE --->
    let delay = 1
    for (i=0; i < computerPattern.length; i++){
        
        console.log (delay)
        console.log
        activateTile(computerPattern[i], i)
    }
   
    // <----- WORKING DISPLAY CODE BETWEEN HERE 
   
    humanPattern = []
    userClicks = 0

}

function activateTile(color, delay) {
    console.log("computer array" + computerPattern)
    
    //start delay loop
        setTimeout(function() {
        
    // console.log(color)
     let colorSound = ""   
    if (color == "yellow"){
        // console.log(color)
        colorID = "0"
        // console.log(colorID)
        colorSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
    }
    else if (color == "blue"){
        // console.log(color)
        colorID= "1"
        // console.log(colorID)
        colorSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")
    }
    else if (color == "red"){
        // console.log(color)
        colorID= "2"
        // console.log(colorID)
        colorSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")    }
    else if (color == "green"){
        // console.log(color)
        colorID = "3"
        // console.log(colorID)
        colorSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
    }
    const tile = document.querySelector.id=`${color}`  ;
    console.log(tile)
    console.log(colorID)

   let tempStyle = document.getElementById(colorID)

    //Play the correct sound for each color  
    colorSound.play()


    //Toggle Opacity of the square
    // console.log(tempStyle)
    tempStyle.style.opacity= ".20"
 
    setTimeout(() => {
      tempStyle.style.opacity = "1";
    }, 900);
    console.log(computerPattern)
    console.log(humanPattern)
    
    //Ends the Delay loop
    }, 900 * delay)
    
  }
function userTurn (event){
    console.log ("userTurn event")
    
    userClicks ++
    // let humanClick = document.querySelector.
    //
    if (event.target.id == "0"){
        console.log(event.target.id)
        humanColor = "yellow"
        console.log(humanColor)
        colorSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")

    }
    else if (event.target.id == "1"){
        console.log(event.target.id)
        humanColor = "blue"
        console.log(humanColor)
        colorSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")

    }
    else if (event.target.id == "2"){
        console.log(event.target.id)
        humanColor = "red"
        console.log(humanColor)
        colorSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")    
    }
    else if (event.target.id == "3"){
        console.log(event.target.id)
        humanColor = "green"
        console.log(humanColor)
        colorSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")

    }
    //update human player array
     //Play the correct sound for each color  
    colorSound.play()
    humanPattern.push(humanColor)
    console.log(humanPattern)

    // Compare the results
    console.log("comparing")
    console.log("user click count: " + userClicks)
    // Logic idea borrowed from https://www.youtube.com/watch?v=n_ec3eowFLQ&t=3134s around min 54.
    if (humanPattern[humanPattern.length-1] !== computerPattern[humanPattern.length-1]){
        // console.log ("No Match.  Game is over")
        alert("Too bad, that's the wrong move!  A new game will start when you click OK.")
        newGame()
    }
    else {
        if (userClicks == 20){
            alert ("You won!  Awesome job!  You should get out more.  Click OK to play again.")
        }
        else{
            console.log ("Match!  Keep going")
        }
    }
    //  MY OLD LOGIC CHECK
        // for (i=0; i<humanPattern.length; i++){
        //     console.log(computerPattern[i])
        //     console.log(humanPattern[i])
        //     console.log (computerPattern[i] == humanPattern[i])
        //     if (computerPattern[i] != humanPattern[i]){
        //         console.log ("No Match.  Game is over")

        //     }
        //     else {
        //         console.log ("Match!  Keep going")
        //         //Start next computer Random color
        //     }
        //     console.log("turn: " + roundCounter)
        // }
    //  END - MY OLD LOGIC CHECK
        console.log(humanPattern)
        console.log(humanPattern)
        clicksLeft = computerPattern.length - userClicks
        if (clicksLeft ==1){
            turnsStatus.textContent = clicksLeft + " turn left"    
        }
        else {
            turnsStatus.textContent = clicksLeft + " turns left"
        }


        if (userClicks === roundCounter){
            computerTurn()
        }

}


function clickSquare (event,){
    // console.log ("hover event")
    // console.log (event)
    event.target.style.opacity=".50";
    userTurn (event)
} 
    
function hoverSquare (event,){
// console.log ("hover event")
// console.log (event)
event.target.style.opacity=".50";

} 
function hoverSquareOriginal (event){
    // console.log ("hover event")
    // console.log (event)
    event.target.style.opacity="1";
} 

for (i=0; i< getSquares.length; i++) {
    getSquares[i].addEventListener("click", clickSquare)
    getSquares[i].addEventListener("mouseover", hoverSquare)
    getSquares[i].addEventListener("mouseout", hoverSquareOriginal)
}

startBtn.addEventListener("click", (console.log("start button")) )
//Testing area to call functions    
    newGame ()
    // console.log(computerPattern)
    // computerTurn()
    // console.log([computerPattern])
    // computerTurn ()
    // // computerSquareColor("red")
