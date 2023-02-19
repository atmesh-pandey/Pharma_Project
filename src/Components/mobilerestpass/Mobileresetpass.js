import React from 'react';
import './Mobileresetpass'
 
function Mobileresetpass() {
        return(
            <div className='rectanglefogot'>
             <p className='forgotpass'>Forgot Password</p>

             <p className='forgotyrpass'>Reset Your Password?</p>
    
                <img src= {require('./forgot-password.png')} className= "forgotpasslogo" />
              <p className='forgotpasscontent'>Enter verification code we just sent to your</p>
              <p className='forgotpasscontent1'>email address</p>
           

              <form>
                  <label className='mobileemail'>Verify Code</label>
                  <input type="text" className='mobileemail1'/>

                  <button className='sendemail'>Submit</button>
              </form>
          </div>
        )
}
export default Mobileresetpass;