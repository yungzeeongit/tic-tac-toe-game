/*-- constants  --*/

/*-- app's states(variables)  --*/
let board
let turn = 'X'

/*-- cached elements references  --*/
const squares = Array.from(document.querySelectorAll('#board div'))



/*-- event listeners --*/
document.getElementById('board').addEventListener('click',handleTurn)


/*-- functions --*/

function initGame() {
    board = ["2", "5", "6",
            "2", "3", "5"
          , "8", "6", "7"]
        render()
}

function render() {
    board.forEach((mark,index) => {
squares[index].textContent = mark    });

}

function handleTurn(event) {
    let idx = squares.findIndex(function (square) {
        return square = event.target
    })
    board[idx] = turn

 }









 initGame();


