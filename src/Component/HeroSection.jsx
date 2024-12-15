import { RiVideoFill } from 'react-icons/ri';
import girl_photo from '../assets/image/hero/girl.webp';
import c_logo1 from '../assets/image/Company logo/capsule-primary.svg';
import c_logo2 from '../assets/image/Company logo/fitbit-primary.svg';
import c_logo3 from '../assets/image/Company logo/layar-primary.svg';
import c_logo4 from '../assets/image/Company logo/mailchimp-primary.svg';
import c_logo5 from '../assets/image/Company logo/vidados-primary.svg';
import animation1 from '../assets/image/animaton/image1.webp';
import 'animate.css';


const HeroSection = () => {
    return (
        <div className=' w-11/12 mx-auto flex-col  md:flex-row flex gap-14 md:justify-between mt-5'>
            <div className="left-sectipn ">

                <div className='rounded-[32px] px-4 w-60 py-2 bg-[#DBEDED] font-medium textarea-md text-[#1ca774]'>
                    --- Get Hot & Trending Jobs
                </div>

                <div className='font-extrabold text-[#05264e] w-[500px] text-[25px] md:text-[53.2px] leading-[69px]'>
                    Remote Work Platform For Digital Team
                </div>

                <div className='text-[#4f5e64] font-normal text-xl leading-9 mt-7 mb-8'>
                    Getting a new job is never easy. Check what new jobs we have in store for you on Job Stock
                </div>


                <div className="button flex space-x-4">
                    <button className=" px-6 py-4 bg-[#1ca774] text-white rounded-lg text-lg border-[#1ca774]">Explore All Jobs</button>
                    <div className='flex items-center'>
                        <button className="btn rounded-full bg-[#DBEDEB] text-[#1ca774]" > <RiVideoFill className='text-2xl'></RiVideoFill> </button>
                        <span className='text-sm text-[#022f5d] font-medium hover:text-[#1ca774] cursor-pointer'>Watch Video</span>
                    </div>


                </div>

                <div className='company_info'>
                    <h2 className='textarea-md font-medium text-[#05264e] mt-10 ml-[-20px]'>Sponserd by Populars:</h2>
                    <div className='company log flex space-x-4'>
                        <img className='w-[70px] md:w-[100px]' src={c_logo1} alt="" />
                        <img className='w-[70px] md:w-[100px]' src={c_logo2} alt="" />
                        <img className='w-[70px] md:w-[100px]' src={c_logo3} alt="" />
                        <img className='w-[70px] md:w-[100px]' src={c_logo4} alt="" />
                        <img className='w-[70px] md:w-[100px]' src={c_logo5} alt="" />

                    </div>
                </div>



            </div>
            <div className="right-sectipn relative">
                <img src={girl_photo} className='mt-2 md:mt-28 w-[90%]' alt="" />
               <div className=' hidden animate__animated animate__bounce animate__infinite	infinite animate__slow w-16 h-16 md:flex justify-center items-center rounded-full shadow-2xl border-teal-100 
               absolute top-[305px] left-[45px]'>
               <img src={animation1} className='w-10 h-10 rounded-full' alt="" />
               </div>
            </div>
        </div>
    );
};

export default HeroSection;