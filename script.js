//Initialize global variables and arrays
let roundCounter = 0
const computerPattern = []
const humanPattern =[]
const startBtn = document.querySelector('startGame')
const getSquares = document.querySelectorAll(".square")
statusText.innertext = "Let's Play Simon!"



function initGame () {
    //disable click while computer is showing button presses and tones
    //startBtn.classList.add ('hidden')
}

function delay () {
    console.log("delay")
}
// const changeSquareColor = (event) =>{
function changeSquareColor (event) {

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
    getSquares[i].addEventListener("click", changeSquareColor)
    getSquares[i].addEventListener("mouseover", hoverSquare)
    getSquares[i].addEventListener("mouseout", hoverSquareOriginal)

}
