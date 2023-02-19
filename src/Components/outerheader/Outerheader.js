import React from 'react';
import { Link } from 'react-router-dom';

function Outerheader() {
    return (
        <div>
            <div className="fixed navbar bg-base-100 h-[3rem]">
                <div className="flex-1">
                    <img src="./image/logo1.svg" alt="" />
                    <h3 className='text-[#082161] text-xl'><b>Quantifine Pharmacy</b></h3>

                </div>
                <div>
                    <input type='text' placeholder="search here....." className="mt-3 searchhere absolute top-2 left-[30rem] form-control mr-[12rem] block px-4 h-[2.5rem] w-[12rem] p-1 mt-[1rem]  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none drop-shadow-md" />
                </div>

                <div className="flex-none gap-2">
                    <div className='mt-1'>
                        <img src="./image/chatIcon.svg" alt="" />
                    </div>
                    <div className="indicator mx-3">
                        <img src="./image/notification.svg" alt="" />
                        <span class="indicator-item badge badge-secondary"></span> 
                    </div>
                    <div className="w-8 rounded-full">
                        <img src="./image/admin.svg" />
                    </div>
                    <div className='my-0 mx-3'>
                        <p><b>Alexander</b></p>
                        <p>Admin</p>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className='mr-5'>
                            <img src="./image/adminDropdown.svg" style={{height:'20px', width:'20px'}} />
                        </label>
                        <ul tabIndex="0" id='tabindex' className=" mr-5 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 bg-slate-200">
                            <li><a><i className=" hover:bg-[#082161]"></i>My Profile</a></li>
                            <li><a><i className="ri-edit-2-fill hover:bg-[#082161]"></i>Edit Profile</a></li>
                           <Link to={'/changepassword'}> <li><a><i className="ri-edit-2-fill hover:bg-[#082161]"></i>Change Password</a></li></Link>
                            <li><a><i className="ri-settings-2-line hover:bg-[#082161]"></i>Settings</a></li>
                            <li><a className='text-red-700 hover:bg-[#082161]'><i className="ri-logout-box-r-line"></i><b>Logout</b></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Outerheader;