
import { FaMap } from 'react-icons/fa';
import course_image1 from '../assets/image/course/course.webp';
const FeaturedJobs = () => {
    return (
        <div className="w-12/12 bg-[#F1F5F8] py-8">
            <div className="w-11/12 mx-auto">
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center max-w-lg mt-8">
                        <h1 className="text-center text-[35px] font-extrabold">Featured Jobs</h1>
                        <p className="text-[15px] font-normal text-[rgb(79,94,100)] text-center leading-6">

                            At vero eos et accusamsus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                        </p>
                    </div>
                </div>


                {/* card featured */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-6'>

                        {/* first card */}
                    <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                    </div>

                             {/* first card */}
                             <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                             </div>


                                      {/* first card */}
                    <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                    </div>


                             {/* first card */}
                             <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                    </div>




                             {/* first card */}
                             <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                    </div>



                             {/* first card */}
                             <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                    </div>




                             {/* first card */}
                             <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                    </div>




                             {/* first card */}
                             <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                    </div>




                             {/* first card */}
                             <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                    </div>





                             {/* first card */}
                             <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                    </div>








                             {/* first card */}
                             <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                    </div>






                             {/* first card */}
                             <div className="card bg-base-100 w-full md:w-[293px] h-[380px] border-[1px] cursor-pointer hover:border-green-600 hover:border-[px] shadow-sm">
                        <div className="card-body">


                            <div className="relative">
                                <div className="absolute top-2 left-[-32px] flex flex-col gap-2">
                                    <div className="px-3 py-1 bg-[#D9EFE8] text-sm rounded-r-lg text-black">Featured</div>
                                    <div className="px-3 py-1 bg-[#FFECDE] text-sm rounded-r-lg text-black">Urgent</div>
                                </div>
                                <div className="absolute top-2 right-[-32px] px-3 py-1 bg-green-100 text-green-800 text-sm rounded-l-lg">Full Time</div>
                            </div>


                            <div className="flex justify-center mt-8">
                                <img className='w-20 h-20 rounded-full' src={course_image1} alt="" />
                            </div>

                            <div className='info flex flex-col text-center space-y-2'>
                                <p className='text-[14px] font-normal text-[#4f5e64]'>Snapchat</p>
                                <h2 className='text-[15px] font-bold text-[#022f5d]'>Sr. Code Ignetor Developer</h2>
                                <div className='flex justify-center items-center space-x-2'>
                                    <FaMap></FaMap> <span className='text-[12px] font-normal text-[#4f5e64]'>London, UK</span></div>
                            </div>


                            <div className='tag flex flex-wrap gap-1 justify-center'>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                                <button className='btn btn-sm text-[#6a828f] text-[11px]'>HTML</button>
                            </div>





                            <div className="card-actions flex mt-3 md:mt-1 justify-evenly items-center">
                                <p><span className='text-[14px] font-bold text-[#05264e]'>$80K - 110K</span> <span className='text-[#6a828f]'>\Year</span></p>
                                <button className="btn btn-sm btn-primary font-normal bg-[#D9EFE8] hover:border-green-600 border-green-600 text-green-600 hover:text-white hover:bg-[#1ca774] text-[12px]">Quick Apply</button>
                            </div>
                        </div>






                    </div>



                </div>

            </div>
        </div>
    );
};

export default FeaturedJobs;