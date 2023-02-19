import React from 'react';
import './Mobilepass.css';

function Mobilepass() {
    return(
        <div>
        <div className='rectanglefogot'>
           <p className='forgotpass'>Forgot Password</p>

           <p className='forgotyrpass'>Create New Password?</p>

           <img src= {require('./forgot-password.png')} className= "forgotpasslogo" />
            <p className='forgotpasscontent'>Your new password must be diffrent from</p>
            <p className='forgotpasscontent1'>previous used password</p>
          

            <form>
                <label className='mobileemail'>Password *</label>
                <input type="text" className='mobileemail1'/>

                <label className='mobilepass'>Confirm Password *</label>
                <input type="text" className='mobilepass1'/>
                <button className='resetpassword'>Reset Password</button>
            </form>
        </div>
        </div>
    )
}

export default Mobilepass