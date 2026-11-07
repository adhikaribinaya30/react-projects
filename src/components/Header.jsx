import { Link } from "react-router"
import './Header.css'
import {supabase} from '../supabase-client'

export function Header(){

  async function logout(){
    await supabase.auth.signOut();
  }

  return(
    <div className="nav">
      <button className="to-home-button"><Link to="/" className="link">Game Zone</Link></button>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  )
}