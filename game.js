
window.onload = main
var turn = 0;
function main() {
	
	document.state = "X";
	setMessage(document.state + " starts the game."); 
	setButtonText("Clear Board");
}

function setMessage(msg)
{
	document.getElementById("message").innerText = msg;
}
function setButtonText(msg)
{
	document.getElementById("button").innerText = msg;
}
function changeState()
{
	switch(document.state)
	{
		case "X":
			document.state = "O";
			break;
		case "O":
			document.state = "X";
			break;
		default:
			// for a default case keep the turn state to X.
			document.state = "X" 
			break;
	}
	//output for whose turn it is//
	setMessage("Its " + document.state + "'s turn.");
}

function move(cell)
{
	turn += 1;
	if(turn == 9)
	{
		//write onto the cell
		cell.innerText = document.state;
		//Write game over message
		setMessage("Game Over");
		//change Button text
		setButtonText("Try Again");
	}
	else if(turn < 9)
	{
		//Check if the player has already moved in this cell
		if(cell.innerText == "")
		{
			//write onto the cell
			cell.innerText = document.state;
			//change the current turn state
			changeState();
		}
		else
		{
			turn -= 1
			setMessage("That cell is occupied.")
		}
	}
	else
	{
		setMessage("Game Has Ended!")
	}
}

function clearBoard()
{	//set all the span elements to "" and reset turn count
	setMessage("Its " + document.state + "'s turn");
	setButtonText("Clear Board");
	var x = document.getElementById("grid");
	var c = x.getElementsByClassName("cell");
	var txt = "";
	 for (i = 0; i < c.length; i++) {
        c[i].innerText = txt;
    }
	turn = 0;
}