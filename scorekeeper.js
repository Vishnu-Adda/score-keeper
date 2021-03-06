var p1Button = document.querySelector("#p1");
var p1Score = 0;
var p1Display = document.querySelector("#p1Display");

var p2Button = document.getElementById("p2");
var p2Score = 0;
var p2Display = document.querySelector("#p2Display");

var resetButton = document.getElementById("reset");

var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		p1Display.textContent = p1Score;
		if(p1Score === winningScore) {
			p1Display.classList.add("winner");
			console.log("GAME OVER!!!");
			gameOver = true;
		}
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		p2Display.textContent = p2Score;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			console.log("GAME OVER!!!");
			gameOver = true;
		}
	}
	
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;

	p1Display.textContent = 0;
	p2Display.textContent = 0;

	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");

	gameOver = false;
}

/* EXECUTES WHEN A CHANGE TO THE VALUE OCCURS */
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value); // This converts it to a String
	reset();
});
