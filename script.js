let ball = document.querySelector(".ball");
console.log(ball)



1.

let shakebutton = document.querySelector("#shakebutton ");
console.log(shakebutton)


shakebutton.addEventListener("click", makeShake)

function makeShake(){
    console.log("make shake");
    ball.classList.toggle("shakeCSS");


}

2.

let pulsebutton = document.querySelector("#pulsebutton ");
console.log(pulsebutton)


pulsebutton.addEventListener("click", makePulse)

function makePulse(){
    console.log("make pulse");
    ball.classList.toggle("pulsecss");


}

3.

let jumpbutton = document.querySelector("#jumpbutton ");
console.log(jumpbutton)


jumpbutton.addEventListener("click", makeJump)

function makeJump(){
    console.log("make jump");
    ball.classList.toggle("jumpcss");


}








