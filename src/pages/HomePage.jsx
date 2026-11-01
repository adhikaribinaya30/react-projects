import './HomePage.css';
import { Header } from '../components/Header'
import { GameSet } from '../components/GameSet'

export function HomePage(){
  return(
    <>
      <Header />
      <div className="main">
        <h1>Hey there fella! - Pick A Game</h1>
        <GameSet />
      </div>
    </>
    
  );
}