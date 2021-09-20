//Initialize global variables and arrays
let roundCounter = 0
let  computerPattern = []
let humanPattern =[]
let colorID = ""

const startBtn = document.getElementById('startGame')
const getSquares = document.querySelectorAll(".square")
const headingStatus = document.querySelector(".statusText")
// startBtn.addEventListener("click", clickSquare)

function newGame () {
    level =0
    computerPattern = []
    humanPattern = []
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
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    console.log (randomColor)
    headingStatus.textContent = "Round: " + roundCounter
    // return randomColor ;
  
    //update the computerPattern array
    computerPattern.push(randomColor)
    console.log(computerPattern)
    for (i=0; i < computerPattern.length; i++){
        console.log (randomColor)
        
        activateTile(computerPattern[i])
    }
}

function activateTile(color) {
    console.log(color)
     let colorSound = ""   
    if (color == "yellow"){
        console.log(color)
        colorID = "0"
        console.log(colorID)
        colorSound = "data-sound='yellow'"

    }
    else if (color == "blue"){
        console.log(color)
        colorID= "1"
        console.log(colorID)
        colorSound = "data-sound='blue'"

    }
    else if (color == "red"){
        console.log(color)
        colorID= "2"
        console.log(colorID)
        colorSound = "data-sound='red'"
    }
    else if (color == "green"){
        console.log(color)
        colorID = "3"
        console.log(colorID)
        colorSound = "data-sound='green'"

    }
    const tile = document.querySelector.id=`${color}`  ;
    console.log(tile)
    console.log(colorID)

   let tempStyle = document.getElementById(colorID)

   //    console.log("sound: " +colorSound)
//    colorSound = document.getElementsByClassName.hidden = (colorSound);
//    console.log("sound: " +colorSound)


//     // colorSound.playAudio()
    //Toggle Opacity of the square
    
    console.log(tempStyle)
    tempStyle.style.opacity= ".20"
 
    setTimeout(() => {
      tempStyle.style.opacity = "1";
    }, 900);
    console.log(computerPattern)

  }
function userTurn (event){
console.log ("userTurn event")
// let humanClick = document.querySelector.
//
if (event.target.id == "0"){
    console.log(event.target.id)
    humanColor = "yellow"
    console.log(humanColor)
    colorSound = "data-sound='yellow'"

}
else if (event.target.id == "1"){
    console.log(event.target.id)
    humanColor = "blue"
    console.log(humanColor)
    colorSound = "data-sound='blue'"

}
else if (event.target.id == "2"){
    console.log(event.target.id)
    humanColor = "red"
    console.log(humanColor)
    colorSound = "data-sound='red'"
}
else if (event.target.id == "3"){
    console.log(event.target.id)
    humanColor = "green"
    console.log(humanColor)
    colorSound = "data-sound='green'"

}
//update human player array
humanPattern.push(humanColor)
console.log(humanPattern)

// Compare the results
console.log("comparing")
for (i=0; i<computerPattern.length; i++){
    console.log(computerPattern[i])
    console.log(humanPattern[i])
    if (computerPattern[i] !== humanPattern[i]){
        alert ("No Match.  Game is over")

    }
    else {
        // alert ("Match")
        //Start next computer Random color
    }
    console.log("turn: " + roundCounter)
    }
    humanPattern = []
    computerTurn()
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

//Testing area to call functions    
    newGame ()
    // console.log(computerPattern)
    // computerTurn()
    // console.log([computerPattern])
    // computerTurn ()
    // // computerSquareColor("red")