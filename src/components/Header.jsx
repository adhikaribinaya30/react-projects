import { Link } from "react-router"
import './Header.css'

export function Header(){
  return(
    <div className="nav">
      <button className="to-home-button"><Link to="/" className="link">Game Zone</Link></button>
    </div>
  )
}