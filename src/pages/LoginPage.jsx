import './LoginPage.css';
import { Link } from "react-router"

export function LoginPage(){
  return(
    <>
      <title>Login</title>
      <div className='login-page-main'>


        <div className='login-box'>

          <form className='login-input-area'>

            <p className='login-heading'>LOGIN</p>

            <div className='login-input-box'>
              <input type="text" placeholder='Username' />
            </div>

            <div className='login-input-box'>
              <input type="password" placeholder='Password'/>
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