var correct = document.querySelector("#correct");
var square = document.querySelectorAll(".square");
var reset = document.querySelector("#reset");
var headerColor = document.querySelector("h1").style.backgroundColor;
var buttons = document.querySelectorAll("button");
var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy");
var bottom = document.querySelector("#bottom");
var numSquares = 6;
var colors = generateColors(numSquares);


// pick target color
var randomNum  = (Math.floor(Math.random() * colors.length));
var targetColor = colors[randomNum];
setTarget(targetColor);

// set colors and eventlisteners
for(var i = 0; i < square.length; i++){
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click",function(){
        if( this.style.backgroundColor === targetColor){
            playerWins();
        } else {
            this.style.backgroundColor = "black";
            correct.innerHTML = "Try again"
        }
    })
}
// Reset Button Click
reset.addEventListener("click", function(){
    document.querySelector("h1").style.backgroundColor = headerColor;
    correct.innerHTML = "";

    colors = generateColors(numSquares);
    randomNum = (Math.floor(Math.random() * colors.length));
    console.log(randomNum);
    targetColor = colors[randomNum];
    setTarget(targetColor);

    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i];
        square[i].addEventListener("click",function(){
            if( this.style.backgroundColor === targetColor){
                playerWins();
            } else {
                this.style.backgroundColor = "black";
                correct.innerHTML = "Try again"
            }
        })
    }
})

// Easy Button Click
easy.addEventListener("click", function(){
    bottom.classList.add("hide");
    hard.classList.remove("selected");
    easy.classList.add("selected");
    if(numSquares == 6){
        numSquares = 3;
        
        document.querySelector("h1").style.backgroundColor = headerColor;
        correct.innerHTML = "";

        colors = generateColors(numSquares);
        randomNum = (Math.floor(Math.random() * colors.length));
        console.log(randomNum);
        targetColor = colors[randomNum];
        setTarget(targetColor);

        for(var i = 0; i < square.length; i++){
            square[i].style.backgroundColor = colors[i];
            square[i].addEventListener("click",function(){
                if( this.style.backgroundColor === targetColor){
                    playerWins();
                } else {
                    this.style.backgroundColor = "black";
                    correct.innerHTML = "Try again"
                }
            })
        }
    }
})

hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    bottom.classList.remove("hide");
    if(numSquares == 3){
        numSquares = 6;
        
        document.querySelector("h1").style.backgroundColor = headerColor;
        correct.innerHTML = "";

        colors = generateColors(numSquares);
        randomNum = (Math.floor(Math.random() * colors.length));
        console.log(randomNum);
        targetColor = colors[randomNum];
        setTarget(targetColor);

        for(var i = 0; i < square.length; i++){
            square[i].style.backgroundColor = colors[i];
            square[i].addEventListener("click",function(){
                if( this.style.backgroundColor === targetColor){
                    playerWins();
                } else {
                    this.style.backgroundColor = "black";
                    correct.innerHTML = "Try again"
                }
            })
        }
    }
})

//===================== Functions =====================

// set target color
function setTarget(targetColor){
    document.querySelector("#targetColor").textContent = targetColor;
}

function playerWins(){
    for(var i = 0; i < square.length; i++){
        correct.innerHTML = "Correct";
        square[i].style.backgroundColor = targetColor;
        document.querySelector("h1").style.backgroundColor = targetColor;
    }
}

function generateColors(numcolors){
    var colors = [];
    for(var i = 0; i< numcolors; i++){
        var color = "rgb("+randcol()+", "+randcol()+", "+randcol()+")";
        colors.push(color);
    }
    return colors;
    function randcol(){
        return Math.floor(Math.random() * 255);
    }
}