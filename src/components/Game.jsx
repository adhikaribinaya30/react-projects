import { Link } from 'react-router'
import { gameList } from './data'
import './Game.css'

export function Game({gameTitle}){

  const game = gameList.find((game) => gameTitle === game.gametitle);

  return(

    <Link to={game.path} className='Box'>
      <img src='null' alt="game-image" /> 
      <h2>{gameTitle}</h2>
    </Link>

  )
}