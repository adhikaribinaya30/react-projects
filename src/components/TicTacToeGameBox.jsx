import './TicTacToeGameBox.css'
import { useState } from 'react'


export function TicTacToeGameBox() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xsTurn, setxsTurn] = useState(true);
  const [winner, setWinner] = useState(null);


  function checkWinner(board) {
    const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    for (let i = 0; i < winConditions.length; i++){

      const [ one, two, three ] = winConditions[i];
       
      if ((board[one] === board[two] && board[two] === board[three]) && board[one] != null) {
        return board[one];
      }

      
    }
    return null;
  }

  function handleClick(index) {
    const nextBoard = board.slice();
    if (board[index] || winner) return;
    nextBoard[index] = xsTurn ? "X" : "O";

    setBoard(nextBoard);
    setxsTurn(!xsTurn);
    
    const winneywinny = checkWinner(nextBoard);

    if (winneywinny){
      setWinner(winneywinny);
    }else if (!nextBoard.includes(null)){
      setWinner("DRAW");
    }
    
  }

  function resetGame(){
    setBoard(Array(9).fill(null));
    setxsTurn(true);
    setWinner(null);
  }

  return (
    <>
      <p className='winner-display'>{winner? `${winner === "DRAW"? 'DRAW':`Winner: ${winner}`}`: `Next Player: ${xsTurn? "X": "O"}`}</p>
      <div className="game">
        {board.map((value, index) => (
          <button
            key={index}
            className="box"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <button onClick={resetGame} className='reset-button'>Reset</button>
    </>
  )
}