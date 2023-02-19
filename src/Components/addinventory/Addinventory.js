import React from 'react'
import Outerheader from '../outerheader/Outerheader'
import Sidebar from '../sidebar/Sidebar'

function Addinventory() {
    return(
        <>
        <Outerheader />
            <Sidebar />
            <div className='ml-[260px] mt-[11px]'>
                <div className='flex'>
                    <p className='text-[#082161] font-medium'>Inventory</p>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[8px] ml-[12px]'>
                        <path d="M6.63554 4.5832C6.63554 4.74748 6.56027 4.91175 6.41004 5.037L1.68024 8.97846C1.37937 9.22919 0.891551 9.22919 0.590798 8.97846C0.290046 8.72783 0.290046 8.3214 0.590798 8.07065L4.77599 4.5832L0.590945 1.09572C0.290193 0.844994 0.290193 0.438603 0.590945 0.187997C0.891697 -0.0628534 1.37951 -0.0628534 1.68039 0.187997L6.41018 4.12939C6.56044 4.25471 6.63554 4.41897 6.63554 4.5832Z" fill="#082161" />
                    </svg>
                    <p className='ml-[12px] text-[#666666] font-medium'>Add Inventory</p>
                </div>
            </div>

            <p className='text-[#082161] font-medium mr-[650px] flex justify-center ml-[25rem] mt-[4rem]'>Add Inventory</p>

                {/* <form>
                    <div className='flex'>
                        <div className='flex flex-col'>
                            <div className="form-control flex flex-col">
                                <label className="label mt-2 mr-[150px]">
                                    <span className="label-text text-gray-600">Generic Name</span>
                                </label>
                               

                                    <input type="text" className="input input-bordered w-[250px] mt-2 rounded-md h-[30px]" />
                                
                            </div>

                            <div className="form-control flex flex-col">
                                <label className="label mt-2 mr-[190px]">
                                    <span className="label-text text-gray-600 ">Category</span>
                                </label>
                               

                                <select className='bg-[#FFFFFF]  w-[250px] mt-2 rounded-md h-[30px]'>
                                <option value="select">Select</option>
                                <option value="male">Tablet</option>
                                <option value="female">Syrup</option>
                                <option value="male">Tablet</option>
                                <option value="female">Syrup</option>
                            </select>
                                
                            </div>
                                  
                            <div className="form-control flex flex-col">
                                <label className="label mt-2 mr-[220px]">
                                    <span className="label-text text-gray-600 ">Unit</span>
                                </label>
                               

                               
                                <select className='bg-[#FFFFFF]  w-[250px] mt-2 rounded-md h-[30px]'>
                                <option value="select">Select</option>
                                <option value="male">Bottle</option>
                                <option value="female">Piece</option>
                                <option value="male">Strips</option>
                                <option value="female">Box</option>
                                <option value="female">Pack</option>
                            </select>
                                
                            </div>
                              
                            <div className="form-control flex flex-col">
                                <label className="label mt-2 mr-[170px]">
                                    <span className="label-text text-gray-600">Expire Date</span>
                                </label>
                               

                                <input type="date" className='bg-[#FFFFFF] ml-[3px] w-[250px] mt-2 rounded-md h-[30px]' />

                            
                            </div>
                           
                           
                           
                            <div className="form-control flex flex-col">
                                <label className="label mt-2 mr-[170px]">
                                    <span className="label-text text-gray-600">Base Price</span>
                                </label>
                               

                                <input type="text" className='bg-[#FFFFFF] ml-[3px] w-[250px] mt-2 rounded-md h-[30px]' />
                                
                            </div>
                        </div>
                        <div className='flex flex-col ml-[100px]'>
                            <div className="form-control flex flex-col">
                                <label className="label mt-2 mr-[210px]">
                                    <span className="label-text text-gray-600">Brand Name</span>
                                </label>
                                <input type="text" className="input input-bordered w-[250px] mt-2 rounded-md h-[30px]" />
                            </div>
                            <div className="form-control flex flex-col">
                                <label className="label mt-2 mr-[210px]">
                                    <span className="label-text text-gray-600">Batch Name</span>
                                </label>
                                <input type="text" className="input input-bordered w-[250px] mt-2 rounded-md h-[30px]" />
                            </div>
                            <div className="form-control flex flex-col">
                                <label className="label mt-2 mr-[200px]">
                                    <span className="label-text text-gray-600">Purchase Date</span>
                                </label>
                                <input type="date" className="input input-bordered w-[250px] mt-2 rounded-md h-[30px]" />
                            </div>
                            <div className="form-control flex flex-col">
                                <label className="label mt-2 mr-[200px]">
                                    <span className="label-text text-gray-600">Total Quantity</span>
                                </label>
                                <input type="password" className="input input-bordered w-[250px] mt-2 rounded-md h-[30px]" />
                            </div>
                            <div className="form-control flex flex-col">
                                <label className="label mt-2 mr-[200px]">
                                    <span className="label-text text-gray-600">Selling Price</span>
                                </label>
                                <input type="password" className="input input-bordered w-[250px] mt-2 rounded-md h-[30px]" />
                            </div>
                        </div>
                    </div>
                    <div className='flex  mt-[20px] ml-[20px]'>
                        <button className='bg-[#082161] h-[30px] w-[100px] text-[#ffffff] rounded-md'>Submit</button>
                        <button className='ml-[20px] bg-[#ffffff] h-[30px] w-[100px] text-[#082161] rounded-md'>Cancle</button>
                    </div>
                </form> */}

<div className='flex justify-center ml-[10rem]'>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block mr-[10rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Generic Name
                            </label>
                            <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" />

                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block mr-[10rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Brand Name
                            </label>
                            <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
                        </div>

                        <div className="w-full md:w-1/2 px-3 ">
                            <label className="mr-[11rem] block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Category
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-[#ffffff] border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                                    <option>Select</option>
                                    <option>Tablet</option>
                                    <option>Syrup</option>
                                    <option>Tablet</option>
                                    <option>Syrup</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block mr-[10rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Batch Name
                            </label>
                            <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-[1rem]">
                            <label className="block mr-[12.5rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Unit
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-[#ffffff] border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                                    <option>Select</option>
                                    <option>Bottle</option>
                                    <option>Piece</option>
                                    <option>Strips</option>
                                    <option>Box</option>
                                    <option>Pack</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>

                        </div>

                        <div className="w-full md:w-1/2 px-3 mt-[1rem]">
                            <label className="block mr-[9rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Purchase Date
                            </label>
                            <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" />
                        </div>

                        


                         <div className="w-full md:w-1/2 px-3 mt-[1rem] ">
                                <label className="mr-[9.8rem] block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                    Expire Date
                                </label>
                                <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="date" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mt-[2.5rem]">
                                <label className="block mr-[10rem] mt-[-1.6rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Total Quantity
                                </label>
                                <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" />
                            </div>

                            <div className="w-full md:w-1/2 px-3 mt-[.3rem] ">
                                <label className="mr-[10rem] block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                  Base Price
                                </label>
                                <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mt-[2rem]">
                                <label className="block mr-[8rem] mt-[-1.6rem] tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Selling Price
                                </label>
                                <input className="appearance-none block w-full bg-[#ffffff] text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" />
                            </div>
                           
                         
                    </div>
                    <div className='mr-[20rem] mt-[-1.5rem]'>
                        <button class="btn btn-outline mr-[1rem] bg-[#082161] text-[#ffffff]">Submit</button>

                        <button class="btn btn-outline text-[#082161]">Cancle</button>
                    </div>
                </form>

            </div>
        </>
    )
}
export default Addinventory