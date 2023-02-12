/*-- constants  --*/
const winningCombo = [
[0,1,2],
[3,4,5],
[6,7,8],
[1,4,7],
[2,5,8],
[0,3,6],
[0,4,8],
[2,4,6]
]

/*-- app's states(variables)  --*/
let board
let turn = 'X'
let win

/*-- cached elements references  --*/
const squares = Array.from(document.querySelectorAll('#board div'))
const messages = document.querySelector('h2')


/*-- event listeners --*/
document.getElementById('board').addEventListener('click',handleTurn)

document.getElementById('reset-button').addEventListener('click',initGame)

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
messages.textContent = win === 'T'?"It's a tie!" : win?` ${win} wins this round`:`Its ${turn}'s turn`

}

function handleTurn(event) {
    let idx = squares.findIndex(function (square) {
        return square === event.target
    })
    board[idx] = turn
win = getWinner()

turn = turn === "X"?"O":"X"
render()

}

function getWinner() {
    let winner = null

    winningCombo.forEach(function(combo,index){
        if(board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]])
        winner = board[combo[0]]
    })
    return winner ? winner : board.includes('')? null: "T"
}









 initGame();


