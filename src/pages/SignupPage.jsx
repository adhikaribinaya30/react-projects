import './SignupPage.css';
import { Link } from "react-router"
import { useState } from "react"
import {supabase} from "../supabase-client"
import { useNavigate } from 'react-router';

export function SignupPage(){
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e){
    setLoading(false);
    e.preventDefault();
    const {error} = await supabase.auth.signUp({email, password});
    if (error){
      console.log("Error signing up", error);
      return;
    }

    setLoading(true);
    alert("Signup successful! Please check your email or log in.");
    navigate("/"); 
  
  }

  if(loading){
    return (<div className="loading-screen">Loading...</div>)
  }

  return(

    <>
      <title>SignUp</title>
      <div className='signup-page-main'>


        <div className='signup-box'>

          <form className='signup-input-area' onSubmit={(e) => handleSubmit(e)}>

            <p className='signup-heading'>SIGNUP</p>

            <div className='signup-input-box'>
              <input type="email" placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='signup-input-box'>
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            <div className='signup-button'>
              <button type='submit'>SignUp</button>
            </div>
            
            <div className='login-link'>
              <p>Already have an account? <Link to="/login" className='signup-a'>Login</Link> here.</p>
            </div>
            
          </form>

        </div>


      </div>
    </>
  )
}