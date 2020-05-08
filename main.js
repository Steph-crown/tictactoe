window.addEventListener("load", start, false);
count = 0
function $(x){ return document.getElementById(x)}

function start()
{
	for (var i of "123456789")
	{
		$(i).innerHTML = ''
	//	$(i).trigger('anyEvent');
	}
	$("player1").innerHTML = "Your Turn";
	$("player2").innerHTML = ""
	$('restart').onclick = function(){$('restart').style.backgroundColor = 'white';}
}

function mark(x)
{
	++count
	if (count == 9)
	{
		$("finalStatus").innerHTML = "<h3>It is a draw</h3>"
	}
	currMark =  ($("player1").innerHTML == 'Your Turn'? "X" : "O")
	x.innerHTML = currMark;
	changePlayer(currMark, x)
	checkForWin(currMark)
}

function stopClick()
{
	event.stopPropagation()
}




function changePlayer(y, marked)
{
	marked.onclick = stopClick()
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
	player = {"X": "Player One", "O": "Player Two"}
	if( comp('123',currMark) || comp('456', currMark) || comp('789', currMark) || comp('147', currMark) || comp('258', currMark) || comp('369', currMark) || comp('159', currMark) || comp('357', currMark) )
	{
		for (var i of "123456789")
		{
			$(i).onclick = stopClick()
		}
		$("finalStatus").innerHTML = "<h3>" + player[currMark] + " wins</h3>"
		for (var i of ["123", "456", "789", "147", "258", "369", "159", "357"])
		{
		//	alert(comp(i, currMark))
			if (comp(i,currMark)){color(i); break}
		}
	
	}
}

function comp(id_str, currMark)
{
	//alert(currMark)
	one = $(id_str[0]).innerHTML; two = $(id_str[1]).innerHTML; three = $(id_str[2]).innerHTML
//	alert(one);alert(two);alert(three)
	return ((one == currMark) && (two == currMark) && (three == currMark)  ? true : false)
}
function color(x){
	//alert(x)
	for (var i of x){
		$(i).style.color = "rgb(115,24,16)";
		$(i).style.fontWeight = 'bold';
		}
	} //115 24 16