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
    board = ["", "", "",
            "", "", ""
          , "", "", ""]
        render()
}

function render() {
    board.forEach(function(mark,index){
squares[index].textContent = mark    });

}

function handleTurn(event) {
    let idx = squares.findIndex(function (square) {
        return square === event.target
    })
    board[idx] = turn

turn = turn === "X"?"O":"X"
render()

}









 initGame();


