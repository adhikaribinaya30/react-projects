import { gameList } from "./data";
import { Game } from "./Game";
import './GameSet.css'

export function GameSet(){
  return(
    <div className="game-list-container">
      {
        gameList.map((game) => (
          <Game gameTitle={game.gametitle} key={game.key}/>
        ))
      }
    </div>
  );
}