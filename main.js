window.addEventListener("load", start, false);

count = 0

//A placeholder function to replace document.getElementById() with $()
function $(x){ return document.getElementById(x)}


function start()
{
	/*When Page loads*/
	
	for (var i of "123456789")
	{
		//Makes all grid to be empty
		$(i).innerHTML = ''
	}
	
	//Tex to show whose turn it is to play
	$("player1").innerHTML = "Your Turn";
	$("player2").innerHTML = ""
	
	//Happens when restart button is clicked
	$('restart').onclick = function(){$('restart').style.backgroundColor = 'white';}
}

function mark(x)
{
	/*
	Function to append 'X' or 'O' to any grid clicked by player,
	depending on the player
	*/
	//If all grid has been clicked but no winner
	++count
	if (count == 9)
	{
		//Prints 'It is a draw'
		$("finalStatus").innerHTML = "<h3>It is a draw</h3>"
	}
	
	//Gets ths letter('X' or 'O') of the player who currently clicked
	currMark =  ($("player1").innerHTML == 'Your Turn'? "X" : "O")
	
	//Appends the mark to rhe grid box the person clicked
	x.innerHTML = currMark;
	
	//Gets the next player
	changePlayer(currMark, x)
	
	//Check if the game is won
	checkForWin(currMark)
}

function stopClick()
{
	//Stop Clicking event for all boxes that has beem clicked
	event.stopPropagation()
}


function changePlayer(y, marked)
{
	/*A function that sets the states ready for the next player
	*/
	
	//Ensures the box that was just clicked cant be re-clicked
	marked.onclick = stopClick()
	
	//Specifies whose turn it currently is based on the mark that was just appended
	if ( y == 'X')
	{
		$('player1').innerHTML = ''
		$('player2').innerHTML = 'Your Turn';
	}
	else
	{
		$('player1').innerHTML = 'Your Turn'
		$('player2').innerHTML = ''
	}
}


function checkForWin(currMark)
{
	/*Function to check if a win has occured.
	A win occurs if same letter is in 3 of the boxes whose id are specified by 1-9
	(123, 456, 789, 147,258,369,159,357)
	*/
	
	player = {"X": "Player One", "O": "Player Two"}
	
	//Checks if a letter has been registered in 3boxes that means a win(I dont know the Englisj to use)
	if( comp('123',currMark) || comp('456', currMark) || comp('789', currMark) || comp('147', currMark) || comp('258', currMark) || comp('369', currMark) || comp('159', currMark) || comp('357', currMark) )
	{
		//A win has occured and we prevent user from clicking any of the buttons
		for (var i of "123456789")
		{
			$(i).onclick = stopClick()
		}
		
		//Outputs the winninh status
		$("finalStatus").innerHTML = "<h3>" + player[currMark] + " wins</h3>"
		
		//Sets the turns state to an empty string
		for (var i of ["123", "456", "789", "147", "258", "369", "159", "357"])
		{
			$('player1').innerHTML = ''
			$('player2').innerHTML = ''
			
			//Changes content of the row/column/diagonal that caused the win
			if (comp(i,currMark)){color(i); break}
		}
	
	}
}

function comp(id_str, currMark)
{
	/*
	A function that compares content of 3 of all boxes with the mark that was just appended to check for eauality
	*/
	one = $(id_str[0]).innerHTML; two = $(id_str[1]).innerHTML; three = $(id_str[2]).innerHTML
//	alert(one);alert(two);alert(three)
	return ((one == currMark) && (two == currMark) && (three == currMark)  ? true : false)
}

function color(x){
	//Changes the color
	for (var i of x){
		$(i).style.color = "rgb(115,24,16)";
		$(i).style.fontWeight = 'bold';
		}
	} 
//Thank you for following. 
//Author : Steph Crown.