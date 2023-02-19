import React  from 'react';
import './Header.css'
function Header() {
     return (
         <>
           {/* <div className='header'>

               <img src = {require('./logo 2.png')}  className= "logo2" />
               <p className='Qp'>Quantifine Pharmacy</p>
           </div> */}

           <div className='bg-[#ffffff] w-full h-[55px] fixed border-b overflow-auto' >
           <img src = {require('./logo 2.png')}  className= "ml-[50px]" />
           <span className='text-[#082161] absolute top-2 left-10 ml-[80px] text-[24px]'>Quantifine Pharmacy</span>
           </div>
         </>
     )
}
export default Header;