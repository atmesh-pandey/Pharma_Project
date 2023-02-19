import React from 'react';
import Outerheader from '../outerheader/Outerheader';
import Sidebar from '../sidebar/Sidebar';


function Editpatientsform() {
    return (
        <>
            <Outerheader />
            <Sidebar />
            <div className='flex justify-start pl-48 pt-[4.5rem]'>
                <div className='flex'>
                    <p className='text-[#082161] font-medium'>Patients</p>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[8px] ml-[12px]'>
                        <path d="M6.63554 4.5832C6.63554 4.74748 6.56027 4.91175 6.41004 5.037L1.68024 8.97846C1.37937 9.22919 0.891551 9.22919 0.590798 8.97846C0.290046 8.72783 0.290046 8.3214 0.590798 8.07065L4.77599 4.5832L0.590945 1.09572C0.290193 0.844994 0.290193 0.438603 0.590945 0.187997C0.891697 -0.0628534 1.37951 -0.0628534 1.68039 0.187997L6.41018 4.12939C6.56044 4.25471 6.63554 4.41897 6.63554 4.5832Z" fill="#082161" />
                    </svg>
                    <p className='ml-[12px] text-[#666666] font-medium'>Edit Patient</p>
                </div>
            </div>

            <div>
                {/* <div className="h-[51px] w-full bg-slate-500">   </div>
                <div className="left-0 w-[15%] bg-slate-800 h-full fixed"> </div> */}
                <div>
                    <div className='w-[60vw] max-h-full mx-[28rem] relative'>
                        <h4 className=' text-blue-900 mx-1 mb-3'><b>Edit Patient Details</b></h4>

                        <form>
                            <div class="w-full max-w-lg mx-8">
                                <div class="flex flex-wrap -mx-3 mb-2">
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-last-name">
                                            First Name
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-9" id="grid-last-name" type="text" />
                                    </div>
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-last-name">
                                            Last Name
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-9" id="grid-last-name" type="text" />
                                    </div>
                                </div>

                                <div class="flex flex-wrap -mx-3 mb-2">
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-state">
                                            Gender
                                        </label>
                                        <div class="relative">
                                            <select class="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-600 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-9" id="grid-state">
                                                <option>Select</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-last-name">
                                            Mobile No
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-9" id="grid-last-name" type="text" placeholder='+63' />
                                    </div>
                                </div>

                                <div class="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="mr-[9.8rem] block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-state">
                                            Date of Birth
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 border border-gray-300 rounded text-gray-600 py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-9" type="date" />
                                    </div>
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-last-name">
                                            Mobile No
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-600 border border-gray-300 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-9" id="grid-last-name" type="text" placeholder='+63' />
                                    </div>
                                </div>


                                <div class="flex flex-wrap -mx-3 mb-2">
                                    <div class="w-full px-3">
                                        <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-password">
                                            Address
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-9" id="grid-password" type="text" />
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block mr-[26rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                            Country
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-9" id="grid-last-name" type="text" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="mr-[10rem] block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                            City
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-9" id="grid-last-name" type="text" />
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="mr-[11rem] block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                            State
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-9" id="grid-last-name" type="text" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="mr-[11rem] block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                            Patient Complaint
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-9" id="grid-last-name" type="text" />
                                    </div>
                                </div>
                                <div className='flex justify-end mt-5'>
                                    <button class="btn btn-outline text-white capitalize btn-sm mr-[1rem] hover:#082161 bg-[#082161]">Submit</button>
                                    <button class="btn btn-outline text-[#082161] capitalize btn-sm">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Editpatientsform;