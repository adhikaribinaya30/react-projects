import { Header } from "../components/Header"
import { TicTacToeGameBox } from "../components/TicTacToeGameBox"

export function TicTacToe() {
  return (
    <>
      <title>Tic Tac Toe</title>
      <Header />
      <div className="main">
        <h1>Tic Tac Toe</h1>
        <TicTacToeGameBox />
      </div>
    </>

  )
}