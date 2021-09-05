//restart button
var restart= document.querySelector("#b");

//getting values of all squares
var squares= document.querySelectorAll("td");


//clearing out the board
function clearBoard()
{for(var i=0;i<squares.length; i++)
{
    squares[i].textContent= "";
}
}
//event listener on restart button
restart.addEventListener("click",clearBoard);

//changing marker on the board
function changeMarker()
{
    if(this.textContent === '')
    {
        this.textContent = 'X';
    }
    else if(this.textContent=== 'X')
    {
        this.textContent = 'O';
    }
    else
    this.textContent= '';
}

for(var i=0;i<squares.length; i++)
{
    squares[i].addEventListener("click",changeMarker);
}