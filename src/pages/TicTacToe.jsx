import { Header } from "../components/Header"
import { TicTacToeGameBox } from "../components/TicTacToeGameBox"

export function TicTacToe() {
  return (
    <>
      <Header />
      <div className="main">
        <h1>Tic Tac Toe</h1>
        <TicTacToeGameBox />
      </div>
    </>

  )
}