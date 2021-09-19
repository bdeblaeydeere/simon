//Initialize global variables and arrays
let roundCounter = 0
const  computerPattern = []
const humanPattern =[]

const startBtn = document.querySelector('startGame')
const getSquares = document.querySelectorAll(".square")
statusText.innertext = "Let's Play Simon!"

const temptile = document.getElementById("id=red");
// const sound = document.querySelector(`[id='${color}']`);
console.log(temptile)


function newGame () {
    level =0
    computerPattern = []
    humanPattern = []
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
    // return randomColor ;
  
    //update the computerPattern array
    computerPattern.push(randomColor)
    console.log(computerPattern)

}

// Computer turn color code start here
function colorToggle (color) {
    console.log("delay before")
    setTimeout (computerSquareColor (color),1000)
    
}

function activateTile(color) {
    const tile = document.querySelector.id=`${color}`  ;
    // document.getElementById("p2").style.color="blue";
    console.log(tile)

   let tempStyle = document.getElementById("2")
   console.log(tempStyle)
   tempStyle.style.opacity= ".20"
    // const sound = document.querySelector(`[id='${color}']`);
//   tile.style.opacity=".50"
    // tile.style.opacity = ".50";
    // sound.play();
  
    setTimeout(() => {
      tempStyle.style.opacity = "1";
    }, 2000);
  }

function computerSquareColor (color){
        
    let csqTemp = document.querySelector([id = `${color}`])
    console.log(csqTemp)
    for (i=0; i<computerPattern.length; i++){
        let square = document.querySelector(id=`${color}`);
        console.log(square)
    }
}

function SquareColor (event) {
    console.log (event)
    // const squareColor = document.querySelector('[id = '${color}']')
    let originalColor = event.srcElement.innerText
    console.log (originalColor)
    originalColor = "green"
    if (originalColor == "red") {
        event.target.style.backgroundColor = "pink"
    }
    // event.target.style.backgroundColor = "`light${originalColor}`"
    event.target.style.backgroundColor = "purple"

    //green.classlist.add('selected');
    console.log ("temp", event.target.style.backgroundColor)
    setTimeout (delay,2000);
    event.target.style.backgroundColor = originalColor
    console.log(event.target.style.backgroundColor)
    // event.target.style.backgroundColor = green.classlist.remove('selected')
    //     moves[event.target.firstElementChild.id] = "red"
    // event.target.addEventListener("mouseout",)
    //     console.log (moves)
}
// Computer turn color code stop here


function clickSquare (event,){
    console.log ("hover event")
    console.log (event)
    event.target.style.opacity=".50";
    
    } 
    
function hoverSquare (event,){
console.log ("hover event")
console.log (event)
event.target.style.opacity=".50";

} 
function hoverSquareOriginal (event){
    console.log ("hover event")
    console.log (event)
    event.target.style.opacity="1";
    
    } 

for (i=0; i< getSquares.length; i++) {
    getSquares[i].addEventListener("click", clickSquare)
    getSquares[i].addEventListener("mouseover", hoverSquare)
    getSquares[i].addEventListener("mouseout", hoverSquareOriginal)

}

//Testing area to call functions    
    // computerTurn ()
    // console.log(computerPattern)
    // computerTurn()
    // console.log([computerPattern])
    computerSquareColor("red")
    activateTile("red")