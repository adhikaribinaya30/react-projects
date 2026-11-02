import './SignupPage.css';
import { Link } from "react-router"

export function SignupPage(){
  return(
    <>
      <title>SignUp</title>
      <div className='signup-page-main'>


        <div className='signup-box'>

          <form className='signup-input-area'>

            <p className='signup-heading'>SIGNUP</p>

            <div className='signup-input-box'>
              <input type="text" placeholder='Username' />
            </div>

            <div className='signup-input-box'>
              <input type="password" placeholder='Password'/>
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