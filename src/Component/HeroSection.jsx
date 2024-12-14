 import girl_photo  from '../assets/image/hero/girl.webp';

const HeroSection = () => {
    return (
        <div className=' flex-col  md:flex-row flex justify-between mt-5'> 
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


                <div className="button">
                    <button className=" px-6 py-4 bg-[#1ca774] text-white rounded-lg text-lg border-[#1ca774]">Explore All Jobs</button>
                    <button className="btn">Watch Video</button>

                </div>
                <h2>Sponserd by Populars:</h2>

            </div>
            <div className="right-sectipn">
                <img src={girl_photo} className='mt-0' alt="" />
            </div>
        </div>
    );
};

export default HeroSection;