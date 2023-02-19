import React from 'react';
import Outerheader from '../outerheader/Outerheader';
import Sidebar from '../sidebar/Sidebar';


function Addstaff() {
    return (
        <>
        <Outerheader />
            <Sidebar />
            <div className=' overflow-hidden'>
                <div className='ml-[260px] mt-[11px]'>
                    <div className='flex'>
                        <p className='text-[#082161] font-medium'>Staff</p>
                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[8px] ml-[12px]'>
                            <path d="M6.63554 4.5832C6.63554 4.74748 6.56027 4.91175 6.41004 5.037L1.68024 8.97846C1.37937 9.22919 0.891551 9.22919 0.590798 8.97846C0.290046 8.72783 0.290046 8.3214 0.590798 8.07065L4.77599 4.5832L0.590945 1.09572C0.290193 0.844994 0.290193 0.438603 0.590945 0.187997C0.891697 -0.0628534 1.37951 -0.0628534 1.68039 0.187997L6.41018 4.12939C6.56044 4.25471 6.63554 4.41897 6.63554 4.5832Z" fill="#082161" />
                        </svg>
                        <p className='ml-[12px] text-[#666666] font-medium'>Add Staff</p>
                    </div>
                </div>


                <p className='text-[#082161] font-medium mr-[650px] flex justify-center ml-[28rem] mt-[3rem]'>Add Staff Details</p>

                <div className='flex justify-center ml-[11rem] mt-[1rem]'>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block mr-[10rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" />

                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block mr-[10rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
                            </div>

                            <div className="w-full md:w-1/2 px-3 ">
                                <label className="mr-[11rem] block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                    Gender
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-[#ffffff] border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                                        <option>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block mr-[8.5rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Mobile Number
                                </label>
                                <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
                            </div>

                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-[1rem]">
                                <label className="block mr-[9rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Date of Birth
                                </label>
                                <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="date" />

                            </div>

                            <div className="w-full md:w-1/2 px-3 mt-[1rem]">
                                <label className="block mr-[12rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Email
                                </label>
                                <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" />
                            </div>

                            <div className="w-full md:w-1/2 px-3 ">
                                <label className="mr-[12rem] block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                    Role
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-[#ffffff] border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                                        <option>Select</option>
                                        <option>Admin</option>
                                        <option>Doctor</option>
                                        <option>Nurse</option>
                                        <option>Pharmacist</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block mr-[10.5rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Password
                                </label>
                                <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-[1rem]">
                                <label className="block mr-[8rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Date of Joining
                                </label>
                                <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="date" />

                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <div className='flex'>
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-11'>
                                    <circle cx="21" cy="21" r="21" fill="#D9D9D9" />
                                    <path d="M28 31V27.6667C28 25.8986 27.5786 24.2029 26.8284 22.9526C26.0783 21.7024 25.0609 21 24 21H18C16.9391 21 15.9217 21.7024 15.1716 22.9526C14.4214 24.2029 14 25.8986 14 27.6667V31" fill="#082161" />
                                    <path d="M28 31V27.6667C28 25.8986 27.5786 24.2029 26.8284 22.9526C26.0783 21.7024 25.0609 21 24 21H18C16.9391 21 15.9217 21.7024 15.1716 22.9526C14.4214 24.2029 14 25.8986 14 27.6667V31" stroke="#082161" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                    <path d="M21 17C23.2091 17 25 15.2091 25 13C25 10.7909 23.2091 9 21 9C18.7909 9 17 10.7909 17 13C17 15.2091 18.7909 17 21 17Z" fill="#082161" stroke="#082161" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                </svg>
                                <input className="appearance-none block w-full h-[3rem] mt-[2.5rem] bg-[#ffffff] ml-[0.5rem] text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="file" />
                                
                            </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button class="btn btn-outline text-white capitalize btn-md mr-[1rem] hover:#082161 bg-[#082161]">Submit</button>
                            <button class="btn btn-outline text-[#082161] capitalize btn-md">Cancel</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
export default Addstaff;