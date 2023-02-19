import React from 'react';
import './Login1.css';
import {FaRegEnvelope} from "react-icons/fa";
import {BiLockAlt} from "react-icons/bi";

function Login1() {
    return(
        
         <div className='rectangle'>
             <p className='wtqp'>Welcome To Quantifine Pharmacy</p>
            <form>
             <label className='Email'>Email *</label>

             <FaRegEnvelope className='envelope'/>
             <input type="text" className='emailIput' />
            

             
             <label className='Password'>Password *</label>
             <BiLockAlt className='lock'/>
             <input type="text" className='passIput' />
          
             
             <div className='check1'> 
               <input type="checkbox" className="checkbx" />
               <span className='rem'>Remember me</span>
              </div>

              <button className='logBtn1'>Log In</button>
              </form>
              <p className='forgetPass1'><a> Forget Password ?</a></p>
         </div>
    
    )
}
export default Login1