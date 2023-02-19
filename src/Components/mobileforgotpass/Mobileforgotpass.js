import React from 'react';
import './Mobileforgotpass.css';

function Mobileforgotpass() {
    return (

        <div>
          <div className='rectanglefogot'>
             <p className='forgotpass'>Forgot Password</p>

             <p className='forgotyrpass'>Forgot Your Password?</p>

             <img src= {require('./forgot-password.png')} className= "forgotpasslogo" />
              <p className='forgotpasscontent'>Enter the email associated with your account</p>
              <p className='forgotpasscontent1'>and we'll send a verification code to reset your</p>
              <p className='forgotpasscontent2'>password</p>

              <form>
                  <label className='mobileemail'>Email *</label>
                  <input type="text" className='mobileemail1'/>

                  <button className='sendemail'>Send</button>
              </form>
          </div>
          </div>
    )
}
export default Mobileforgotpass