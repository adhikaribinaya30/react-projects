import './LoginPage.css';
import { Link } from "react-router"
import { useState } from 'react';
import {supabase} from "../supabase-client"

export function LoginPage(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    const {error} = await supabase.auth.signInWithPassword({email, password});
    if (error){
      console.log("Error signing up", error);
      return;
    }
    
  }

  return(
    <>
      <title>Login</title>
      <div className='login-page-main'>


        <div className='login-box'>

          <form className='login-input-area' onSubmit={(e) => {handleSubmit(e)}}>

            <p className='login-heading'>LOGIN</p>

            <div className='login-input-box'>
              <input type="text" placeholder='Username' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            </div>

            <div className='login-input-box'>
              <input type="password" placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            
            <div className='login-button'>
              <button type='submit'>LogIn</button>
            </div>
            
            <div className='signup-link'>
              <p>Don't have an account? <Link to="/signup" className='login-a'>Signup</Link> here.</p>
            </div>
            
          </form>

        </div>


      </div>
    </>
  )
}